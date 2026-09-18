import { CssCertificate, JsCertificate, ReactCertificate } from './media-files.js';

// Skill groups rendered in the About section.
// Names follow the exact spelling used in job posts, so recruiters and ATS parsers match them.
// `certificate` links a skill to its course certificate (PDF).
export const skillGroups = [
  {
    title: "Frontend",
    items: [
      { title: "JavaScript (ES6+)", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", certificate: JsCertificate },
      { title: "TypeScript", url: "https://www.typescriptlang.org/" },
      { title: "React", url: "https://react.dev/", certificate: ReactCertificate },
      { title: "Next.js", url: "https://nextjs.org/" },
      { title: "Redux Toolkit", url: "https://redux-toolkit.js.org/" },
      { title: "React Router", url: "https://reactrouter.com/" },
      { title: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { title: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", certificate: CssCertificate },
      { title: "Sass/SCSS", url: "https://sass-lang.com/" },
      { title: "Tailwind CSS", url: "https://tailwindcss.com/" },
      { title: "Ant Design", url: "https://ant.design/" },
      { title: "Mantine", url: "https://mantine.dev/" },
      { title: "Responsive Design", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design" },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { title: "PHP", url: "https://www.php.net/" },
      { title: "MySQL", url: "https://www.mysql.com/" },
      { title: "REST APIs", url: "https://developer.mozilla.org/en-US/docs/Glossary/REST" },
      { title: "WordPress (themes & plugins)", url: "https://developer.wordpress.org/" },
      { title: "Shopify", url: "https://www.shopify.com/" },
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      { title: "Git & GitHub", url: "https://github.com/" },
      { title: "Vite", url: "https://vite.dev/" },
      { title: "Webpack", url: "https://webpack.js.org/" },
      { title: "npm", url: "https://www.npmjs.com/" },
      { title: "ESLint", url: "https://eslint.org/" },
      { title: "Chrome DevTools", url: "https://developer.chrome.com/docs/devtools" },
      { title: "Figma", url: "https://www.figma.com/" },
      { title: "Jira", url: "https://www.atlassian.com/software/jira" },
      { title: "Agile / Scrum", url: "https://www.atlassian.com/agile/scrum" },
    ],
  },
  {
    title: "AI-Assisted Development",
    items: [
      { title: "Claude", url: "https://claude.ai/" },
      { title: "ChatGPT", url: "https://chatgpt.com/" },
      { title: "Cursor", url: "https://cursor.com/" },
      { title: "GitHub Copilot", url: "https://github.com/features/copilot" },
      { title: "Prompt Engineering", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview" },
    ],
  },
  {
    // Roadmap: move a skill up into its group once you've used it in a real project.
    title: "Currently Learning",
    items: [
      { title: "Node.js", url: "https://nodejs.org/" },
      { title: "Express", url: "https://expressjs.com/" },
      { title: "MongoDB", url: "https://www.mongodb.com/" },
      { title: "PostgreSQL", url: "https://www.postgresql.org/" },
      { title: "Jest / Vitest", url: "https://vitest.dev/" },
      { title: "React Testing Library", url: "https://testing-library.com/docs/react-testing-library/intro/" },
      { title: "Docker", url: "https://www.docker.com/" },
      { title: "CI/CD (GitHub Actions)", url: "https://docs.github.com/en/actions" },
      { title: "Web Accessibility (WCAG)", url: "https://www.w3.org/WAI/standards-guidelines/wcag/" },
      { title: "LLM APIs (OpenAI, Anthropic)", url: "https://docs.claude.com/" },
    ],
  },
];

export const personalGroups = [
  {
    title: "Languages",
    items: [
      { title: "English (B1–B2)" },
      { title: "Russian" },
      { title: "Armenian" },
    ],
  },
  {
    title: "Interests",
    items: [
      { title: "Reading" },
      { title: "Painting" },
      { title: "Mountain hiking" },
      { title: "Movies" },
    ],
  },
];
