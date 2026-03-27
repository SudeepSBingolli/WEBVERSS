import { NextResponse } from 'next/server';

const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const MAX_HISTORY_MESSAGES = 8;

const KEYWORD_RESPONSES = {
  admission: { reply: '📚 Admissions are open for 2025-26! Visit the Admissions page for more details.', link: '/admissions', linkText: 'Go to Admissions' },
  placement: { reply: '💼 Check our placements details and statistics. Our students are placed in top companies!', link: '/placements', linkText: 'View Placements' },
  department: { reply: '🏢 Explore all departments with programs, faculty, and facilities.', link: '/departments', linkText: 'Browse Departments' },
  contact: { reply: '📞 Get in touch with us through various departments and support teams.', link: '/contact', linkText: 'Contact Us' },
  alumni: { reply: '👥 Connect with 11,000+ SJBIT alumni across the globe.', link: '/alumni', linkText: 'Visit Alumni' },
  course: { reply: '📖 Check out our programs under different departments.', link: '/departments', linkText: 'View Programs' },
  program: { reply: '🎓 Explore our undergraduate, postgraduate, and PhD programs.', link: '/programs', linkText: 'View Programs' },
  academic: { reply: '📝 Learn about our academic structure, calendar, and policies.', link: '/academics', linkText: 'Academics Info' },
  campus: { reply: '🏫 Explore our world-class campus facilities and student life.', link: '/campus-life', linkText: 'Campus Life' },
  research: { reply: '🔬 Discover our research initiatives and innovations.', link: '/research', linkText: 'Research Details' },
  student: { reply: '👨‍🎓 Resources and information for current students.', link: '/students', linkText: 'Student Portal' },
  about: { reply: '📖 Learn about SJBIT history, mission, and vision.', link: '/about', linkText: 'About SJBIT' },
  home: { reply: '🏠 Return to our homepage.', link: '/', linkText: 'Home' }
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

  for (const [keyword, response] of Object.entries(KEYWORD_RESPONSES)) {
    if (normalized.includes(keyword)) {
      return response;
    }
  }

  return {
    reply: 'I can help with admissions, placements, departments, programs, campus life, and contact details. Ask me anything about SJBIT.',
    link: '/contact',
    linkText: 'Contact Us'
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