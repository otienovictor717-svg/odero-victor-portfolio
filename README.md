# Victor Odero — Frontend Developer & UI Designer

A modern, clean portfolio website showcasing my work as a frontend developer and product designer. Built with **React 18**, **Vite**, and **CSS**, this portfolio is designed to be fast, responsive, and easy to customize.

## 🚀 Live Demo

[View the portfolio](https://otienovictor717-svg.github.io/odero-victor-portfolio) (deployment instructions below)

## 📋 Features

- ✨ **Modern & Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- ⚡ **Lightning Fast** — Built with Vite for instant development and optimized production builds
- 🎨 **Customizable Theme** — Easy-to-modify color scheme via CSS variables
- 📱 **Mobile-First** — Optimized for all screen sizes
- ♿ **Accessible** — Semantic HTML and keyboard navigation support
- 🔧 **Component-Based Architecture** — Modular React components for easy updates
- 📊 **Organized Content** — Centralized data file (`src/data/portfolio.js`) for quick edits

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite, CSS3
- **Styling:** Custom CSS with CSS Variables (no frameworks)
- **Build Tool:** Vite 5
- **Linting:** ESLint (configured)
- **Package Manager:** npm

## 📦 Project Structure

```
src/
├── components/          # React components for each section
│   ├── Header.jsx      # Navigation header
│   ├── Header.css      # Header styling
│   ├── Hero.jsx        # Hero/welcome section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills showcase
│   ├── Projects.jsx    # Featured projects
│   ├── Experience.jsx  # Work experience
│   └── Contact.jsx     # Contact section
├── data/
│   └── portfolio.js    # Centralized content (edit this to update your portfolio)
├── App.jsx             # Main app component
├── main.jsx            # React entry point
├── index.css           # Global styles & theme variables
package.json           # Dependencies & scripts
vite.config.js         # Vite configuration
```

## 🚦 Getting Started

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

All content is centralized in **`src/data/portfolio.js`**. Simply edit this file to update:

- **Navigation links** — `NAV_LINKS`
- **Skills** — `SKILLS` array
- **Projects** — `PROJECTS` array (add/remove projects)
- **Experience** — `EXPERIENCE` array
- **Stats** — `STATS` (displayed in hero section)
- **Social links** — `SOCIALS` (GitHub, LinkedIn, Email, etc.)

### Example: Add a New Project

Edit `src/data/portfolio.js`:

```javascript
export const PROJECTS = [
  {
    title: 'Your Project Name',
    type: 'Project Category',
    description: 'Brief description of what the project does.',
    stack: ['React', 'Node.js', 'CSS'],
  },
  // ... more projects
];
```

### Example: Update Your Name & Title

Edit `src/components/Hero.jsx`:

```javascript
<h1>I build clean, memorable digital experiences that help ideas stand out.</h1>
<p className="lead">
  I'm [Your Name], a developer focused on turning product ideas into polished,
  responsive, and user-centered experiences.
</p>
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

## 🚀 Deployment

### Deploy to GitHub Pages

1. Update `package.json` with your repository name:
   ```json
   "homepage": "https://otienovictor717-svg.github.io/odero-victor-portfolio",
   ```

2. Install the gh-pages package:
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

## 📝 Code Quality

Lint your code:

```bash
npm run lint
```

Fix ESLint warnings:

```bash
npm run lint -- --fix
```

## 🎨 Features & Components

### Header
- Sticky navigation bar with smooth scroll to sections
- Responsive design with mobile support
- CTA button to contact section

### Hero Section
- Eye-catching headline and introduction
- Profile card with availability badge
- Quick stats (years of experience, projects launched, etc.)
- Social media links

### About Section
- Design philosophy and approach
- Value proposition

### Skills Section
- Grid of skill cards
- Easy to add/remove skills

### Projects Section
- Project cards with title, description, and tech stack
- Filterable by type
- Easy to link to live demos or GitHub repos

### Experience Section
- Timeline-style work experience
- Role, company, and key achievements
- Sortable by date

### Contact Section
- Clear call-to-action
- Email link (easily customizable)

## 🔧 Configuration

### Vite Configuration

Edit `vite.config.js` to customize build behavior:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    sourcemap: false,
  }
})
```

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

### Styling issues after deployment
Ensure your `vite.config.js` has the correct base URL for GitHub Pages.

## 📄 License

This project is open source and available under the MIT License. Feel free to use this as a template for your own portfolio!

## 🤝 Contributing

Have ideas to improve this portfolio? Feel free to fork, modify, and submit pull requests.

## 📧 Questions?

Reach out on [LinkedIn](https://linkedin.com) or email victor@example.com

---

**Built with ❤️ by Victor Odero**
