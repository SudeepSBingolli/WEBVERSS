# Setup Manual - SJBIT Website (WEBVERSS)

This guide helps you set up the project quickly in a clean and professional way.

Last updated: March 2026

## 1. System Requirements

- Node.js 18 or later (LTS recommended)
- npm 8 or later
- Git 2 or later
- Visual Studio Code (recommended)

Verify installation:

```bash
node --version
npm --version
git --version
```

## 2. Clone and Install

```bash
git clone https://github.com/SudeepSBingolli/WEBVERSS.git
cd WEBVERSS
npm install
```

## 3. Environment Configuration

Create `.env.local` in project root:

```bash
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4o-mini
# OPENAI_BASE_URL=https://api.openai.com/v1
```

Notes:

- Chatbot works even without `OPENAI_API_KEY` using fallback responses.
- Keep `.env.local` private and do not commit secrets.

## 4. Run the Project

Development server:

```bash
npm run dev
```

Open:

- http://localhost:3000

Production build:

```bash
npm run build
npm run start
```

Linting:

```bash
npm run lint
```

## 5. Recommended VS Code Extensions

- ESLint
- Tailwind CSS IntelliSense
- Prettier

## 6. Troubleshooting

### Port 3000 already in use

Windows:

```powershell
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

Use different port:

```bash
npm run dev -- -p 3001
```

### Dependency issues

Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm cache clean --force
npm install
```

macOS/Linux:

```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Build failure after package updates

```bash
npm run lint
npm run build
```

Fix reported file errors before running `npm run dev` again.

## 7. Project Commands Reference

- `npm run dev` - Start local development
- `npm run build` - Build for production
- `npm run start` - Run production server
- `npm run lint` - Run ESLint checks

## 8. Git Workflow (Suggested)

```bash
git checkout -b feature/your-feature
git add .
git commit -m "feat: your change"
git push origin feature/your-feature
```

Then create a pull request.
