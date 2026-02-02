// Hero
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
import LinkedinLineIcon from 'remixicon-react/LinkedinLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'

/* eslint-disable react/jsx-key */
export const heroIcons = [
  { icon: <InstagramLineIcon />, url: 'https://www.instagram.com/avikkdas/' },
  { icon: <FacebookCircleLineIcon />, url: 'https://www.facebook.com/avik.das.226133' },
  { icon: <LinkedinLineIcon />, url: 'https://www.linkedin.com/in/avik-das-226133ok/' },
  { icon: <GithubLineIcon />, url: 'https://github.com/Avik-Devik' },
]

// About Me

import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />

export const aboutText =
  "I’m Avik Kumar Das, a passionate Frontend Developer based in Dhaka, Bangladesh, with a strong focus on building modern, responsive, and user-friendly web applications. I enjoy transforming ideas and designs into clean, functional interfaces using React.js, JavaScript (ES6+), and Tailwind CSS. I’ve built several real-world projects, including an e-commerce platform, a movie information app, and a task management system—each strengthening my skills in state management, responsive design, and scalable frontend architecture. 🚀 Currently seeking opportunities to grow as a frontend developer and collaborate on impactful projects."
// End of About Me

// Experience
export const experienceData = [
  {
    year: '2017 - 2019',
    title: 'Higher Secondary Certificate (HSC — Science)',
    education: 'St. Gregory’s High School & College, Dhaka',
  },
  {
    year: '2020 - 2024',
    title: 'B.Sc. in Computer Science and Engineering',
    education: 'Green University of Bangladesh',
  },
  {
    year: 'Oct 2023 - Jan 2024',
    title: 'Frontend Developer Intern',
    education: 'Battery Low Interactive Ltd.',
    experience: [
      'Built responsive and interactive web interfaces using React.js, JavaScript, and Tailwind CSS.',
      'Converted Figma designs into reusable UI components.',
      'Collaborated with designers and developers to implement user-centric features.',
    ],
  },
]

// Skills
export const skillsData = [
  {
    name: 'Figma',
    icon: '/skills/figma.png',
  },
  {
    name: 'Photoshop',
    icon: '/skills/photoshop.png',
  },
  {
    name: 'Blender',
    icon: '/skills/blender.png',
  },
  {
    name: 'VS Code',
    icon: '/skills/vscode.png',
  },
  {
    name: 'HTML',
    icon: '/skills/html.png',
  },
  {
    name: 'CSS',
    icon: '/skills/css.png',
  },
  {
    name: 'JavaScript',
    icon: '/skills/js.png',
  },
  {
    name: 'TailwindCSS',
    icon: '/skills/tailwind.png',
  },
  {
    name: 'Vite',
    icon: '/skills/vite.png',
  },
  {
    name: 'ReactJS',
    icon: '/skills/react.png',
  },
  {
    name: 'TypeScript',
    icon: '/skills/ts.png',
  },
  {
    name: 'AI',
    icon: '/skills/ai.png',
  },
  {
    name: 'Framer Motion',
    icon: '/skills/framer.png',
  },
  {
    name: 'ThreeJS',
    icon: '/skills/threejs.png',
  },
  {
    name: 'NextJS',
    icon: '/skills/nextjs.png',
  },
  {
    name: 'NodeJS',
    icon: '/skills/nodejs.png',
  },
  {
    name: 'MongoDB',
    icon: '/skills/mongodb.png',
  },
  {
    name: 'Github',
    icon: '/skills/github.png',
  },
]


// Projects
export const projectsData = [
  {
    name: 'OverWatch-Store',
    desc: 'OverWatch Store is a responsive e-commerce web application designed to demonstrate strong front-end development fundamentals and modern UI/UX practices. The project focuses on building a smooth, user-friendly shopping interface while maintaining clean code structure and performance optimization. The application features a dynamic product listing system with reusable components, ensuring scalability and maintainability. Special attention was given to responsive design, allowing the interface to adapt seamlessly across desktop, tablet, and mobile devices. The layout and interactions are designed to reflect real-world e-commerce standards, emphasizing usability and visual clarity.',
    url: '/projects/pro1.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'TailwindCSS'],
    gitUrl: 'https://github.com/Avik-Devik/OverWatch-Store',
    previewUrl: 'https://overwatchstore.netlify.app/',
  },
  {
    name: 'Cinemate',
    desc: 'Cinemate is a responsive movie discovery web application that showcases practical front-end development skills and modern UI/UX design principles. The project focuses on delivering an engaging browsing experience, allowing users to explore trending movies through a clean, dynamic interface. The application integrates with external movie data APIs to fetch and display real-time information, using efficient rendering and modular component design. Special attention was given to responsive layout and interaction design so that the interface scales smoothly across desktop, tablet, and mobile devices. The visual structure and navigation were crafted to reflect modern entertainment platform standards, emphasizing clarity and ease of use.',
    url: '/projects/pro2.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'TailwindCSS'],
    gitUrl: 'https://github.com/Avik-Devik/Cinemate',
    previewUrl: 'https://cinemate-ul.netlify.app/',
  },
  {
    name: 'SPF_Cheker_App',
    desc: 'SPF Checker App is a web utility that allows users to analyze and validate SPF (Sender Policy Framework) records for domain email authentication. Designed with clarity and practicality in mind, this application demonstrates my ability to build tools that solve real-world technical problems while delivering a clean and intuitive user experience.The application accepts domain input from users, performs DNS lookups to retrieve SPF information, and presents the results in a clear, structured format. The interface focuses on simplicity and responsiveness, enabling users to access SPF validation results quickly on both desktop and mobile screens. Emphasis was placed on error handling, dynamic feedback, and concise result presentation.',
    url: '/projects/pro3.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
    gitUrl: 'https://github.com/Avik-Devik/SPF_Cheker_App',
    previewUrl: 'https://spf-cheker.netlify.app/',
  },
  {
    name: 'Task-Mate',
    desc: 'Task Mate is a responsive task management web application designed to help users organize their daily activities with a clean and intuitive interface. This project demonstrates my ability to build practical productivity tools with a focus on dynamic data handling, user interaction, and responsive design.The application allows users to add, edit, complete, and remove tasks while providing instant visual feedback. Reusable UI components and state management patterns are used to maintain scalable and maintainable code. The layout adapts smoothly across a wide range of devices, ensuring a consistent user experience on desktops, tablets, and mobile screens.',
    url: '/projects/pro4.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'TailwindCSS'],
    gitUrl: 'https://github.com/Avik-Devik/Task-Mate',
    previewUrl: 'https://taskmate-ul.netlify.app/',
  },
  {
    name: 'News-Grid-Website',
    desc: 'News Grid Website is a responsive, layout-focused web page built using only HTML and CSS. The project demonstrates my understanding of modern layout techniques, visual hierarchy, and responsive styling without relying on JavaScript or external libraries. The design showcases a grid-based news layout that adapts smoothly across a range of screen sizes. Careful attention was given to typography, spacing, and content organization to ensure clarity and visual balance. The project highlights practical CSS skills such as grid and flexbox layout, media queries, and styling consistency.',
    url: '/projects/pro5.png',
    tech: ['HTML', 'CSS'],
    gitUrl: 'https://github.com/Avik-Devik/News-Grid-Website',
    previewUrl: 'https://news-grid-webbbbb.netlify.app/',
  },
  {
    name: 'Simple-Hotel-Website',
    desc: 'Hotel Website is a responsive, design-focused web page built using only HTML and CSS. The project demonstrates my ability to create visually appealing and user-friendly web layouts without the use of JavaScript or external frameworks, showcasing strong fundamentals in structure, styling, and responsive design.The site features a clean hotel landing page with clear navigation, well-organized sections, and consistent styling. Advanced CSS layout techniques such as Flexbox and media queries were used to ensure the content adapts smoothly across desktops, tablets, and mobile devices. Attention to typography, spacing, and visual balance enhances readability and overall user experience.',
    url: '/projects/pro6.png',
    tech: ['HTML', 'CSS'],
    gitUrl: 'https://github.com/Avik-Devik/Hotel-Website',
    previewUrl: 'https://hotel-bt-webbb.netlify.app/',
  },
  {
    name: 'Hotel-Menu-Bootstrap',
    desc: 'Restaurant Menu is a responsive web page built using HTML, CSS, and Bootstrap to showcase a structured and visually engaging menu layout for a restaurant. The project demonstrates my ability to leverage a popular CSS framework to develop user-friendly interfaces with consistent spacing, alignment, and responsive behavior.',
    url: '/projects/pro7.png',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    gitUrl: 'https://github.com/Avik-Devik/Hotel-Menu-Bootstrap',
    previewUrl: 'https://resturent-menu-assignment-2.netlify.app/',
  },
]

export const projectsButton = [
  'All',
  'Figma',
  'Bootstrap',
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJS',
  'TailwindCSS',
  'NextJS',
  'FramerMotion',
]

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'

export const copyRightIcon = <CopyrightLineIcon />

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import UserStarLineIcon from 'remixicon-react/UserStarLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'

export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: <Home5LineIcon />,
  },
  {
    id: 'about',
    name: 'About',
    icon: <UserLineIcon />,
  },
  {
    id: 'experience',
    name: 'MyRoad',
    icon: <HistoryLineIcon />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <BriefcaseLineIcon />,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <ProjectorLineIcon />,
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: <ContactsBook2LineIcon />,
  },
]

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />
