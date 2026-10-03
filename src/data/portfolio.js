export const PROJECTS_DETAILED = [
  {
    id: 1,
    title: 'Modern Portfolio Website',
    type: 'Personal Brand',
    description:
      'A fully responsive portfolio website built with React and Vite. Features multi-page routing, smooth animations, and a contact form.',
    fullDescription:
      'A complete personal portfolio redesign showcasing my work as a frontend developer. Includes a landing page with featured projects, a dedicated projects page, case studies, blog section, resume, and a fully functional contact page. Built with React 18, React Router, and modern CSS.',
    stack: ['React', 'React Router', 'CSS', 'Vite'],
    image: '',
    liveUrl: '',
    githubUrl: 'https://github.com/otienovictor717-svg/odero-victor-portfolio',
  },
  {
    id: 2,
    title: 'Dynamic Task Management Dashboard',
    type: 'Web Application',
    description:
      'A productivity tool designed for teams to organize work, track progress, and improve accountability with real-time updates.',
    fullDescription:
      'A comprehensive task management platform with features including real-time task updates, team collaboration tools, advanced filtering, and progress tracking. Designed to improve team productivity and project visibility.',
    stack: ['React', 'Node.js', 'MongoDB', 'REST API'],
    image: '',
    liveUrl: '',
    githubUrl: '',
  },
  {
    id: 3,
    title: 'E-commerce Shopping Platform',
    type: 'Full-Stack Project',
    description:
      'A polished online storefront focused on user experience, product discovery, and smooth checkout process.',
    fullDescription:
      'A full-featured e-commerce platform with product browsing, advanced filtering, shopping cart management, secure checkout, and payment integration. Built with modern best practices for performance, accessibility, and user experience.',
    stack: ['JavaScript', 'CSS', 'Stripe API', 'Node.js'],
    image: '',
    liveUrl: '',
    githubUrl: '',
  },
  {
    id: 4,
    title: 'Analytics Dashboard with Data Visualization',
    type: 'Data Visualization',
    description:
      'An interactive dashboard for tracking user behavior and business metrics in real-time with beautiful charts.',
    fullDescription:
      'A sophisticated analytics dashboard featuring interactive charts, real-time data updates, customizable widgets, and exportable reports. Uses Chart.js for data visualization and a REST API for real-time data fetching.',
    stack: ['React', 'Chart.js', 'REST API', 'CSS'],
    image: '',
    liveUrl: '',
    githubUrl: '',
  },
];

export const CASE_STUDIES = [
  {
    id: 1,
    title: 'Improving UX: From Cluttered to Clean Dashboard',
    type: 'UX/UI Case Study',
    excerpt:
      'How thoughtful UX design increased user engagement by 40% and reduced task creation time by half.',
    role: 'Lead Designer & Frontend Developer',
    timeline: '3 months',
    tools: 'Figma, React, User Testing, CSS',
    challenge:
      'The original dashboard was overwhelming with too many features on one screen. Users reported confusion, low task completion rates, and it took an average of 5 steps to create a single task. Retention rates were dropping month-over-month.',
    solution:
      'I conducted user interviews with 20+ power users to understand their pain points. Created wireframes and prototypes, then built a streamlined interface using progressive disclosure. Implemented smart defaults, quick actions, and a cleaner visual hierarchy. The new design featured a single-page workflow with contextual actions.',
    results:
      'After launch, user engagement increased by 40%, average task creation time dropped from 4 minutes to 2 minutes, customer satisfaction scores improved by 35%, and churn rate decreased by 15%.',
    link: '/case-studies/dashboard',
  },
  {
    id: 2,
    title: 'Building for Scale: High-Performance E-Commerce',
    type: 'Technical Case Study',
    excerpt:
      'Achieving 98 Lighthouse score while handling 10,000+ products and managing peak traffic surges.',
    role: 'Full Stack Developer',
    timeline: '6 months',
    tools: 'React, Node.js, PostgreSQL, Webpack, CDN',
    challenge:
      'The e-commerce platform needed to handle a large product catalog (10,000+ items), real-time inventory updates, and provide exceptional performance across all devices. During peak sales, the site was slow and had high bounce rates.',
    solution:
      'Implemented code splitting and lazy loading for React components, image optimization with WebP format, database query optimization with proper indexing, and integrated a CDN for static assets. Built an efficient backend API with caching strategies and database connection pooling.',
    results:
      'Achieved 98 Lighthouse score, page load time reduced from 4.5s to under 1s, improved Core Web Vitals scores, successfully handled 10x traffic during Black Friday sales without performance degradation, and conversion rate increased by 22%.',
    link: '/case-studies/ecommerce-performance',
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Building Accessible React Components: A Complete Guide',
    category: 'React',
    excerpt:
      'A deep dive into WCAG guidelines and practical strategies to build React components that work for everyone, including users with disabilities.',
    image: '',
    date: 'December 15, 2024',
    readTime: 8,
    url: '/blog/accessible-react',
  },
  {
    id: 2,
    title: 'CSS Grid vs Flexbox: When to Use Each and Why',
    category: 'CSS',
    excerpt:
      'Understanding the differences between CSS Grid and Flexbox to write better, more maintainable layouts and improve your CSS skills.',
    image: '',
    date: 'December 10, 2024',
    readTime: 6,
    url: '/blog/grid-vs-flexbox',
  },
  {
    id: 3,
    title: 'Web Performance Optimization: A Practical Guide for 2024',
    category: 'Performance',
    excerpt:
      'Practical strategies to measure and improve your website performance, including Core Web Vitals optimization and best practices.',
    image: '',
    date: 'December 5, 2024',
    readTime: 10,
    url: '/blog/web-performance',
  },
];
