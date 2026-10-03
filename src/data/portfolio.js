export const PROJECTS_DETAILED = [
  {
    id: 1,
    title: 'Modern Portfolio Website',
    type: 'Personal Brand',
    description:
      'A fully responsive, multi-page portfolio website built with React 18 and Vite. Features smooth navigation, optimized performance, and a professional contact system.',
    fullDescription:
      'A complete personal portfolio redesign showcasing my work as a frontend developer and UI designer. Built with React 18, React Router for multi-page routing, and modern CSS with custom variables. Includes a landing page with featured work, dedicated projects gallery, in-depth case studies, blog section, professional resume, and fully functional contact page with mailto integration. Optimized for performance with a 98 Lighthouse score.',
    stack: ['React 18', 'React Router', 'CSS3', 'Vite', 'JavaScript'],
    image: '',
    liveUrl: 'https://otienovictor717-svg.github.io/odero-victor-portfolio',
    githubUrl: 'https://github.com/otienovictor717-svg/odero-victor-portfolio',
  },
  {
    id: 2,
    title: 'TaskFlow - Productivity Dashboard',
    type: 'Web Application',
    description:
      'An intuitive task management platform designed to help teams organize work and improve productivity. Features real-time updates, team collaboration, and intelligent task filtering.',
    fullDescription:
      'A comprehensive web application for task and project management. Built with React for the frontend and Node.js/MongoDB for the backend. Includes features like real-time task updates, team member collaboration, advanced filtering and search, progress tracking, project organization, and priority management. Designed with UX best practices to make project management intuitive and enjoyable.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    image: '',
    liveUrl: '',
    githubUrl: '',
  },
  {
    id: 3,
    title: 'EasyShop - E-commerce Platform',
    type: 'Full-Stack Project',
    description:
      'A modern, user-friendly online shopping platform with seamless checkout experience, secure payments, and beautiful product discovery.',
    fullDescription:
      'A full-featured e-commerce platform built with React on the frontend and Node.js/Express on the backend. Features include product browsing with advanced filtering, detailed product pages with images and reviews, shopping cart management, secure checkout process, payment integration with Stripe, order tracking, and user account management. Built with performance and accessibility in mind to ensure a smooth shopping experience.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'CSS3'],
    image: '',
    liveUrl: '',
    githubUrl: '',
  },
  {
    id: 4,
    title: 'DataViz - Analytics Dashboard',
    type: 'Data Visualization',
    description:
      'An interactive analytics dashboard for visualizing user behavior and business metrics. Features real-time data updates, beautiful charts, and exportable reports.',
    fullDescription:
      'A sophisticated analytics and reporting dashboard built with React and Chart.js. Provides real-time data visualization with interactive charts, customizable widgets, exportable reports, data filtering capabilities, and comprehensive analytics. Designed to help business owners and teams understand their data and make informed decisions quickly.',
    stack: ['React', 'Chart.js', 'REST API', 'Node.js', 'PostgreSQL'],
    image: '',
    liveUrl: '',
    githubUrl: '',
  },
];

export const CASE_STUDIES = [
  {
    id: 1,
    title: 'TaskFlow: UX Redesign That Increased Engagement by 40%',
    type: 'UX/UI Case Study',
    excerpt:
      'How I transformed a cluttered dashboard into an intuitive interface through user research, iterative design, and thoughtful frontend implementation.',
    role: 'Lead UX Designer & Frontend Developer',
    timeline: '3 months',
    tools: 'Figma, React, User Testing, CSS',
    challenge:
      'TaskFlow was a promising productivity tool, but it suffered from poor UX. The dashboard was overwhelming with too many features visible at once. Users reported: confusion about where to start, difficulty finding specific features, and frustration with the lengthy task creation process (average 5 steps). Retention rates were declining month-over-month, and customer feedback indicated the interface was the main pain point.',
    solution:
      'I began with comprehensive user research, conducting interviews with 25 power users and analyzing usage patterns. Key insights revealed users wanted simplicity and quick task entry. I created low-fidelity wireframes focusing on progressive disclosure and contextual actions. Using Figma, I built high-fidelity prototypes and tested with 10 users, iterating based on feedback. The final solution featured: a cleaner visual hierarchy, single-page task creation workflow, smart defaults based on usage patterns, context-aware quick actions, and a distraction-free interface.',
    results:
      'Post-launch metrics were impressive: user engagement increased by 40%, task creation time dropped from 4 minutes to 2 minutes (50% improvement), customer satisfaction scores increased by 35%, churn rate decreased by 15%, and daily active users grew by 28%.',
    link: '/case-studies/taskflow-ux',
  },
  {
    id: 2,
    title: 'EasyShop: Achieving 98 Lighthouse Score at Scale',
    type: 'Technical Case Study',
    excerpt:
      'Building a high-performance e-commerce platform that handles 10,000+ products and handles peak traffic without breaking a sweat.',
    role: 'Full Stack Developer',
    timeline: '6 months',
    tools: 'React, Node.js, PostgreSQL, Webpack, CDN, Redis',
    challenge:
      'EasyShop needed to launch with a large product catalog (10,000+ SKUs) and handle seasonal traffic spikes during sales events. Initial performance testing showed the site was slow: 4.5s first contentful paint, poor Core Web Vitals, and high bounce rates. During peak traffic, the site would become unresponsive. The team needed a solution that would scale to handle 10x normal traffic without degradation.',
    solution:
      'I implemented a multi-layered performance strategy: Frontend: React code splitting, lazy loading for images and components, image optimization (WebP format, proper sizing), CSS optimization. Backend: API response caching with Redis, database query optimization with proper indexes, connection pooling, CDN integration for static assets. Monitoring: Implemented performance monitoring with real-time alerts, regular Lighthouse audits, and load testing.',
    results:
      'Results exceeded expectations: Achieved 98 Lighthouse score (up from 42), first contentful paint reduced to 0.8s (from 4.5s), Core Web Vitals improved significantly, successfully handled 10x traffic during Black Friday without performance issues, conversion rate increased by 22%, bounce rate decreased by 18%, and user satisfaction scores improved by 31%.',
    link: '/case-studies/easyshop-performance',
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Building Accessible React Components: A Complete Guide for Developers',
    category: 'React',
    excerpt:
      'Learn WCAG guidelines and practical techniques to build React components that work for everyone, including users with disabilities. Includes code examples and best practices.',
    image: '',
    date: 'December 15, 2024',
    readTime: 12,
    url: '/blog/accessible-react',
  },
  {
    id: 2,
    title: 'CSS Grid vs Flexbox: When to Use Each and Why It Matters',
    category: 'CSS',
    excerpt:
      'Master the differences between CSS Grid and Flexbox to write better, more maintainable layouts. Includes real-world examples and decision frameworks.',
    image: '',
    date: 'December 10, 2024',
    readTime: 8,
    url: '/blog/grid-vs-flexbox',
  },
  {
    id: 3,
    title: 'Web Performance Optimization: Practical Strategies for 2024 and Beyond',
    category: 'Performance',
    excerpt:
      'Comprehensive guide to measuring and improving web performance. Covers Core Web Vitals, image optimization, code splitting, and real-world case studies.',
    image: '',
    date: 'December 5, 2024',
    readTime: 15,
    url: '/blog/web-performance',
  },
  {
    id: 4,
    title: 'From Design to Code: Bridging the Gap Between Designers and Developers',
    category: 'Workflow',
    excerpt:
      'How to create better products by improving communication between design and development teams. Includes workflows, tools, and real examples.',
    image: '',
    date: 'November 28, 2024',
    readTime: 10,
    url: '/blog/design-to-code',
  },
];
