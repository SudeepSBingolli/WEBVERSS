# SJB Institute of Technology Website (WEBVERSS)

Official website project for SJB Institute of Technology (SJBIT), Bengaluru, built with Next.js App Router.

![Next.js](https://img.shields.io/badge/Next.js-16.2.1-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)

---

## Overview

This repository contains a modern, responsive college website with:

- Multiple informational pages (Admissions, Academics, Departments, Placements, etc.)
- Reusable UI components and App Router-based pages
- A floating AI chatbot with quick replies and API-backed responses
- 3D animated background layer for visual enhancement

---

## Key Features

### Website Features

- Responsive design for desktop, tablet, and mobile
- Modern navigation with page routing
- Dedicated pages for academics, admissions, research, students, alumni, and more
- Department listing and dynamic department detail route
- 404 handling via custom `not-found.js`

### Chatbot Features

- Floating chatbot widget available across the site
- Quick topic buttons (admissions, placements, departments, academics, campus, etc.)
- Conversation history sent to backend for contextual replies
- API route at `app/api/chat/route.js`
- Multi-provider support:
  - Cohere (if `COHERE_API_KEY` is provided)
  - OpenAI (if `OPENAI_API_KEY` is provided)
  - Keyword fallback responses when AI keys are not configured
- Link-aware responses for page navigation (e.g., `/admissions`, `/placements`)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.1 (App Router) |
| UI | React 19.2.4 |
| Styling | Tailwind CSS v4 |
| 3D Background | `@react-three/fiber`, `three`, `@react-three/drei` |
| Icons | `lucide-react` |
| Linting | ESLint 9 + `eslint-config-next` |

---

## Prerequisites

- Node.js 18+ (recommended LTS)
- npm 8+
- Git

Check versions:

```bash
node --version
npm --version
git --version
```

---

## Getting Started

1. Clone repository

```bash
git clone https://github.com/SudeepSBingolli/WEBVERSS.git
cd WEBVERSS
```

2. Install dependencies

```bash
npm install
```

3. Create environment file

```bash
# .env.local

# Optional chatbot providers
COHERE_API_KEY=your_cohere_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
```

Notes:

- If both keys are present, current backend logic prefers Cohere first.
- If no AI key is configured, chatbot still works using built-in quick/fallback responses.

4. Run development server

```bash
npm run dev
```

5. Open app

- http://localhost:3000

---

## Available Scripts

- `npm run dev` — start development server
- `npm run build` — create production build
- `npm run start` — run production server
- `npm run lint` — run ESLint

---

## Full Project Structure

Current workspace structure:

```text
WEBVERSS/
├── .env.local
├── .git/
├── .gitignore
├── .next/
├── AGENTS.md
├── app/
│   ├── about/
│   │   └── page.js
│   ├── academics/
│   │   └── page.js
│   ├── admissions/
│   │   └── page.js
│   ├── alumni/
│   │   └── page.js
│   ├── api/
│   │   └── chat/
│   │       └── route.js
│   ├── campus-life/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── departments/
│   │   ├── [slug]/
│   │   │   └── page.jsx
│   │   ├── data.js
│   │   └── page.jsx
│   ├── placements/
│   │   └── page.js
│   ├── programs/
│   │   └── page.js
│   ├── research/
│   │   └── page.js
│   ├── students/
│   │   └── page.js
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   ├── not-found.js
│   └── page.js
├── CLAUDE.md
├── components/
│   ├── About.js
│   ├── Alumni.js
│   ├── Background3D.jsx
│   ├── ContactDetails.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── Infrastructure.js
│   ├── Navbar.js
│   ├── ProgramsSection.js
│   └── SmartChatbot.js
├── CONTRIBUTING.md
├── eslint.config.mjs
├── jsconfig.json
├── LICENSE
├── next.config.mjs
├── node_modules/
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public/
│   ├── departments/
│   │   ├── ai-ml.jpeg
│   │   ├── aimlbanner.jpeg
│   │   ├── civil.jpeg
│   │   ├── civilbanner.jpeg
│   │   ├── cse.jpeg
│   │   ├── csebanner.jpeg
│   │   ├── ece.jpeg
│   │   ├── ecebanner.jpeg
│   │   ├── ise.jpeg
│   │   ├── isebanner.jpeg
│   │   ├── mech.jpeg
│   │   └── mechbanner.jpeg
│   ├── campus.jpeg
│   └── logo.jpeg
├── README.md
└── SETUP.md
```

---

## Chatbot Configuration Details

Backend route:

- `POST /api/chat`

Request payload shape:

```json
{
  "message": "string",
  "history": [
    { "text": "string", "sender": "user|bot" }
  ]
}
```

Response shape:

```json
{
  "reply": "string",
  "link": "/optional-route-or-null",
  "linkText": "optional-string-or-null",
  "source": "quick|cohere|openai|fallback"
}
```

Behavior summary:

- Quick keyword responses are checked first
- If configured, AI provider response is used
- If AI is unavailable, fallback response is returned

---

## Deployment

Recommended: Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables (`COHERE_API_KEY`, `OPENAI_API_KEY`) if chatbot AI is needed
4. Deploy

Manual production run:

```bash
npm run build
npm run start
```

---

## Contribution Workflow

```bash
git checkout -b feature/your-feature
# make changes
git add .
git commit -m "feat: your change"
git push origin feature/your-feature
```

Then open a Pull Request.

---

## Documentation

- Setup guide: `SETUP.md`
- Contribution guide: `CONTRIBUTING.md`

---

## License

MIT License. See `LICENSE`.

