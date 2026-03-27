# Contributing to SJBIT Website

Thank you for your interest in contributing to the SJB Institute of Technology website! This document provides guidelines and instructions for contributing.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Reporting Issues](#reporting-issues)
- [Questions](#questions)

---

## 🤝 Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please be respectful and professional in all interactions. Any form of harassment, discrimination, or unethical behavior will not be tolerated.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0 or higher)
- npm (v8.0 or higher)
- Git (v2.0 or higher)
- VS Code (or any code editor)

### Setup Development Environment

1. **Fork the repository**
   ```bash
   Visit: https://github.com/SudeepSBingolli/WEBVERSS
   Click: Fork button
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/WEBVERSS.git
   cd WEBVERSS
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/SudeepSBingolli/WEBVERSS.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

---

## 👨‍💻 Development Process

### 1. Create an Issue (Optional but Recommended)

For significant changes, create an issue first:

1. Go to [Issues](https://github.com/SudeepSBingolli/WEBVERSS/issues)
2. Click "New Issue"
3. Describe the problem or feature
4. Wait for feedback before starting work

### 2. Create a Feature Branch

```bash
# Update to latest main
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/your-feature-name
```

**Branch naming conventions:**
- `feature/add-login` - New feature
- `fix/navbar-alignment` - Bug fix
- `docs/update-readme` - Documentation
- `refactor/component-structure` - Code refactoring
- `test/add-unit-tests` - Tests

### 3. Make Changes

- Keep changes focused and minimal
- Write clean, readable code
- Add comments for complex logic
- Test your changes thoroughly

### 4. Run Tests and Lint

```bash
# Check for linting errors
npm run lint

# Fix linting issues automatically
npm run lint -- --fix

# Build to ensure no errors
npm run build
```

### 5. Commit Changes

See [Commit Guidelines](#commit-guidelines) below.

### 6. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 7. Create Pull Request

See [Pull Request Process](#pull-request-process) below.

---

## 📝 Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

Must be one of:
- **feat** - A new feature
- **fix** - A bug fix
- **docs** - Documentation only changes
- **style** - Changes that don't affect code meaning (whitespace, formatting)
- **refactor** - Code refactoring without feature or bug fix
- **perf** - Performance improvements
- **test** - Adding or updating tests
- **chore** - Build process, dependencies, tools

### Subject

- Use imperative mood: "add feature" not "adds feature"
- Don't capitalize first letter
- No period at the end
- Limit to 50 characters

### Examples

Good commits:
```
feat(navbar): add active link highlighting
fix(footer): correct social media icons alignment
docs(readme): update installation instructions
refactor(components): simplify Hero component
```

Bad commits:
```
fixed bug
Updated stuff
Changes to multiple files
```

### Body

- Explain **what** and **why**, not **how**
- Wrap at 72 characters
- Separate from subject with blank line

### Footer

Reference issues:
```
Closes #123
Fixes #456
Related to #789
```

---

## 🔄 Pull Request Process

### 1. Before Creating PR

- [ ] Branch is up to date with main
  ```bash
  git fetch upstream
  git rebase upstream/main
  ```
- [ ] All tests pass (`npm run lint && npm run build`)
- [ ] No console errors or warnings
- [ ] Changes are tested locally
- [ ] Commits follow guidelines

### 2. Create Pull Request

1. Go to the original repository
2. Click "Pull requests" tab
3. Click "New Pull Request"
4. Select your fork and branch
5. Fill in the PR template

### 3. PR Title Format

```
[TYPE] Brief description of changes
```

Examples:
```
[FEATURE] Add new Programs page
[FIX] Fix navbar responsive design
[DOCS] Update contribution guidelines
```

### 4. PR Description Template

```markdown
## Description
Briefly describe the changes made.

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Refactoring

## Related Issues
Closes #123

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing Done
How was this tested?

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] New tests added (if applicable)
- [ ] Documentation updated
- [ ] No breaking changes
```

### 5. Review Process

- Maintainers will review your PR
- Respond to feedback and make changes
- Keep conversation professional and respectful
- Updates trigger re-review

### 6. Merge

Once approved:
- Squash commits into one (optional)
- Merge to main branch
- Delete feature branch

---

## 💻 Coding Standards

### JavaScript/React

- **Use ES6+ syntax**
  ```javascript
  // Good
  const [state, setState] = useState(null);
  const handleClick = () => { /* ... */ };
  
  // Avoid
  var state;
  function handleClick() { /* ... */ }
  ```

- **Component naming**
  ```javascript
  // Good (PascalCase)
  export default function MyComponent() { }
  
  // Avoid
  export default function myComponent() { }
  ```

- **Props destructuring**
  ```javascript
  // Good
  function Card({ title, description }) {
    return <div>{title}: {description}</div>;
  }
  
  // Avoid
  function Card(props) {
    return <div>{props.title}: {props.description}</div>;
  }
  ```

### Tailwind CSS

- Use utility classes instead of custom CSS
- Follow mobile-first responsive design
- Use semantic class names

```javascript
// Good
<div className="p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-md">

// Avoid
<div style={{padding: '24px', backgroundColor: 'white'}}>
```

### File Organization

```
components/
├── MyComponent.js         # Component file
├── MyComponent.jsx        # Alternative (if needed)
└── index.js              # Optional barrel export

pages/
├── page.js               # Main page
├── layout.js             # Page layout
└── [dynamic]/page.js     # Dynamic routes
```

### Comments and Documentation

```javascript
// Good - explain WHY
// Using useEffect to sync navbar scroll state
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Avoid - stating obvious
// Set open to false
setOpen(false);
```

### Imports Organization

```javascript
// 1. External imports
import React, { useState } from 'react';
import Link from 'next/link';

// 2. Internal imports
import MyComponent from '@/components/MyComponent';
import { utilityFunction } from '@/utils/helpers';

// 3. Styles
import './styles.css';
```

---

## 🧪 Testing Guidelines

### When to Test

- New features
- Bug fixes
- Complex logic
- Reusable components

### Example Test Structure

```javascript
// __tests__/MyComponent.test.js
import { render, screen } from '@testing-library/react';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected text')).toBeInTheDocument();
  });
});
```

---

## 🐛 Reporting Issues

### Issue Title Format

```
[BUG] Brief description of the issue
[FEATURE] New feature request
[DOCS] Documentation improvement
```

### Issue Description

Include:
- Clear description of the issue
- Steps to reproduce (for bugs)
- Expected behavior
- Actual behavior
- Screenshots/logs if applicable
- Environment details (OS, browser, Node version)

### Example Bug Report

```markdown
## Description
Navbar isn't responsive on mobile devices

## Steps to Reproduce
1. Open website on mobile (iPhone 12)
2. Resize browser to 375px width
3. Click hamburger menu

## Expected Behavior
Menu should open and overlay the page

## Actual Behavior
Menu opens but navigation links are not visible

## Environment
- OS: iOS 15
- Browser: Safari
- Device: iPhone 12

## Screenshots
[Add screenshot]
```

---

## ❓ Questions?

- **Documentation** - Check [README.md](README.md) and [SETUP.md](SETUP.md)
- **GitHub Issues** - Search existing issues at [Issues](https://github.com/SudeepSBingolli/WEBVERSS/issues)
- **GitHub Discussions** - Ask in [Discussions](https://github.com/SudeepSBingolli/WEBVERSS/discussions)
- **Email** - info@sjbit.edu.in

---

## 🎯 Development Tips

### Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm start               # Start production server
npm run lint            # Check for linting errors
npm run lint -- --fix   # Fix linting errors
```

### Debugging

- Use `console.log()` for quick debugging
- Use React DevTools browser extension
- Use VS Code debugger (set breakpoints)
- Check browser console (F12)

### Performance Tips

- Use lazy loading for images
- Code split components
- Minimize re-renders
- Use useMemo/useCallback wisely

---

## 📊 Contribution Levels

### Level 1: Bug Fixes & Docs
- Fix typos and small bugs
- Update documentation
- Improve comments
- **No prior discussion needed**

### Level 2: Small Features
- Add small features
- Refactor code
- Improve styling
- **Create issue or discussion first**

### Level 3: Major Features
- Large features
- Breaking changes
- Architecture changes
- **Must create issue and get approval**

---

## 🎉 Thank You!

Your contributions help make this project better. We appreciate your time and effort!

---

<div align="center">

**Happy Contributing! 💪**

For more information, visit [GitHub](https://github.com/SudeepSBingolli/WEBVERSS)

</div>
