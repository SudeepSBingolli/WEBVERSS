import { NextResponse } from 'next/server';

const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const MAX_HISTORY_MESSAGES = 8;

const KEYWORD_RESPONSES = {
  admission: { reply: '📚 Admissions 2025-26 are now open. Get complete guidance on eligibility, documents, deadlines, counseling steps, and seat intake. Our team supports applicants from first query to final admission confirmation.', link: '/admissions', linkText: 'Start Admission Journey' },
  placement: { reply: '💼 Placements are career-focused with strong recruiter engagement, training support, and interview readiness. Explore outcomes, hiring partners, and opportunities across core, tech, and emerging domains.', link: '/placements', linkText: 'See Placement Highlights' },
  department: { reply: '🏢 Departments offer domain-specialized learning, modern labs, project mentoring, and industry-aligned curriculum. Compare each branch to choose the best-fit academic and career pathway.', link: '/departments', linkText: 'Explore Departments' },
  contact: { reply: '📞 Connect with SJBIT instantly for admissions, academics, and student support. Find official contact channels and get quick guidance from the right office without delays.', link: '/contact', linkText: 'Contact SJBIT Team' },
  alumni: { reply: '👥 SJBIT alumni are making impact across top companies, startups, and research institutions worldwide. Discover the network, mentorship culture, and success journeys that inspire current students.', link: '/alumni', linkText: 'Meet Our Alumni Network' },
  course: { reply: '📖 Courses are designed for conceptual clarity, practical skills, and employability. Explore curriculum depth, electives, and learning pathways aligned with industry expectations.', link: '/departments', linkText: 'Browse Course Paths' },
  program: { reply: '🎓 SJBIT offers UG, PG, and research programs with future-ready specializations. Review program structure, outcomes, and academic progression to choose your ideal track.', link: '/programs', linkText: 'View All Programs' },
  academic: { reply: '📝 Academics at SJBIT are structured for consistency and excellence with planned calendars, evaluation transparency, and strong faculty guidance throughout every semester.', link: '/academics', linkText: 'View Academic Framework' },
  campus: { reply: '🏫 Campus life blends modern infrastructure, active student communities, and a vibrant learning environment. Explore facilities, experiences, and support systems designed for holistic growth.', link: '/campus-life', linkText: 'Take Campus Tour' },
  research: { reply: '🔬 Research culture at SJBIT encourages innovation, publications, and solution-building. Explore focus areas, project opportunities, and initiatives that connect ideas with real-world impact.', link: '/research', linkText: 'Discover Research Ecosystem' },
  student: { reply: '👨‍🎓 Student services include academic support, activity platforms, and development resources. Access tools and opportunities that help you grow beyond the classroom.', link: '/students', linkText: 'Open Student Hub' },
  about: { reply: '📖 Learn what defines SJBIT: mission, values, institutional journey, and commitment to quality technical education. See why students and families trust this ecosystem.', link: '/about', linkText: 'Know SJBIT Better' },
  hostel: { reply: '🏠 Hostel life is safe, supportive, and student-friendly with essential amenities and campus connectivity. Explore accommodation information and living support details.', link: '/campus-life', linkText: 'View Hostel Facilities' },
  fees: { reply: '💰 Get clear fee and payment guidance, including admission-linked details and available support options. Review cost planning information before you apply.', link: '/admissions', linkText: 'Check Fee Information' },
  scholarship: { reply: '🎯 Scholarship and aid opportunities help deserving students pursue education confidently. Explore available support routes and eligibility directions through Admissions.', link: '/admissions', linkText: 'Explore Scholarship Support' },
  events: { reply: '🎉 Events at SJBIT include technical fests, workshops, competitions, and cultural showcases that build confidence, creativity, and teamwork.', link: '/campus-life', linkText: 'View Event Life at SJBIT' },
  clubs: { reply: '🎭 Student clubs power innovation, leadership, and collaboration through technical and non-technical communities. Find where your passion and skills can grow.', link: '/campus-life', linkText: 'Explore Student Clubs' },
  library: { reply: '📚 Library resources support deep learning with curated collections and academic access support. Discover how students use these resources for coursework and research.', link: '/campus-life', linkText: 'See Library Resources' },
  sports: { reply: '⚽ Sports culture promotes fitness, discipline, and team spirit with active participation opportunities. Explore facilities and student engagement in athletics.', link: '/campus-life', linkText: 'View Sports Facilities' },
  faq: { reply: '❓ Get quick answers to common admission, academics, campus, and student-life questions. Ask any specific query and I will guide you to the right section instantly.', link: '/contact', linkText: 'Ask More Questions' },
  home: { reply: '🏠 Start from home to explore admissions, academics, placements, campus life, and more in one place.', link: '/', linkText: 'Go to Home' }
};

const KEYWORD_ALIASES = {
  admission: ['admission', 'admissions', 'apply', 'application', 'enroll', 'enrollment', 'intake', 'eligibility'],
  placement: ['placement', 'placements', 'recruiter', 'recruiters', 'job', 'jobs', 'career', 'ctc', 'package', 'internship', 'internships'],
  department: ['department', 'departments', 'branch', 'branches', 'cse', 'ise', 'ece', 'civil', 'mechanical', 'aiml', 'ai-ml', 'ai ml'],
  contact: ['contact', 'phone', 'email', 'mail', 'support', 'helpdesk', 'address'],
  alumni: ['alumni', 'alumnus', 'alumna', 'graduate', 'graduates', 'passout', 'passouts'],
  course: ['course', 'courses', 'curriculum', 'syllabus', 'subjects'],
  program: ['program', 'programs', 'ug', 'pg', 'phd', 'btech', 'mtech', 'degree'],
  academic: ['academic', 'academics', 'calendar', 'exam', 'exams', 'semester', 'results', 'attendance'],
  campus: ['campus', 'infrastructure', 'facility', 'facilities'],
  research: ['research', 'innovation', 'paper', 'papers', 'publication', 'publications', 'patent', 'patents', 'lab', 'labs'],
  student: ['student', 'students', 'portal', 'counselling', 'counseling', 'resources'],
  about: ['about', 'history', 'mission', 'vision', 'profile'],
  hostel: ['hostel', 'hostels', 'accommodation', 'mess', 'residence'],
  fees: ['fee', 'fees', 'tuition', 'payment', 'cost'],
  scholarship: ['scholarship', 'scholarships', 'financial aid', 'aid'],
  events: ['event', 'events', 'fest', 'fests', 'workshop', 'workshops', 'hackathon', 'hackathons'],
  clubs: ['club', 'clubs', 'society', 'societies'],
  library: ['library', 'books', 'journals', 'ebooks', 'e-journal'],
  sports: ['sport', 'sports', 'game', 'games', 'playground'],
  faq: ['faq', 'faqs', 'questions', 'common questions'],
  home: ['home', 'homepage', 'main page']
};

const ALLOWED_LINKS = new Set([
  '/',
  '/about',
  '/academics',
  '/admissions',
  '/alumni',
  '/campus-life',
  '/contact',
  '/departments',
  '/placements',
  '/programs',
  '/research',
  '/students'
]);

const SYSTEM_PROMPT = `You are SJBIT Assistant for SJB Institute of Technology.
Answer user questions helpfully, briefly, and accurately.
Use only this website navigation info:
- /admissions: admissions process and intake
- /placements: placements and recruiters
- /departments: department details and programs
- /academics: academic structure and policies
- /programs: UG/PG/PhD programs
- /research: research initiatives
- /students: student resources
- /campus-life: facilities and student life
- /alumni: alumni network
- /about: institute profile
- /contact: contact and support
- / : home page

Additional topic routing guidance:
- fee/fees/scholarship -> /admissions
- hostel/library/sports/events/clubs -> /campus-life
- course/curriculum -> /departments
- exam/calendar/results -> /academics

Return ONLY strict JSON with this shape:
{
  "reply": "string",
  "link": "string or null",
  "linkText": "string or null"
}

Rules:
- Keep reply under 80 words.
- If a page can help, include an internal link from allowed routes only.
- If no specific page fits, set link and linkText to null.`;

function normalizeHistory(history) {
  if (!Array.isArray(history)) return [];

  return history
    .slice(-MAX_HISTORY_MESSAGES)
    .filter((item) => item && typeof item.text === 'string' && (item.sender === 'user' || item.sender === 'bot'))
    .map((item) => ({ role: item.sender === 'user' ? 'user' : 'assistant', content: item.text }));
}

function findFallback(userMessage) {
  const normalized = String(userMessage || '').toLowerCase();

  for (const [topic, aliases] of Object.entries(KEYWORD_ALIASES)) {
    if (aliases.some((alias) => normalized.includes(alias))) {
      return KEYWORD_RESPONSES[topic] || KEYWORD_RESPONSES.contact;
    }
  }

  for (const [keyword, response] of Object.entries(KEYWORD_RESPONSES)) {
    if (normalized.includes(keyword)) {
      return response;
    }
  }

  return {
    reply: 'I can help with admissions, fees, scholarships, placements, departments, academics, hostel, events, clubs, library, sports, research, alumni, and contact details. Ask any one topic to get a direct answer.',
    link: '/',
    linkText: 'Explore Website'
  };
}

function parseJsonResponse(rawContent) {
  if (!rawContent || typeof rawContent !== 'string') return null;

  try {
    return JSON.parse(rawContent);
  } catch {
    const firstBrace = rawContent.indexOf('{');
    const lastBrace = rawContent.lastIndexOf('}');
    if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) return null;

    try {
      return JSON.parse(rawContent.slice(firstBrace, lastBrace + 1));
    } catch {
      return null;
    }
  }
}

function sanitizeModelReply(payload, fallback) {
  if (!payload || typeof payload.reply !== 'string' || !payload.reply.trim()) {
    return fallback;
  }

  const link = typeof payload.link === 'string' && ALLOWED_LINKS.has(payload.link) ? payload.link : null;
  const linkText = link && typeof payload.linkText === 'string' && payload.linkText.trim() ? payload.linkText : null;

  return {
    reply: payload.reply.trim(),
    link,
    linkText
  };
}

export async function POST(request) {
  try {
    const { message, history } = await request.json();

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    const fallback = findFallback(message);

    if (!OPENAI_API_KEY) {
      return NextResponse.json({ ...fallback, source: 'fallback' });
    }

    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...normalizeHistory(history),
      { role: 'user', content: message.trim() }
    ];

    const response = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        temperature: 0.5,
        messages
      })
    });

    if (!response.ok) {
      const failureText = await response.text();
      console.error('Chat API failure:', failureText);
      return NextResponse.json({ ...fallback, source: 'fallback' });
    }

    const data = await response.json();
    const rawContent = data?.choices?.[0]?.message?.content;
    const parsed = parseJsonResponse(rawContent);

    return NextResponse.json({
      ...sanitizeModelReply(parsed, fallback),
      source: 'ai'
    });
  } catch (error) {
    console.error('Chat route error:', error);
    const fallback = findFallback('');
    return NextResponse.json({ ...fallback, source: 'fallback' });
  }
}