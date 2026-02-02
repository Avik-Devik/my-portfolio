# 🚀 Avik Das - Portfolio Website

A modern, interactive portfolio website built with **Next.js 16**, **React 19**, and **Tailwind CSS**. This portfolio showcases my journey as a frontend developer with smooth animations, dark mode support, and a fully responsive design.

![Next.js](https://img.shields.io/badge/Next.js-16.1.5-black?style=flat-square&logo=nextjs)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- **🎨 Modern UI/UX Design** - Clean, professional interface with smooth interactions
- **🌙 Dark Mode Support** - Toggle between light and dark themes with localStorage persistence
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **✨ Smooth Animations** - Framer Motion animations for engaging user experience
- **⌨️ Custom Cursor** - Interactive cursor effect that responds to mouse movements
- **🎯 Smooth Scrolling** - Intersection Observer for section tracking and smooth navigation
- **📄 Resume Download** - Easy access to download my resume
- **🔗 Social Links** - Connected to LinkedIn, GitHub, Instagram, and Facebook

## 📋 Sections

- **Hero** - Eye-catching introduction with animated text effects
- **About** - Personal background and professional summary with resume viewer
- **MyRoad** - Timeline of education and professional experience
- **Skills** - Comprehensive showcase of technical skills and tools
- **Projects** - Portfolio of 7+ completed projects with live demos and source code
- **Contact** - Get in touch form and social media links

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12
- **Icons**: RemixIcon React
- **Storage**: LocalStorage for theme persistence

### Development Tools
- **Linting**: ESLint 9
- **CSS Processing**: PostCSS 4
- **Font**: Google Fonts (Outfit)
- **React Compiler**: Babel Plugin React Compiler

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Avik-Devik/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Available Scripts

- `npm run dev` - Start the development server with hot-reloading
- `npm run build` - Build the project for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Projects Showcase

This portfolio features 7 projects demonstrating various frontend technologies:

1. **OverWatch Store** - E-commerce platform with React, Tailwind CSS, and responsive design
2. **Cinemate** - Movie discovery app with API integration and modern UI
3. **SPF Checker App** - DNS lookup utility for email authentication validation
4. **Task Mate** - Task management application with state management
5. **News Grid Website** - Responsive grid layout using pure HTML and CSS
6. **Simple Hotel Website** - Responsive hotel landing page with Flexbox
7. **Hotel Menu Bootstrap** - Restaurant menu with Bootstrap framework

Each project includes:
- 🔗 Live demo link
- 💻 GitHub repository
- 🏷️ Technology stack used
- 📝 Detailed project description

## 📝 Project Structure

```
my-portfolio/
├── public/
│   ├── projects/          # Project screenshot images
│   └── skills/            # Skill icons
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles
│   │   ├── icon.jsx       # Favicon component
│   │   ├── layout.js      # Root layout with theme setup
│   │   └── page.js        # Main page with all sections
│   ├── assets/
│   │   └── index.js       # Data (projects, skills, experience, etc.)
│   └── components/
│       ├── Hero.jsx              # Hero section with animations
│       ├── About.jsx             # About section with resume
│       ├── Experience.jsx        # Timeline of education & work
│       ├── Skills.jsx            # Skills showcase
│       ├── Projects.jsx          # Projects portfolio
│       ├── Contact.jsx           # Contact section
│       ├── Navbar.jsx            # Navigation bar
│       ├── Footer.jsx            # Footer component
│       └── sub/                  # Sub-components
│           ├── Cursor.jsx        # Custom cursor effect
│           ├── Heading.jsx       # Section heading
│           ├── Load.jsx          # Loading animation
│           ├── Project.jsx       # Individual project card
│           ├── ScrambleText.jsx  # Text scramble effect
│           ├── ScrollText.jsx    # Scroll-based text animation
│           ├── Toggle.jsx        # Dark mode toggle
│           ├── Typewriter.jsx    # Typewriter animation
│           └── TypewriterText.jsx # Typewriter text effect
├── next.config.mjs         # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.mjs       # PostCSS configuration
├── eslint.config.mjs        # ESLint configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel automatically builds and deploys

### Deploy on Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder using Netlify CLI or upload directly through the dashboard

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

**Made with ❤️ by Avik Das | © 2024 All Rights Reserved**
