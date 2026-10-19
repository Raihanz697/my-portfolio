# Raihanur Rahman — Developer Portfolio

A modern, fast, and authentic developer portfolio built from scratch with **React 19**, **Vite**, and **Tailwind CSS v4**.

Designed with deep dark surfaces, subtle electric purple and vivid blue accents, clean typography, and zero fabricated claims.

---

## 🚀 Live Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with modern `@tailwindcss/vite` plugin
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (`FaReact`, `SiJavascript`, `SiTailwindcss`, etc.) & [Lucide React](https://lucide.dev/)
- **Architecture**: Modular, component-driven, mobile-first design with centralized data configuration.

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg             # Custom SVG brand favicon
│   └── resume.pdf              # (Optional) Place your PDF resume here
├── src/
│   ├── assets/                 # Static media & illustrations
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Responsive sticky navigation bar with active states
│   │   ├── Footer.jsx          # Dynamic copyright, social links & top scroller
│   │   ├── SectionHeading.jsx  # Consistent section title & badge styling
│   │   ├── SocialLinks.jsx     # Verified social media buttons
│   │   ├── SkillCard.jsx       # Category badges & honest proficiency indicators
│   │   ├── ProjectCard.jsx     # Terminal-style project card with repo links
│   │   ├── ProjectModal.jsx    # Accessible modal with keyboard Escape support
│   │   ├── ExperienceCard.jsx  # Honest learning pillars & trajectory
│   │   ├── EducationCard.jsx   # Degree cards for Leading University & HSC
│   │   ├── ResumeSection.jsx   # Live PDF detector & download CTA
│   │   ├── ContactSection.jsx  # Copy email action, GitHub link & message form
│   │   └── ScrollToTop.jsx     # Floating back-to-top button
│   ├── sections/               # Page sections
│   │   ├── Hero.jsx            # Headline, availability badge, code terminal visual
│   │   ├── About.jsx           # Background, learning journey & mindset
│   │   ├── Skills.jsx          # Categorized filterable tech stack
│   │   ├── Projects.jsx        # Verified GitHub repositories showcase
│   │   ├── Experience.jsx      # Current focus & experience status
│   │   └── Education.jsx       # Leading University & Border Guard College
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for all personal data
│   ├── App.jsx                 # App root ordering all sections sequentially
│   ├── main.jsx                # React DOM entry point
│   └── index.css               # Tailwind CSS v4 styling & theme tokens
├── index.html                  # SEO meta tags, Google Fonts, Open Graph
├── vite.config.js              # Vite bundler configuration
└── package.json                # Project dependencies and run scripts
```

---

## 🛠️ Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or later (Tested on Node.js v24)
- **npm**: v9.0.0 or later

### 2. Installation
Clone or navigate to the repository folder:
```bash
npm install
```

### 3. Running Locally
Start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser at the local URL printed in the terminal (typically `http://localhost:5173`).

### 4. Building for Production
Create an optimized production bundle:
```bash
npm run build
```
The output files will be generated in the `dist/` directory.

### 5. Previewing Production Build
```bash
npm run preview
```

---

## ✏️ Customization Guide

All personal data, skills, projects, and educational milestones are centralized in a single file:
**`src/data/portfolioData.js`**

### 1. Adding Your Real Resume PDF
1. Export your resume as a standard PDF file named **`resume.pdf`**.
2. Place the file inside the **`public/`** folder:
   ```text
   public/resume.pdf
   ```
3. The website will automatically detect the file and enable the **Download Resume** and **View in Browser** buttons.

### 2. Adding, Editing, or Removing Projects
Open `src/data/portfolioData.js` and edit the `projectsData` array:
```javascript
{
  id: "my-new-project",
  title: "Project Title",
  shortDescription: "A short 1-line overview for the card preview.",
  description: "Detailed explanation of what the application does, features, and problems solved.",
  technologies: ["React", "Tailwind CSS", "Node.js"],
  githubUrl: "https://github.com/Raihanz697/my-repo-name",
  liveUrl: "https://my-app.vercel.app", // Set to null if not hosted yet
  featured: true, // true to pin to top highlights
  status: "Completed Project"
}
```

### 3. Adding Your Email Address
In `src/data/portfolioData.js`, replace the empty string with your email:
```javascript
export const personalInfo = {
  // ...
  email: "yourname@example.com",
};
```
Once added, the **Copy Email** and direct **Send Message** actions activate automatically.

---

## 🌐 Deploying to Web Hosting

### Deploying to Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository (`portfolio`).
4. Keep the default settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

### Deploying to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com/).
2. Set the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Click **Deploy site**.

---

## 📄 License
This project is open source and available under the MIT License.
