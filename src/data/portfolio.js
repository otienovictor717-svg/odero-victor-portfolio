export const PROJECTS_DETAILED = [
  {
    id: 1,
    title: 'Portfolio Revamp',
    type: 'Personal Brand',
    description:
      'Rebuilt a modern portfolio experience with a conversion-focused layout and premium visual storytelling.',
    fullDescription:
      'A complete redesign of my personal portfolio to better showcase my work and attract new clients. The new version features a modern design, improved performance, and better mobile responsiveness.',
    stack: ['React', 'CSS', 'Vite'],
    image: 'https://via.placeholder.com/400x300?text=Portfolio+Revamp',
    liveUrl: 'https://example.com/portfolio',
    githubUrl: 'https://github.com/otienovictor717-svg/odero-victor-portfolio',
  },
  {
    id: 2,
    title: 'TaskFlow Dashboard',
    type: 'Productivity App',
    description:
      'Designed a product dashboard to help teams organize work, track progress, and improve accountability.',
    fullDescription:
      'A comprehensive task management platform built with React and Node.js. Features real-time updates, team collaboration tools, and advanced filtering capabilities.',
    stack: ['React', 'Node.js', 'MongoDB', 'API'],
    image: 'https://via.placeholder.com/400x300?text=TaskFlow+Dashboard',
    liveUrl: 'https://example.com/taskflow',
    githubUrl: 'https://github.com/otienovictor717-svg/taskflow',
  },
  {
    id: 3,
    title: 'E-commerce Storefront',
    type: 'Retail Experience',
    description:
      'Created a polished storefront experience focused on usability, product discovery, and cleaner conversion paths.',
    fullDescription:
      'A full-featured e-commerce platform with product browsing, shopping cart, checkout, and payment integration. Built with modern best practices for performance and accessibility.',
    stack: ['JavaScript', 'CSS', 'UX Design', 'Stripe API'],
    image: 'https://via.placeholder.com/400x300?text=E-commerce+Storefront',
    liveUrl: 'https://example.com/storefront',
    githubUrl: 'https://github.com/otienovictor717-svg/ecommerce',
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    type: 'Data Visualization',
    description:
      'Built an interactive analytics dashboard for tracking user behavior and business metrics in real-time.',
    fullDescription:
      'A sophisticated dashboard with interactive charts, real-time data updates, and customizable widgets. Uses React and Chart.js for data visualization.',
    stack: ['React', 'Chart.js', 'REST API', 'CSS'],
    image: 'https://via.placeholder.com/400x300?text=Analytics+Dashboard',
    liveUrl: 'https://example.com/analytics',
    githubUrl: 'https://github.com/otienovictor717-svg/analytics-dashboard',
  },
];

export const CASE_STUDIES = [
  {
    id: 1,
    title: 'Redesigning the TaskFlow Dashboard',
    type: 'UX Case Study',
    excerpt:
      'How I improved user engagement by 40% through thoughtful UX design and iterative testing.',
    role: 'Lead Designer & Developer',
    timeline: '3 months',
    tools: 'Figma, React, User Testing',
    challenge:
      'The original TaskFlow dashboard was cluttered and difficult to navigate. Users complained about confusion, and task creation took too many steps.',
    solution:
      'I conducted user interviews, created wireframes, and implemented a streamlined interface with progressive disclosure. The new design featured a single-page workflow with smart filtering and quick actions.',
    results:
      'After launch, user engagement increased by 40%, average task creation time dropped by 50%, and customer satisfaction scores improved significantly.',
    link: '/case-studies/taskflow',
  },
  {
    id: 2,
    title: 'Building a Performant E-commerce Platform',
    type: 'Technical Case Study',
    excerpt:
      'Achieving 98 Lighthouse score while handling 10,000+ products and real-time inventory.',
    role: 'Full Stack Developer',
    timeline: '6 months',
    tools: 'React, Node.js, PostgreSQL, Webpack',
    challenge:
      'The e-commerce platform needed to handle a large product catalog, real-time inventory updates, and provide a fast, smooth user experience across all devices.',
    solution:
      'Implemented code splitting, lazy loading, image optimization, and a CDN for static assets. Built an efficient API with caching strategies and database indexing.',
    results:
      'Achieved 98 Lighthouse score, page load time reduced to under 1 second, and successfully handled peak traffic during sales events.',
    link: '/case-studies/ecommerce',
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Building Accessible React Components',
    category: 'React',
    excerpt:
      'A deep dive into WCAG guidelines and how to build React components that work for everyone.',
    image: 'https://via.placeholder.com/300x200?text=Accessible+React',
    date: 'December 15, 2024',
    readTime: 8,
    url: '/blog/accessible-react',
  },
  {
    id: 2,
    title: 'CSS Grid vs Flexbox: When to Use Each',
    category: 'CSS',
    excerpt:
      'Understanding the differences between CSS Grid and Flexbox to write better layouts faster.',
    image: 'https://via.placeholder.com/300x200?text=CSS+Grid+vs+Flexbox',
    date: 'December 10, 2024',
    readTime: 6,
    url: '/blog/grid-vs-flexbox',
  },
  {
    id: 3,
    title: 'Optimizing Web Performance: A Practical Guide',
    category: 'Performance',
    excerpt:
      'Practical strategies to improve your website performance and provide better user experiences.',
    image: 'https://via.placeholder.com/300x200?text=Web+Performance',
    date: 'December 5, 2024',
    readTime: 10,
    url: '/blog/web-performance',
  },
];
