# Setup Manual - SJBIT Website Development Environment

A comprehensive guide to set up and configure the SJB Institute of Technology website development environment.

**Last Updated:** March 2026  
**Version:** 1.0.0

---

## 📋 Quick Navigation

1. [System Requirements](#system-requirements)
2. [Initial Setup](#initial-setup)
3. [Development Environment](#development-environment)
4. [Project Configuration](#project-configuration)
5. [Running the Application](#running-the-application)
6. [Troubleshooting](#troubleshooting)
7. [Advanced Configuration](#advanced-configuration)
8. [Git Workflow](#git-workflow)

---

## 🖥️ System Requirements

### Minimum Requirements

| Requirement | Minimum | Recommended |
|------------|---------|-------------|
| OS | Windows 10, macOS 10.14, Ubuntu 18.04 | Windows 11, macOS 12+, Ubuntu 22.04 |
| RAM | 4 GB | 8 GB or more |
| Disk Space | 2 GB | 5 GB or more |
| Node.js | 16.x | 18.x LTS or higher |
| npm | 7.x | 8.x or higher |

### Software Prerequisites

- **Node.js** - JavaScript runtime (includes npm)
- **npm** - Node Package Manager (comes with Node.js)
- **Git** - Version control system
- **Code Editor** - Visual Studio Code (recommended)

---

## 🚀 Initial Setup

### Step 1: Install Node.js and npm

#### Windows

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the **LTS (Long Term Support)** version
3. Run the installer
4. Follow the installation wizard (use default settings)
5. Restart your computer

#### macOS

Using Homebrew (recommended):
```bash
brew install node
```

Or visit [nodejs.org](https://nodejs.org/) and download the macOS installer.

#### Ubuntu/Linux

```bash
# Using NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 2: Verify Installation

Open terminal/command prompt and verify versions:

```bash
node --version
npm --version
git --version
```

Expected output:
```
v18.x.x or higher
8.x.x or higher
git version 2.x.x or higher
```

### Step 3: Install Git

#### Windows

1. Visit [git-scm.com](https://git-scm.com/)
2. Download and run the installer
3. Use default settings (important: select Git Bash as terminal)

#### macOS

```bash
brew install git
```

#### Ubuntu/Linux

```bash
sudo apt-get install git
```

### Step 4: Configure Git

Set up your Git identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Verify configuration:
```bash
git config --global --list
```

### Step 5: Install VS Code

1. Visit [code.visualstudio.com](https://code.visualstudio.com/)
2. Download and install for your OS
3. Essential extensions:
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - Prettier - Code formatter
   - ESLint

---

## 💻 Development Environment

### Step 1: Clone the Repository

```bash
# Navigate to your projects folder
cd ~/Desktop  # or your preferred location

# Clone the repository
git clone https://github.com/SudeepSBingolli/WEBVERSS.git

# Navigate into the project
cd WEBVERSS
```

### Step 2: Install Project Dependencies

```bash
# Install all npm packages
npm install
```

This will:
- Download all required packages from npm registry
- Create a `node_modules` folder
- Generate `package-lock.json` file

**Installation time:** Usually 2-5 minutes depending on internet speed

### Step 3: Verify Installation

```bash
# Check if all dependencies are installed correctly
npm list

# Build the project to verify everything works
npm run build
```

---

## ⚙️ Project Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# .env.local

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000

# Optional: Add more variables as needed
# NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

### ESLint Configuration

The project includes ESLint for code quality. Configuration is in `eslint.config.mjs`.

Run ESLint:
```bash
npm run lint
```

### Tailwind CSS

Already configured in `tailwind.config.js`. No additional setup needed.

---

## 🎯 Running the Application

### Development Server

Start the development server with hot-reload:

```bash
npm run dev
```

Output should show:
```
> next dev

  ▲ Next.js 13.x.x
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Ready in 2.5s
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Create an optimized production build:

```bash
npm run build
```

This generates:
- `.next` folder with optimized code
- Static asset files
- Dependency list

### Start Production Server

```bash
npm start
```

The application runs on `http://localhost:3000`

### Build and Preview

```bash
# Build for production
npm run build

# Preview the production build locally
npm start
```

---

## 🐛 Troubleshooting

### Issue 1: "npm: command not found"

**Solution:**
```bash
# Check if Node.js/npm is installed
node --version
npm --version

# If not installed, download from nodejs.org
# Restart your terminal/IDE after installation
```

### Issue 2: "Port 3000 already in use"

**Solution:**

#### Windows
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with the actual number)
taskkill /PID <PID> /F
```

#### macOS/Linux
```bash
# Find and kill process using port 3000
lsof -ti:3000 | xargs kill -9
```

Or use a different port:
```bash
npm run dev -- -p 3001
```

### Issue 3: Module not found / Dependencies installation fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

### Issue 4: Git authentication issues

**Solution:**

Use SSH keys:
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Add to GitHub account at https://github.com/settings/keys
```

Or use personal access token:
```bash
git remote set-url origin https://github.com/YOUR-NAME/WEBVERSS.git
```

### Issue 5: Build fails with errors

**Solution:**
```bash
# Check for linting errors
npm run lint

# Fix linting issues automatically
npm run lint -- --fix

# Rebuild
npm run build
```

---

## 🔧 Advanced Configuration

### Adding Environment Variables

Update `.env.local`:

```bash
# Database
DATABASE_URL=postgres://user:password@localhost/dbname

# API Keys
NEXT_PUBLIC_API_KEY=your_api_key_here

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

### Custom Next.js Configuration

Edit `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add your custom configuration here
};

export default nextConfig;
```

### Custom Tailwind Configuration

Edit `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors
        sjbit: '#E36A0A',
      },
    },
  },
  plugins: [],
};
```

### Custom PostCSS Configuration

Already configured in `postcss.config.mjs`:

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## 📚 Git Workflow

### Cloning for the First Time

```bash
git clone https://github.com/SudeepSBingolli/WEBVERSS.git
cd WEBVERSS
```

### Creating a Feature Branch

```bash
# Update main branch
git checkout main
git pull origin main

# Create new feature branch
git checkout -b feature/feature-name
```

### Making Changes

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: Add your feature description"

# Push to remote
git push origin feature/feature-name
```

### Pull Request

1. Go to [GitHub](https://github.com/SudeepSBingolli/WEBVERSS)
2. Click "New Pull Request"
3. Select your branch
4. Add description
5. Submit for review

### Syncing with Main

```bash
# Update main branch
git fetch origin
git rebase origin/main

# Handle conflicts if any
# Then force push to your branch
git push origin feature/feature-name -f
```

### Merging to Main

After PR approval:

```bash
git checkout main
git pull origin main
git merge feature/feature-name
git push origin main
```

---

## 📱 Responsive Design Testing

### Browser DevTools

1. Press `F12` to open DevTools
2. Press `Ctrl+Shift+M` for responsive view
3. Test different screen sizes

### Recommended Test Sizes

- **Desktop:** 1920x1080, 1366x768
- **Tablet:** 768x1024 (iPad)
- **Mobile:** 375x667 (iPhone SE), 414x896 (iPhone 12)

---

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] All tests passing
- [ ] No console errors
- [ ] Responsive design verified
- [ ] Environment variables configured
- [ ] SEO meta tags updated
- [ ] Performance optimized
- [ ] Security audit completed
- [ ] Documentation updated
- [ ] Changes committed and pushed
- [ ] Code review completed

---

## 📞 Support Resources

### Official Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Node.js Docs](https://nodejs.org/en/docs/)

### Community Help

- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)
- [GitHub Discussions](https://github.com/SudeepSBingolli/WEBVERSS/discussions)
- [Reddit - r/nextjs](https://reddit.com/r/nextjs)

### Project Support

- **Email:** info@sjbit.edu.in
- **GitHub Issues:** [Report a bug](https://github.com/SudeepSBingolli/WEBVERSS/issues)
- **Contact:** Sudeep S Bingolli

---

## 🎓 Learning Resources

### For Beginners

1. **Next.js** - [Official Tutorial](https://nextjs.org/learn)
2. **React** - [React Beta Docs](https://react.dev/learn)
3. **Tailwind CSS** - [Interactive Tutorial](https://tailwindcss.com/docs)
4. **JavaScript** - [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

### Intermediate

1. **Advanced Next.js** - Dynamic routing, API routes
2. **React Hooks** - useState, useEffect, custom hooks
3. **Tailwind Utilities** - Advanced styling techniques
4. **Git Advanced** - Rebasing, cherry-pick, stashing

### Advanced

1. **Performance Optimization** - Code splitting, lazy loading
2. **Security** - XSS prevention, CSRF protection
3. **Testing** - Jest, React Testing Library
4. **DevOps** - CI/CD, Docker, Kubernetes

---

## ✅ Verification Checklist

After completing the setup, verify:

- [ ] Node.js and npm installed correctly
- [ ] Git configured with your credentials
- [ ] Repository cloned successfully
- [ ] All dependencies installed (`npm install` completed)
- [ ] Development server runs (`npm run dev`)
- [ ] Can access [http://localhost:3000](http://localhost:3000)
- [ ] No console errors
- [ ] Pages load correctly (Home, About, Programs)
- [ ] Responsive design works (test on mobile)
- [ ] Git commands work (git status, git log, etc.)

---

## 📝 Notes

- Always keep your `main` branch stable
- Create feature branches for new features
- Test thoroughly before pushing
- Write descriptive commit messages
- Keep dependencies updated periodically
- Backup important data before major changes

---

<div align="center">

**Setup Complete! 🎉**

You're now ready to start developing. Happy coding!

For more help, refer to the [README.md](README.md) file.

</div>
