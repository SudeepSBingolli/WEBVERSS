# SJB Institute of Technology - Official Website

A modern, responsive, and professionally designed website for **SJB Institute of Technology**, Bengaluru. Built with cutting-edge web technologies to showcase academic programs, institutional excellence, and student achievements.

![Next.js](https://img.shields.io/badge/Next.js-13.0+-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-06B6D4?style=flat-square&logo=tailwindcss)
![Node.js](https://img.shields.io/badge/Node.js-18.0+-339933?style=flat-square&logo=node.js)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## ✨ Features

- **🎨 Modern UI/UX** - Clean, professional design with smooth animations and transitions
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **⚡ High Performance** - Built with Next.js for fast page loads and SEO optimization
- **🎯 Component-Based Architecture** - Reusable, maintainable React components
- **🌊 Advanced Animations** - Engaging animations and wave dividers
- **🔍 SEO Optimized** - Meta tags, structured data, and fast loading times
- **🌙 Clean Code** - Well-organized, documented, and maintainable codebase
- **📄 Multiple Pages** - Home, About, Programs, and custom 404 pages
- **🎯 Navbar with Active States** - Dynamic navigation highlighting based on current route
- **🎪 Beautiful Footer** - Comprehensive footer with social links and information
- **⚙️ Environment Ready** - Pre-configured for development and production

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 13.0+ | React framework for production |
| **React** | 18.0+ | UI library |
| **Tailwind CSS** | 3.0+ | Utility-first CSS framework |
| **JavaScript (ES6+)** | Latest | Programming language |
| **Node.js** | 18.0+ | Runtime environment |
| **npm** | 8.0+ | Package manager |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v8.0 or higher) - Comes with Node.js
- **Git** (v2.0 or higher) - [Download](https://git-scm.com/)
- **A code editor** - VS Code recommended - [Download](https://code.visualstudio.com/)

### Verify Installation

```bash
node --version   # Should output v18.0.0 or higher
npm --version    # Should output 8.0.0 or higher
git --version    # Should output git version 2.0.0 or higher
```

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/SudeepSBingolli/WEBVERSS.git
cd WEBVERSS
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Create Environment Variables (Optional)

Create a `.env.local` file in the root directory:

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Step 4: Verify Installation

```bash
npm run build
```

If the build completes without errors, the installation is successful! ✅

---

## 💻 Usage

### Development Server

Start the development server with hot-reload capability:

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) in your browser
- The page will automatically refresh when you make changes

### Production Build

Create an optimized production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

---

## 📁 Project Structure

```
WEBVERSS/
├── app/                          # Next.js App Router directory
│   ├── layout.js                 # Root layout component
│   ├── page.js                   # Home page
│   ├── globals.css               # Global styles
│   ├── not-found.js              # 404 page
│   ├── about/
│   │   └── page.js              # About page
│   └── programs/
│       └── page.js              # Programs page
├── components/                   # Reusable React components
│   ├── Navbar.js                # Navigation bar with dynamic highlighting
│   ├── Hero.js                  # Hero section with leadership info
│   ├── About.js                 # About section
│   ├── ProgramsSection.js       # Programs showcase
│   └── Footer.js                # Footer with links and info
├── public/                       # Static assets
│   └── logo.jpeg                # College logo
│   └── campus.jpeg              # Campus image
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
├── eslint.config.mjs            # ESLint config file
├── jsconfig.json                # JavaScript configuration
├── next.config.mjs              # Next.js configuration
├── package.json                 # Project dependencies
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── README.md                    # This file
└── SETUP.md                     # Detailed setup manual

```

---

## 🔧 Development

### Adding a New Page

1. Create a new folder in the `app` directory:
```bash
mkdir app/your-page
```

2. Create a `page.js` file inside:
```javascript
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Your Page | SJBIT',
  description: 'Your page description.',
};

export default function YourPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        {/* Your content here */}
      </div>
    </main>
  );
}
```

### Adding a New Component

1. Create a new file in the `components` directory:
```bash
# components/YourComponent.js
export default function YourComponent() {
  return (
    <div className="your-classes">
      {/* Component content */}
    </div>
  );
}
```

2. Import and use it in your pages:
```javascript
import YourComponent from '@/components/YourComponent';
```

### Code Style Guidelines

- **Use ES6+ syntax** - Arrow functions, destructuring, etc.
- **Component naming** - PascalCase for components, camelCase for hooks/utilities
- **Tailwind CSS** - Use utility classes instead of custom CSS when possible
- **Comments** - Add comments for complex logic
- **Props validation** - Document expected props in components

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to [Vercel](https://vercel.com/)
3. Vercel will automatically deploy on every push to `main` branch

### Manual Deployment

```bash
# Create production build
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000`

---

## 📝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/WEBVERSS.git
   cd WEBVERSS
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make your changes**
   - Keep commits small and descriptive
   - Follow the code style guidelines

4. **Test your changes**
   ```bash
   npm run dev
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: Add your feature description"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature
   ```

7. **Submit a Pull Request**
   - Provide a clear description of your changes
   - Link any related issues

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**MIT License Summary**: You are free to use, modify, and distribute this project with proper attribution.

---

## 🤝 Support

### Getting Help

- 📚 **Documentation** - Check [SETUP.md](SETUP.md) for detailed setup instructions
- 🐛 **Issues** - Report bugs on [GitHub Issues](https://github.com/SudeepSBingolli/WEBVERSS/issues)
- 💬 **Discussions** - Ask questions in [GitHub Discussions](https://github.com/SudeepSBingolli/WEBVERSS/discussions)

### Contact

- **Email** - info@sjbit.edu.in
- **Website** - [SJBIT Official](https://sjbit.edu.in)
- **Location** - Bengaluru, Karnataka, India

---

## 📊 Project Stats

- **Version** - 1.0.0
- **Last Updated** - March 2026
- **Maintainer** - Sudeep S Bingolli
- **Repository** - [GitHub](https://github.com/SudeepSBingolli/WEBVERSS)

---

## 🎯 Future Enhancements

- [ ] Admin panel for content management
- [ ] Student portal integration
- [ ] Online admission system
- [ ] Alumni network section
- [ ] Placement tracking system
- [ ] Event management system
- [ ] Research publications database
- [ ] Multi-language support

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **React Community** - For continuous support and innovation
- **SJBIT Community** - For the vision and support

---

**⭐ If you find this project helpful, please consider giving it a star on GitHub!**

---

<div align="center">

Made with ❤️ by **Sudeep S Bingolli**

© 2026 SJB Institute of Technology. All rights reserved.

</div>
