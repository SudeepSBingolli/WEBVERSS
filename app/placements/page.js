export const metadata = {
  title: 'Placements - SJB Institute of Technology',
  description:
    'SJBIT Placements. Our students are placed in top companies with excellent packages.',
};

const topRecruiters = [
  { name: 'Google', logo: 'https://www.google.com/s2/favicons?domain=google.com&sz=128' },
  { name: 'Microsoft', logo: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128' },
  { name: 'Amazon', logo: 'https://www.google.com/s2/favicons?domain=amazon.com&sz=128' },
  { name: 'Infosys', logo: 'https://www.google.com/s2/favicons?domain=infosys.com&sz=128' },
  { name: 'Wipro', logo: 'https://www.google.com/s2/favicons?domain=wipro.com&sz=128' },
  { name: 'TCS', logo: 'https://www.google.com/s2/favicons?domain=tcs.com&sz=128' },
  { name: 'Accenture', logo: 'https://www.google.com/s2/favicons?domain=accenture.com&sz=128' },
  { name: 'IBM', logo: 'https://www.google.com/s2/favicons?domain=ibm.com&sz=128' },
  { name: 'Deloitte', logo: 'https://www.google.com/s2/favicons?domain=deloitte.com&sz=128' },
  { name: 'Capgemini', logo: 'https://www.google.com/s2/favicons?domain=capgemini.com&sz=128' },
  { name: 'Cognizant', logo: 'https://www.google.com/s2/favicons?domain=cognizant.com&sz=128' },
  { name: 'Oracle', logo: 'https://www.google.com/s2/favicons?domain=oracle.com&sz=128' },
  { name: 'SAP', logo: 'https://www.google.com/s2/favicons?domain=sap.com&sz=128' },
  { name: 'Adobe', logo: 'https://www.google.com/s2/favicons?domain=adobe.com&sz=128' },
  { name: 'Salesforce', logo: 'https://www.google.com/s2/favicons?domain=salesforce.com&sz=128' },
  { name: 'PayPal', logo: 'https://www.google.com/s2/favicons?domain=paypal.com&sz=128' },
];

const testimonials = [
  {
    name: 'Aditi Sharma',
    role: 'Software Engineer at Google',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    quote:
      "SJBIT's placement cell prepared me incredibly well. The mock interviews and technical workshops gave me the confidence to crack my dream company.",
    package: '28 LPA',
  },
  {
    name: 'Rahul Menon',
    role: 'Data Scientist at Microsoft',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    quote:
      'The industry-aligned curriculum and hands-on projects at SJBIT made the transition from campus to corporate seamless.',
    package: '24 LPA',
  },
  {
    name: 'Priya Patel',
    role: 'Product Analyst at Amazon',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    quote:
      'From aptitude training to resume building, the placement team ensured we were ready for every stage of the recruitment process.',
    package: '22 LPA',
  },
];

const placementProcess = [
  {
    step: '01',
    title: 'Pre-Placement Training',
    description:
      'Comprehensive aptitude, soft skills, and technical training programs starting from the 5th semester.',
    icon: '🎯',
  },
  {
    step: '02',
    title: 'Resume & Profile Building',
    description:
      'Expert guidance on crafting impactful resumes, LinkedIn profiles, and professional portfolios.',
    icon: '📝',
  },
  {
    step: '03',
    title: 'Mock Interviews',
    description:
      'Multiple rounds of mock interviews with industry professionals and alumni mentors.',
    icon: '🎤',
  },
  {
    step: '04',
    title: 'Company Drives',
    description:
      'On-campus and off-campus recruitment drives with 500+ companies throughout the year.',
    icon: '🏢',
  },
  {
    step: '05',
    title: 'Offer & Onboarding',
    description:
      'Support through offer negotiation, joining formalities, and smooth onboarding transition.',
    icon: '🎉',
  },
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
    alt: 'Campus recruitment drive',
    caption: 'Annual Placement Drive 2024',
  },
  {
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop',
    alt: 'Students in interview preparation',
    caption: 'Mock Interview Sessions',
  },
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    alt: 'Placement ceremony',
    caption: 'Placement Celebration Event',
  },
  {
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
    alt: 'Technical workshop',
    caption: 'Industry Expert Workshop',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    alt: 'Group discussion training',
    caption: 'Group Discussion Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
    alt: 'Career fair',
    caption: 'SJBIT Career Fair 2024',
  },
];

const departmentStats = [
  { dept: 'Computer Science', placed: 98, avg: '14.2 LPA', highest: '44 LPA' },
  {
    dept: 'Information Science',
    placed: 96,
    avg: '12.8 LPA',
    highest: '38 LPA',
  },
  {
    dept: 'Electronics & Comm.',
    placed: 94,
    avg: '10.5 LPA',
    highest: '28 LPA',
  },
  { dept: 'Mechanical', placed: 91, avg: '8.2 LPA', highest: '18 LPA' },
  { dept: 'Civil', placed: 89, avg: '7.5 LPA', highest: '15 LPA' },
  { dept: 'Electrical', placed: 92, avg: '9.0 LPA', highest: '20 LPA' },
];

export default function PlacementsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pb-20 pt-28 md:pb-32 md:pt-36">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#E36A0A]/20 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#F59E0B]/15 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full border border-[#E36A0A]/30 bg-[#E36A0A]/10 px-4 py-1.5 text-sm font-semibold text-[#F59E0B]">
                🎓 Training &amp; Placements
              </span>
              <h1 className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Launch Your{' '}
                <span className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent">
                  Dream Career
                </span>
              </h1>
              <p className="mb-8 max-w-lg text-lg text-gray-300 md:text-xl">
                At SJBIT, we bridge the gap between academic excellence and
                industry expectations—empowering students to secure positions at
                the world&rsquo;s most sought-after organisations.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#stats"
                  className="rounded-xl bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] px-8 py-3.5 font-bold text-white shadow-lg shadow-orange-500/25 transition hover:shadow-orange-500/40"
                >
                  View Statistics
                </a>
                <a
                  href="#recruiters"
                  className="rounded-xl border-2 border-white/20 px-8 py-3.5 font-bold text-white backdrop-blur transition hover:border-[#F59E0B] hover:text-[#F59E0B]"
                >
                  Our Recruiters
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=500&fit=crop"
                      alt="Students celebrating placements"
                      className="h-52 w-full object-cover transition duration-500 hover:scale-105 sm:h-64"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop"
                      alt="Team collaboration"
                      className="h-36 w-full object-cover transition duration-500 hover:scale-105 sm:h-44"
                    />
                  </div>
                </div>
                <div className="space-y-3 pt-6">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                      alt="Interview preparation"
                      className="h-36 w-full object-cover transition duration-500 hover:scale-105 sm:h-44"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=500&fit=crop"
                      alt="Campus recruitment"
                      className="h-52 w-full object-cover transition duration-500 hover:scale-105 sm:h-64"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-orange-200 bg-white px-5 py-3 shadow-xl sm:-bottom-6 sm:-left-6">
                <p className="text-2xl font-black text-[#E36A0A]">44 LPA</p>
                <p className="text-sm text-gray-500">Highest Package 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section
        id="stats"
        className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: '100%', label: 'Placement Rate', icon: '📊' },
            { value: '12+ LPA', label: 'Average Package', icon: '💰' },
            { value: '44 LPA', label: 'Highest Package', icon: '🚀' },
            { value: '500+', label: 'Recruiting Companies', icon: '🏢' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border-2 border-orange-100 bg-white p-6 text-center shadow-lg shadow-orange-100/50 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-2 text-3xl">{s.icon}</div>
              <p className="text-2xl font-black text-[#E36A0A] sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Top Recruiters ── */}
      <section id="recruiters" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-[#E36A0A]">
              Our Recruiters
            </span>
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Over 500 companies recruit from our campus every year, ranging from
              Fortune 500 corporations to innovative startups.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {topRecruiters.map((c) => (
              <div
                key={c.name}
                className="group flex flex-col items-center justify-center rounded-xl border-2 border-gray-100 bg-white p-5 transition hover:border-orange-200 hover:shadow-lg"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt={c.name}
                  width={48}
                  height={48}
                  className="mb-2 h-12 w-12 object-contain transition group-hover:scale-110"
                />
                <span className="text-xs font-medium text-gray-500 group-hover:text-gray-900">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Placement Process ── */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-[#E36A0A]">
              How It Works
            </span>
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
              Our{' '}
              <span className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent">
                Placement Process
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {placementProcess.map((p) => (
              <div
                key={p.step}
                className="group relative overflow-hidden rounded-2xl border-2 border-orange-100 bg-white p-6 transition hover:-translate-y-1 hover:border-[#E36A0A]/30 hover:shadow-xl"
              >
                <span className="absolute -right-3 -top-3 text-7xl font-black text-orange-50 transition group-hover:text-orange-100">
                  {p.step}
                </span>
                <div className="relative z-10">
                  <div className="mb-4 text-4xl">{p.icon}</div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Department-wise Stats ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop"
                  alt="Students in placement training"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border-2 border-orange-200 bg-white p-6 shadow-xl md:block">
                <p className="text-sm font-semibold text-gray-500">
                  Year-on-Year Growth
                </p>
                <p className="text-3xl font-black text-[#E36A0A]">↑ 23%</p>
              </div>
            </div>

            <div>
              <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-[#E36A0A]">
                Department Stats
              </span>
              <h2 className="mb-8 text-3xl font-black text-gray-900 sm:text-4xl">
                Branch-wise{' '}
                <span className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent">
                  Placement Data
                </span>
              </h2>

              <div className="overflow-hidden rounded-2xl border-2 border-orange-100">
                <div className="hidden grid-cols-4 gap-2 bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] px-4 py-3 text-sm font-bold text-white sm:grid">
                  <span>Department</span>
                  <span className="text-center">Placed %</span>
                  <span className="text-center">Avg Package</span>
                  <span className="text-center">Highest</span>
                </div>

                {departmentStats.map((d, i) => (
                  <div
                    key={d.dept}
                    className={`grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-4 sm:gap-2 ${
                      i % 2 === 0 ? 'bg-white' : 'bg-orange-50/50'
                    }`}
                  >
                    <span className="font-semibold text-gray-900">
                      {d.dept}
                    </span>
                    <div className="flex items-center justify-between sm:justify-center">
                      <span className="text-xs text-gray-400 sm:hidden">
                        Placed:
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="hidden h-2 w-16 overflow-hidden rounded-full bg-orange-100 sm:block">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#E36A0A] to-[#F59E0B]"
                            style={{ width: `${d.placed}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold text-gray-700">
                          {d.placed}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between sm:justify-center">
                      <span className="text-xs text-gray-400 sm:hidden">
                        Avg:
                      </span>
                      <span className="text-sm text-gray-600">{d.avg}</span>
                    </div>
                    <div className="flex justify-between sm:justify-center">
                      <span className="text-xs text-gray-400 sm:hidden">
                        Highest:
                      </span>
                      <span className="text-sm font-bold text-[#E36A0A]">
                        {d.highest}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block rounded-full border border-[#E36A0A]/30 bg-[#E36A0A]/10 px-4 py-1 text-sm font-semibold text-[#F59E0B]">
              Success Stories
            </span>
            <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
              Hear From Our{' '}
              <span className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent">
                Placed Students
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-[#E36A0A]/40"
              >
                <div className="absolute -right-4 -top-4 text-6xl text-[#E36A0A]/10">
                  &ldquo;
                </div>
                <p className="relative z-10 mb-6 leading-relaxed text-gray-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-14 w-14 rounded-full border-2 border-[#E36A0A] object-cover"
                  />
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                  <span className="ml-auto rounded-full bg-[#E36A0A]/20 px-3 py-1 text-sm font-bold text-[#F59E0B]">
                    {t.package}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-[#E36A0A]">
              Gallery
            </span>
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
              Placement{' '}
              <span className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent">
                Highlights
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img) => (
              <div
                key={img.caption}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 translate-y-4 text-sm font-bold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Training & Support Features ── */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-[#E36A0A]">
              Training &amp; Support
            </span>
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
              What Sets Us{' '}
              <span className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent">
                Apart
              </span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '💡',
                title: 'Industry Mentorship',
                description:
                  'One-on-one mentoring from professionals at top tech companies and MNCs.',
                image:
                  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop',
              },
              {
                icon: '💻',
                title: 'Coding Bootcamps',
                description:
                  'Intensive coding and DSA bootcamps with competitive programming contests.',
                image:
                  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
              },
              {
                icon: '🤝',
                title: 'Industry Partnerships',
                description:
                  'Strategic MoUs with 100+ companies for internships, live projects, and placements.',
                image:
                  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop',
              },
              {
                icon: '📚',
                title: 'Skill Certifications',
                description:
                  'Free access to certifications from AWS, Google, Microsoft, and Coursera.',
                image:
                  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
              },
              {
                icon: '🌐',
                title: 'Global Exposure',
                description:
                  'International placement opportunities and semester exchange programs.',
                image:
                  'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=400&h=250&fit=crop',
              },
              {
                icon: '🎙️',
                title: 'Communication Labs',
                description:
                  'Dedicated language and communication labs for personality development.',
                image:
                  'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=250&fit=crop',
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group overflow-hidden rounded-2xl border-2 border-orange-100 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 text-3xl">{f.icon}</div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=600&fit=crop"
            alt="Campus"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Ready to Start Your{' '}
            <span className="bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] bg-clip-text text-transparent">
              Success Story?
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
            Join SJBIT and unlock world-class placement support, industry
            connections, and a launchpad for your career.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/admissions"
              className="w-full rounded-xl bg-gradient-to-r from-[#E36A0A] to-[#F59E0B] px-10 py-4 text-center font-bold text-white shadow-lg shadow-orange-500/25 transition hover:shadow-orange-500/40 sm:w-auto"
            >
              Apply for Admission
            </a>
            <a
              href="/contact"
              className="w-full rounded-xl border-2 border-white/20 px-10 py-4 text-center font-bold text-white transition hover:border-[#F59E0B] hover:text-[#F59E0B] sm:w-auto"
            >
              Contact Placement Cell
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}