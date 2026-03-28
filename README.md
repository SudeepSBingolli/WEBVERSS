# SJBIT Website (WEBVERSS)

Modern, responsive website for SJB Institute of Technology (SJBIT), built with Next.js App Router.

![Next.js](https://img.shields.io/badge/Next.js-16.2.1-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)

## Overview

This project includes:

- Multi-page college website (Admissions, Academics, Departments, Placements, Campus Life, Contact, and more)
- Modern landing page with reusable section components
- AI-assisted chatbot with voice input/output and topic-based fallbacks
- Responsive UI for desktop, tablet, and mobile

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.1 (App Router) |
| UI | React 19.2.4 |
| Styling | Tailwind CSS v4 |
| Icons | lucide-react |
| 3D Effects | @react-three/fiber, @react-three/drei, three |
| Linting | ESLint 9 + eslint-config-next |

## Prerequisites

- Node.js 18 or later
- npm 8 or later
- Git

Check versions:

```bash
node --version
npm --version
git --version
```

## Quick Start

1. Clone the repository

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
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4o-mini
# OPENAI_BASE_URL=https://api.openai.com/v1
```

Notes:

- `OPENAI_API_KEY` is optional.
- If not set, chatbot automatically uses built-in fallback responses.

4. Start development server

```bash
npm run dev
```

5. Open in browser

- http://localhost:3000

## Available Scripts

- `npm run dev` starts local development server
- `npm run build` builds production artifacts
- `npm run start` runs production server
- `npm run lint` runs ESLint checks

## Chat API

Endpoint:

- `POST /api/chat`

Request body:

```json
{
  "message": "string",
  "history": [
    { "text": "string", "sender": "user|bot" }
  ]
}
```

Response body:

```json
{
  "reply": "string",
  "link": "string|null",
  "linkText": "string|null",
  "source": "ai|fallback"
}
```

## Project Structure

```text
WEBVERSS/
├── app/
│   ├── api/chat/route.js
│   ├── layout.js
│   ├── page.js
│   ├── about/
│   ├── academics/
│   ├── admissions/
│   ├── alumni/
│   ├── campus-life/
│   ├── contact/
│   ├── departments/
│   ├── placements/
│   ├── programs/
│   ├── research/
│   └── students/
├── components/
├── public/
├── README.md
├── SETUP.md
└── package.json
```

## Deployment

Recommended deployment: Vercel.

Manual production run:

```bash
npm run build
npm run start
```

## Documentation

- Setup manual: SETUP.md
- Contribution guide: CONTRIBUTING.md

## License

MIT License. See LICENSE.

