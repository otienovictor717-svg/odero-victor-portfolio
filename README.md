# Victor Odero — Frontend Developer & UI Designer

A modern, clean portfolio website showcasing my work as a frontend developer and product designer. Built with **React 18**, **Vite**, and **CSS**, this portfolio is designed to be fast, responsive, and easy to customize.

## 🚀 Live Demo

[View the live portfolio](https://otienovictor717-svg.github.io/odero-victor-portfolio)

## ✨ Features

- 🎨 **Modern & Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- ⚡ **Lightning Fast** — Built with Vite for instant development and optimized production builds
- 🎯 **Multi-Page Architecture** — Home, Projects, Case Studies, Blog, Resume, and Contact pages
- 📱 **Mobile-First** — Optimized for all screen sizes with touch-friendly navigation
- ♿ **Accessible** — Semantic HTML and keyboard navigation support
- 🧩 **Component-Based Architecture** — Modular React components for easy maintenance
- 💾 **Organized Content** — Centralized data file for quick edits

## 🛠️ Tech Stack

- **Frontend:** React 18, React Router DOM, Vite, CSS3
- **Styling:** Custom CSS with CSS Variables
- **Build Tool:** Vite 5
- **Routing:** React Router v6
- **Package Manager:** npm

## 📦 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Header.jsx       # Navigation header with mobile menu
│   ├── Footer.jsx       # Footer with links and social profiles
│   ├── ContactForm.jsx  # Contact form with mailto integration
│   ├── Header.css       # Header styling
│   └── styles.css       # Component-specific styles
├── pages/               # Page components
│   ├── Home.jsx         # Landing page with hero and featured projects
│   ├── Projects.jsx     # Full project portfolio
│   ├── CaseStudies.jsx  # In-depth case study breakdowns
│   ├── Blog.jsx         # Blog/articles page
│   ├── Resume.jsx       # Resume/CV page with timeline
│   └── Contact.jsx      # Contact page with form
├── data/
│   └── portfolio.js      # All content data (projects, blog, case studies)
├── App.jsx              # Main app with React Router setup
├── main.jsx             # React entry point
└── index.css            # Global styles and theme variables

package.json             # Dependencies and scripts
vite.config.js           # Vite configuration
README.md                # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/otienovictor717-svg/odero-victor-portfolio.git
   cd odero-victor-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build Locally

```bash
npm run preview
```

## ✏️ Customizing Your Portfolio

### Update Your Information

Edit `src/data/portfolio.js` to update:

- **Projects** — Add your real projects with links
- **Case Studies** — Add in-depth project breakdowns
- **Blog Posts** — Add your articles and insights

### Update Contact Information

Edit `src/pages/Contact.jsx` and `src/components/Footer.jsx`:

```javascript
// Replace with your real email
<a href="mailto:your.email@example.com">your.email@example.com</a>

// Replace with your GitHub URL
<a href="https://github.com/your-username">GitHub</a>
```

### Customize Colors

Edit `src/index.css` to change the theme:

```css
:root {
  --primary-color: #0a66c2;      /* Main brand color */
  --secondary-color: #f3f6f8;    /* Light background */
  --text-dark: #1f2937;          /* Main text color */
  --text-light: #6b7280;         /* Secondary text color */
  --text-strong: #ffffff;        /* Header text (light) */
  --text-soft: #cbd5e1;          /* Header nav links */
  --border-color: #e5e7eb;       /* Border color */
}
```

### Update Personal Information

Edit `src/pages/Home.jsx`, `src/components/Header.jsx`, and `src/components/Footer.jsx`:

```javascript
// Update your name and title
<h1>I build clean, memorable digital experiences that help ideas stand out.</h1>
<p className="lead">
  I'm Victor Odero, a developer focused on turning product ideas into polished,
  responsive, and user-centered experiences.
</p>
```

## 📄 Adding Projects

In `src/data/portfolio.js`, add your projects to the `PROJECTS_DETAILED` array:

```javascript
export const PROJECTS_DETAILED = [
  {
    id: 1,
    title: 'Your Project Name',
    type: 'Project Category',
    description: 'Brief description of what the project does.',
    fullDescription: 'Longer description with more details.',
    stack: ['React', 'Node.js', 'CSS'],
    image: 'https://your-image-url.com/project.jpg',
    liveUrl: 'https://your-live-project.com',
    githubUrl: 'https://github.com/your-username/project-name',
  },
  // ... more projects
];
```

## 🎬 Adding Blog Posts

In `src/data/portfolio.js`, add to the `BLOG_POSTS` array:

```javascript
export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Your Blog Post Title',
    category: 'React',
    excerpt: 'A brief excerpt of your blog post.',
    image: 'https://your-image-url.com/blog-post.jpg',
    date: 'December 15, 2024',
    readTime: 8,
    url: '/blog/your-post-slug',
  },
  // ... more posts
];
```

## 📋 Adding Case Studies

In `src/data/portfolio.js`, add to the `CASE_STUDIES` array:

```javascript
export const CASE_STUDIES = [
  {
    id: 1,
    title: 'Your Case Study Title',
    type: 'UX Case Study',
    excerpt: 'Brief overview of the case study.',
    role: 'Your Role',
    timeline: '3 months',
    tools: 'Tools you used',
    challenge: 'The problem you solved.',
    solution: 'How you solved it.',
    results: 'The impact and results.',
    link: '/case-studies/your-study',
  },
  // ... more case studies
];
```

## 🚀 Deployment

### Deploy to GitHub Pages

1. Update `package.json` with your repository name:
   ```json
   "homepage": "https://otienovictor717-svg.github.io/odero-victor-portfolio",
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

Your portfolio will be live at `https://otienovictor717-svg.github.io/odero-victor-portfolio`

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign up
3. Import your GitHub repository
4. Vercel will automatically detect Vite and deploy
5. Your site will be live in minutes

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com) and sign up
3. Click "New site from Git" and select your repository
4. Set build command to `npm run build` and publish directory to `dist`
5. Deploy!

## 📧 Contact Form Setup

The contact form currently uses mailto links. To use a backend service:

**Option 1: Formspree (No Backend Required)**
```javascript
// In src/components/ContactForm.jsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

**Option 2: Your Own Backend API**
```javascript
const response = await fetch('https://your-backend.com/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData),
});
```

## 🎨 Styling

- Global styles: `src/index.css`
- Component styles: `src/components/styles.css`
- Header styles: `src/components/Header.css`

All styling uses CSS variables for easy theme customization.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- Desktop: 1120px max-width container
- Tablet: 768px and below
- Mobile: 640px and below

Mobile menu automatically appears below 768px.

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for navigation
- Keyboard navigation support
- Focus-visible states on interactive elements
- Proper heading hierarchy
- Color contrast meets WCAG standards

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📊 Performance

- Lazy-loaded components with React Router
- Optimized CSS with variables
- Lightweight dependencies (React, React Router only)
- Fast build times with Vite
- Optimized for Lighthouse scores

## 🐛 Troubleshooting

### Port 5173 is already in use
```bash
npm run dev -- --port 3000
```

### Build errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Contact form not working
Check that your email in `src/components/ContactForm.jsx` is correct and the mailto protocol is supported in your browser.

## 📝 License

This project is open source and available under the MIT License. Feel free to use this as a template for your own portfolio!

## 🤝 Contributing

Have ideas to improve this portfolio? Feel free to fork, modify, and submit pull requests.

## 📞 Questions?

Reach out via:
- Email: otienovictor717@gmail.com
- GitHub: https://github.com/otienovictor717-svg

---

**Built with ❤️ by Victor Odero**
