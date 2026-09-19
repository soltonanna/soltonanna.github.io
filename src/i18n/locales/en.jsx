import React from 'react';

/*
 * English (default) dictionary.
 * Every language file (en / ru / hy) must have the same keys.
 * Things that never change between languages (URLs, tech stacks, project names,
 * images) stay in the components / utils files.
 */

const ext = { target: '_blank', rel: 'noopener noreferrer' };

const en = {
  meta: {
    title: 'Anahit Sultanova — Full-Stack Web Developer (React, TypeScript, WordPress)',
    description: 'Anahit Sultanova is a full-stack web developer in Yerevan, Armenia with 10+ years of experience building web apps, websites and plugins with React, TypeScript, JavaScript, PHP and WordPress. Open to remote roles.',
  },

  common: {
    switchToDark: 'Switch to dark mode',
    switchToLight: 'Switch to light mode',
    language: 'Language',
    downloadCv: 'Download CV',
    downloadCvTitle: 'Download CV (PDF)',
    readMore: 'Read More',
    hide: 'Hide',
    moreInfo: 'More Info',
    gotIt: 'Got It !',
    close: 'Close',
    loadMore: (count) => `Load More (${count})`,
    previous: 'Previous',
    next: 'Next',
    goToSlide: (n) => `Go to slide ${n}`,
    slideOf: (n, total) => `${n} of ${total}`,
    certificate: 'Certificate',
    certificateOf: (title) => `${title} certificate`,
    preview: (title) => `Preview ${title}`,
    demo: 'Demo',
    code: 'Code',
  },

  header: {
    name: 'Sultanova Anahit',
    role: 'Full-Stack Developer',
    roleLong: 'Full-Stack Web Developer',
    backToTop: 'Sultanova Anahit — back to top',
    skipToContent: 'Skip to content',
    sections: 'Sections',
    collapse: 'Collapse',
    collapseSidebar: 'Collapse sidebar',
    expandSidebar: 'Expand sidebar',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  nav: {
    'main-info': 'Home',
    about: 'About Me',
    experience: 'Resume',
    portfolio: 'Portfolio',
    services: 'Services',
    reviews: 'Reviews',
    blog: 'Blog',
    contact: 'Contact',
  },

  hero: {
    eyebrow: 'Full-Stack Web Developer',
    firstName: 'Sultanova',
    lastName: 'Anahit',
    lead: <>I build fast, reliable web apps with React and TypeScript, backed by 10+&nbsp;years of full-stack experience with PHP and WordPress.</>,
    viewProjects: 'View projects',
    profile: {
      role: { label: 'Role', value: 'Full-Stack Web Developer' },
      experience: { label: 'Experience', value: '10+ years (since 2014)' },
      stack: { label: 'Stack', value: 'React · TypeScript · PHP · WordPress' },
      location: { label: 'Based in', value: 'Yerevan, Armenia · Remote' },
      languages: { label: 'Languages', value: 'English · Russian · Armenian' },
      projects: { label: 'Projects', value: (count) => `${count} in portfolio` },
    },
  },

  about: {
    eyebrow: 'About',
    title: 'About me',
    readMore: 'Read more',
    showLess: 'Show less',
    skills: 'Skills',
    paragraphs: [
      <>I'm a full-stack web developer with 10+ years of experience building websites, plugins and web applications. I focus on React and TypeScript on the front end, and bring deep production experience with PHP, MySQL, REST APIs and WordPress on the back end.</>,
      <>I started in 2014 on a WordPress plugin team, helping build and maintain widely used plugins such as <a href='https://wordpress.org/plugins/form-maker/' {...ext}>Form Maker</a> and <a href='https://wordpress.org/plugins/photo-gallery/' {...ext}>Photo Gallery</a>. As a tech support team lead, I managed 4 junior developers and resolved 3,000+ bugs on live sites. Since 2022 I've worked on JavaScript and React products, including a workspace collaboration tool and an iGaming platform, and delivered 20+ WordPress sites for freelance clients.</>,
      <>Right now I'm co-building a full-stack book library app with React 19, TypeScript, Node.js/Express and MongoDB. I use AI tools like Claude, ChatGPT and Cursor every day to prototype, debug and review code faster, while I stay responsible for the quality of every line I ship.</>,
      <>Years of customer-facing support taught me to turn vague bug reports into clear fixes and to explain technical decisions in plain language. I'm used to agile teams, with daily stand-ups, sprint planning and code reviews. I hold a degree in Computer Systems and Informatics from the <a href='https://polytech.am/en/institutes/institute-of-information-and-telecommunication-technologies-and-electronics/institute/' {...ext}>National Polytechnic University of Armenia (SEUA)</a> and work in English, Russian and Armenian.</>,
      <>I'm looking for a full-stack or front-end role on a product team that builds with React and TypeScript, remote or in Yerevan. Outside of code, I read, paint, watch films and hike in the mountains.</>,
    ],
    // Skill group titles (keys match `id` in utils/skills.js)
    groups: {
      frontend: 'Frontend',
      backend: 'Backend & Data',
      tools: 'Tools & Workflow',
      ai: 'AI-Assisted Development',
      learning: 'Currently Learning',
      languages: 'Languages',
      interests: 'Interests',
    },
    // Only skills whose names should be translated. Anything not listed here is shown as-is.
    skillNames: {
      'Responsive Design': 'Responsive Design',
      'Agile / Scrum': 'Agile / Scrum',
      'Prompt Engineering': 'Prompt Engineering',
      'Web Accessibility (WCAG)': 'Web Accessibility (WCAG)',
      'WordPress (themes & plugins)': 'WordPress (themes & plugins)',
    },
    personal: {
      languages: ['English (B1–B2)', 'Russian', 'Armenian'],
      interests: ['Reading', 'Painting', 'Mountain hiking', 'Movies'],
    },
  },

  experience: {
    eyebrow: 'Resume',
    title: 'Work Experience',
    educationTitle: 'Education',
    keyAchievements: 'Key achievements:',
    workedWith: 'Worked with:',
    // Keys match `id` in components/Experience.jsx
    jobs: {
      tumo: {
        title: 'WordPress / Web Developer',
        place: 'TUMO Center for Creative Technologies',
        date: 'Jan 2024 - Present',
        desc: "I develop and maintain 20+ websites for TUMO's international partners and built the Camp TUMO website.",
        fullDesc: "I develop and maintain 20+ websites for TUMO's international partners: support, maintenance, bug fixing and new features. I built a custom WordPress plugin and theme for the partner sites, developed the Camp TUMO website from scratch, and improved 5 other TUMO websites.",
        more: (
          <ul>
            <li>Maintain and support 20+ websites for TUMO's international partner centers, handling bug fixes, updates and new feature requests.</li>
            <li>Built a custom WordPress plugin and theme for the partner websites.</li>
            <li>Developed the <a href='https://camptumo.com/' {...ext}>Camp TUMO</a> website, the site for TUMO's international summer program in Yerevan and Dilijan.</li>
            <li>Improved 5 other TUMO websites with new features, design updates and fixes.</li>
          </ul>
        ),
      },
      freelance: {
        title: 'Freelance React & WordPress Developer',
        place: 'Freelance',
        date: 'Sep 2019 - Present',
        desc: 'I build and improve React apps and WordPress sites for clients: new features, bug fixes and performance work.',
        fullDesc: "I build and improve React apps and WordPress sites for clients: new features, bug fixes and performance work. I've delivered 10+ WordPress websites and contributed React features to client products, including a project for Noor Logic.",
        more: (
          <>
            <p><b>React:</b></p>
            <ul>
              <li>Refactored UI into reusable React components, making pages faster to load and easier to maintain.</li>
              <li>Managed application state with Redux to keep data flow predictable and code simpler.</li>
              <li>Integrated REST APIs together with back-end developers.</li>
              <li>Worked with <a href='https://noorlogic.com/' {...ext}>Noor Logic</a> to improve their existing "UNDP" product: found weak spots in the UI and shipped React-based improvements.</li>
            </ul>
            <p><b>WordPress:</b></p>
            <ul>
              <li>Delivered 10+ websites using Elementor, Divi and custom themes built with ACF.</li>
              <li>Set up hosting and domains, improved load times and applied on-page SEO.</li>
            </ul>
          </>
        ),
      },
      brainstorm: {
        title: 'Full-Stack Web Developer',
        place: 'Brainstormtech',
        date: 'Jun 2023 - Jun 2024 · 1 yr 1 mo',
        desc: 'I built 5 WordPress projects end to end, supported 6 more and raised PageSpeed scores to 95+.',
        fullDesc: 'I built 5 WordPress projects from start to launch and supported 6 more with customization, new features and troubleshooting. I raised Google PageSpeed scores from about 50 to 95+ through performance optimization.',
        more: (
          <ul>
            <li>Built 5 WordPress projects end to end and supported 6 more.</li>
            <li>Designed and implemented new features across WordPress and Shopify sites.</li>
            <li>Raised Google PageSpeed scores from about 50 to 95+.</li>
            <li>Built responsive layouts and kept the CMS fast, stable and secure.</li>
            <li>Documented processes and code in line with the team's engineering standards.</li>
          </ul>
        ),
      },
      noorlogic: {
        title: 'Frontend Developer (React)',
        place: 'NoorLogic LLC',
        date: 'Sep 2022 - Jun 2023 · 10 mos',
        desc: 'I built new features and fixed bugs in a React workspace collaboration tool, working from Figma designs.',
        fullDesc: 'I built new features, fixed bugs and improved the UI of the Workspace Collaboration Tool, working from Figma prototypes. I made sure the app worked smoothly across browsers and devices.',
        more: (
          <ul>
            <li>Built new features and fixed bugs in the <a href='https://noorlogic.com/portfolio/workspace-collaboration-tool' {...ext}>Workspace Collaboration Tool</a>, a React web app.</li>
            <li>Turned Figma prototypes into responsive, pixel-accurate React components.</li>
            <li>Tested and fixed cross-browser and cross-device issues and improved performance.</li>
          </ul>
        ),
      },
      betinspire: {
        title: 'Frontend Developer (JavaScript)',
        place: 'BetInspire',
        date: 'Apr 2022 - Aug 2022 · 5 mos',
        desc: 'I added features to an iGaming platform and built responsive client website front ends.',
        fullDesc: 'I added features, fixed bugs and improved existing functionality on an iGaming platform. I also built and maintained responsive, cross-browser front ends for client websites.',
        more: (
          <ul>
            <li>Added features and fixed bugs on the company's <a href='https://www.betinspire.com/igaming-platform/' {...ext}>iGaming platform</a>.</li>
            <li>Built and maintained front ends for several client web apps, making them responsive and cross-browser compatible.</li>
          </ul>
        ),
      },
      careerBreak: {
        title: 'Professional Development: JavaScript & React',
        place: 'Career break',
        date: 'Jan 2022 - Apr 2022 · 4 mos',
        desc: 'I took a focused break to move from WordPress to modern JavaScript and React.',
        fullDesc: 'I took a focused break to move from WordPress to modern JavaScript and React. I completed 4 in-depth courses and built several single-page apps, which you can see in the Portfolio section.',
        moreTitle: 'What I did:',
        more: (
          <ul>
            <li>Completed <a href='https://www.udemy.com/course/the-complete-javascript-course/' {...ext}>The Complete JavaScript Course: From Zero to Expert</a> (Udemy).</li>
            <li>Completed <a href='https://www.udemy.com/course/react-the-complete-guide-incl-redux/' {...ext}>React: The Complete Guide (incl. Hooks, React Router, Redux)</a> (Udemy).</li>
            <li>Completed <a href='https://www.udemy.com/course/advanced-css-and-sass/' {...ext}>Advanced CSS and Sass: Flexbox, Grid, Animations and More</a> (Udemy).</li>
            <li>Completed <a href='https://www.udemy.com/course/css-animation-transitions-and-transforms-creativity-course/' {...ext}>Creative Advanced CSS &amp; JavaScript Animations</a> (Udemy).</li>
            <li>Built single-page apps and small projects with HTML, CSS, vanilla JavaScript and React (see the Portfolio section).</li>
          </ul>
        ),
      },
      tenwebEngineer: {
        title: 'Full-Stack Engineer',
        place: '10Web.io',
        date: 'Aug 2020 - Jan 2022 · 1 yr 6 mos',
        desc: 'I developed, tested and shipped WordPress plugins and services in a 5-person agile team.',
        fullDesc: 'I developed, tested and shipped WordPress plugins and services in a 5-person agile team, took part in code reviews and product releases, and handled customer tickets for the products I worked on.',
        more: (
          <ul>
            <li>Developed and improved WordPress plugins and services with developers, designers, copywriters and managers.</li>
            <li>Worked in Scrum: daily stand-ups, task and bug tracking in Jira, weekly sprint planning and retrospectives.</li>
            <li>Contributed to product releases and took part in code reviews with two senior developers and the team lead.</li>
            <li>Handled 7+ customer tickets and emails a day for the team's products.</li>
          </ul>
        ),
      },
      vtg: {
        title: 'Freelance WordPress Developer',
        place: 'VTG Software · contract during parental leave',
        date: 'Aug 2019 - Aug 2020 · 1 yr 1 mo',
        desc: 'I built, customized and optimized 3 WordPress websites on a part-time contract.',
        more: (
          <ul>
            <li>Built, customized and optimized 3 WordPress websites for <a href='https://vtgsoftware.com/' {...ext}>VTG Software</a> clients:
              {' '}<a href='https://volterman.com/' {...ext}>Volterman</a>,
              {' '}<a href='https://maldeks.org/' {...ext}>Maldeks</a> and
              {' '}<a href='https://vahagnstepanyan.com/' {...ext}>Vahagn Stepanyan</a>.</li>
          </ul>
        ),
      },
      tenwebSupport: {
        title: 'Tech Support Specialist & Team Lead',
        place: '10Web.io',
        date: 'Dec 2017 - Aug 2019 · 1 yr 9 mos',
        desc: 'I led a team of 4 junior developers and resolved 3,000+ bugs across 50+ premium WordPress plugins.',
        fullDesc: 'I led a team of 4 junior developers supporting 50+ premium WordPress plugins and extensions. I handled 20+ tickets a day and resolved 3,000+ bugs and issues on live customer sites.',
        more: (
          <ul>
            <li>Led and mentored a team of 4 junior developers, wrote internal documentation and ran trainings on products and code standards.</li>
            <li>Ran daily stand-ups to prioritize issues and passed user feedback to the product team as feature requests and bug reports.</li>
            <li>Supported 50+ premium plugins and extensions, handling 20+ tickets and emails a day.</li>
            <li>Found and fixed 3,000+ bugs and conflicts on live customer sites.</li>
          </ul>
        ),
      },
      webDorado: {
        title: 'Full-Stack Engineer',
        place: 'Web-Dorado',
        date: 'Jun 2014 - Dec 2017 · 3 yrs 7 mos',
        desc: 'I developed and maintained WordPress plugins and themes, including Form Maker and Photo Gallery.',
        fullDesc: 'I developed, tested and maintained WordPress plugins and themes, including the widely used Form Maker and Photo Gallery plugins. I also built 10+ websites and helped users resolve plugin and theme conflicts.',
        more: (
          <ul>
            <li>Developed, tested and maintained plugins, themes and extensions, including <a href='https://wordpress.org/plugins/form-maker/' {...ext}>Form Maker</a> and <a href='https://wordpress.org/plugins/photo-gallery/' {...ext}>Photo Gallery</a>.</li>
            <li>Worked with developers, designers and copywriters to plan and ship plugin improvements.</li>
            <li>Helped users fix bugs and conflicts with other plugins and themes, and turned their feedback into new features.</li>
            <li>Designed and built 10+ websites on WordPress and Joomla.</li>
          </ul>
        ),
      },
      instructor: {
        title: 'Frontend Instructor',
        place: 'Optimum IT Center',
        date: 'Oct 2015 - Jun 2016 · 9 mos',
        desc: 'I taught HTML, CSS and JavaScript to two beginner groups of 6–8 students, using slides and handouts tailored to each group.',
      },
      vxsoft: {
        title: 'QA & Customer Support Specialist',
        place: 'VxSoft',
        date: 'Dec 2013 - Apr 2014 · 5 mos',
        desc: 'I tested a document automation system for civil registry offices and trained staff to use it.',
        fullDesc: 'I tested a document automation system for birth, death and marriage registration, wrote QA checklists with designers and managers, and trained staff at civil registry offices across Yerevan.',
        more: (
          <ul>
            <li>Created and maintained QA sheets together with designers and managers.</li>
            <li>Tested and helped roll out document automation for birth, death and marriage registration.</li>
            <li>Trained staff at civil registry offices across Yerevan on the new system.</li>
            <li>Supported customers through the call center.</li>
          </ul>
        ),
      },
    },
    education: {
      course: {
        title: 'Web Development Course',
        place: 'Optimum IT Center',
        date: 'Sep 2013 - May 2014',
        desc: '9-month intensive course: HTML, CSS, PHP, MySQL and WordPress.',
      },
      degree: {
        title: "Bachelor's Degree, Computer Systems and Informatics",
        place: 'National Polytechnic University of Armenia (SEUA)',
        date: 'Sep 2009 - Jun 2013',
        desc: 'Chair of Information Technology and Automation.',
      },
    },
  },

  portfolio: {
    eyebrow: 'Portfolio',
    title: 'Portfolio',
    desc: "Two kinds of work live here. Live websites are real products I built or improved for clients and employers, either as the sole developer (freelance or in-house) or as part of a team. Pet projects are React and JavaScript apps, games, templates and animations I built to practice specific skills during my training, or just out of curiosity. Open any project to see it live, and check the source code on GitHub where it's available.",
    filterLabel: 'Filter projects',
    categories: {
      all: 'All',
      apps: 'React & JS Apps',
      wps: 'WordPress',
      shopify: 'Shopify',
      temp: 'Templates',
      games: 'Games',
      anime: 'Animation',
    },
    empty: 'No projects in this category yet.',
    showAll: 'Show all projects',
    showLess: 'Show less',
  },

  services: {
    eyebrow: 'Services',
    title: 'Services',
    desc: 'Remote freelance work for clients worldwide. Rates are hourly; for projects with a clear scope I can also quote a fixed price.',
    workflow: 'Workflow:',
    openSheet: '(Open on Excel)',
    howIWorkTitle: 'How I work',
    // Shared "How I work" list shown at the end of every card's modal. `price` = the card's rate.
    howIWork: (price) => (
      <ul>
        <li><b>Rate: </b>{price}. For fixed-scope projects I send a time and cost range before we start.</li>
        <li><b>Availability: </b>Monday–Saturday, 10:00–19:00 Yerevan time (GMT+4). I reply within one working day.</li>
        <li><b>Transparent time tracking: </b>I track every task in <a href='https://clockify.me/' {...ext}>Clockify</a> in a separate project for each client. You can see the tasks and time spent at any moment and get a detailed report every month.</li>
        <li><b>Meetings count too: </b>Calls and discussions about your project are tracked as tasks, so nothing is hidden.</li>
        <li><b>Payment: </b>at the beginning of each month.</li>
        <li><b>Contact: </b>email <a href='mailto:sultanova.anahit92@gmail.com'>sultanova.anahit92@gmail.com</a> or Telegram <a href='https://t.me/soltonanna' {...ext}>@soltonanna</a>.</li>
      </ul>
    ),
    // `id` links a card to its workflow sheet in components/Services.jsx
    items: [
      {
        id: 'wordpress',
        title: 'Custom WordPress Development',
        price: '$30 / hour',
        desc: 'Custom themes and plugins built from your design — fast, easy for your team to edit, and free of page-builder bloat.',
        fullDesc: '',
        more: (
          <ul>
            <li><b>From design to launch: </b>I turn your Figma design into a custom, responsive WordPress website that looks right on every screen size. No design yet? We can start from a ready-made theme or reference sites.</li>
            <li><b>Easy content editing: </b>Custom Gutenberg blocks and <a href='https://www.advancedcustomfields.com/' {...ext}>ACF</a> fields, so your team can update pages without touching code or breaking the layout.</li>
            <li><b>Custom plugins & integrations: </b>Forms, bookings, custom post types, payment systems and third-party APIs, built as clean, documented plugins.</li>
            <li><b>WooCommerce: </b>Online stores with custom product pages, checkout changes, payment and shipping setup.</li>
            <li><b>Page builders when they fit: </b>Elementor or Divi if you want to edit pages visually. I'll tell you honestly when a custom theme is the better choice.</li>
            <li><b>Multilingual sites & Multisite: </b>WPML, Polylang and WordPress Multisite.</li>
            <li><b>Getting an estimate: </b>Send me the list of pages, the features you need and a design (or example sites), and I'll reply with a time and cost range.</li>
          </ul>
        ),
      },
      {
        id: 'support',
        title: 'WordPress Support & Care Plans',
        price: '$25 / hour',
        desc: 'Updates, backups, security, bug fixes and new features for your existing site — hourly or as a monthly plan.',
        fullDesc: '',
        more: (
          <ul>
            <li><b>Monthly care plan: </b>A fixed number of hours each month for updates, backups, monitoring and small changes. Hours you don't use can go to improvements.</li>
            <li><b>Safe updates: </b>WordPress core, theme and plugin updates are tested on a staging copy first, so your live site doesn't break.</li>
            <li><b>Security & backups: </b>Site hardening, malware scans and cleanup, automatic off-site backups and fast restore if something goes wrong.</li>
            <li><b>Bug fixing: </b>PHP errors, broken layouts, plugin conflicts. I've fixed 3,000+ issues on live WordPress sites.</li>
            <li><b>New features & content: </b>New pages, sections, forms and plugins as your business grows.</li>
            <li><b>Taking over a site: </b>Got a site from another developer? I'll review it, document how it works and clean it up.</li>
          </ul>
        ),
      },
      {
        id: 'speed',
        title: 'Speed, SEO & Accessibility',
        price: '$30 / hour',
        desc: 'Faster pages, better Core Web Vitals and search rankings, and a site that is easier for everyone to use.',
        fullDesc: '',
        more: (
          <ul>
            <li><b>Core Web Vitals: </b>I measure your pages with PageSpeed Insights and Lighthouse and fix what slows them down (LCP, INP, CLS).</li>
            <li><b>Lighter pages: </b>Image compression and WebP/AVIF, lazy loading, removing unused CSS, JavaScript and plugins, caching and CDN setup.</li>
            <li><b>Technical SEO: </b>Clean HTML structure, meta tags, schema markup, sitemaps, redirects and Google Search Console setup.</li>
            <li><b>Accessibility: </b>Color contrast, alt text, keyboard navigation and form labels based on WCAG. This matters more now that the European Accessibility Act applies to many businesses selling in the EU.</li>
            <li><b>Before & after report: </b>You get the scores before and after the work, plus a list of everything that was changed.</li>
          </ul>
        ),
      },
      {
        id: 'react',
        title: 'React & Headless WordPress',
        price: '$35 / hour',
        desc: 'Modern front-ends in React and TypeScript — standalone web apps or fast headless sites powered by your WordPress content.',
        fullDesc: '',
        more: (
          <ul>
            <li><b>React & TypeScript apps: </b>Single-page apps, dashboards and interactive interfaces built from reusable components.</li>
            <li><b>Headless WordPress: </b>Your team keeps the WordPress admin they know, and visitors get a fast React / Next.js front-end that reads content through the REST API.</li>
            <li><b>Existing projects: </b>New features, bug fixes and refactoring in React codebases.</li>
            <li><b>Clean, responsive UI: </b>Semantic HTML, SCSS or Tailwind CSS, responsive from mobile to desktop.</li>
            <li><b>API integration: </b>Connecting your front-end to REST APIs and third-party services.</li>
            <li><b>Git workflow: </b>Code lives in your repository, with clear commits and pull requests.</li>
          </ul>
        ),
      },
      {
        id: 'shopify',
        title: 'Shopify Store Customization',
        price: '$30 / hour',
        desc: 'Theme customization, custom sections and store setup, so your Shopify store looks and sells the way you want.',
        fullDesc: '',
        more: (
          <ul>
            <li><b>Theme customization: </b>I adapt any Online Store 2.0 theme to your brand with Liquid, CSS and JavaScript.</li>
            <li><b>Custom sections & blocks: </b>Reusable sections your team can arrange in the theme editor without code.</li>
            <li><b>Store setup: </b>Products, collections, navigation, payments, shipping and the apps you really need.</li>
            <li><b>Fixes & speed: </b>Removing leftover app code, fixing layout bugs and improving the mobile experience.</li>
          </ul>
        ),
      },
      {
        id: 'ai',
        title: 'AI Features & Content for Websites',
        price: '$30 / hour',
        desc: 'Chat assistants, automations and AI-assisted content workflows that save your team time.',
        fullDesc: '',
        more: (
          <ul>
            <li><b>AI chat assistant: </b>A chatbot on your site that answers visitors' questions using your own content — FAQ, services, products.</li>
            <li><b>Automations: </b>Connect your forms, email and CRM to AI services (OpenAI, Claude) with tools like Zapier, Make or n8n.</li>
            <li><b>AI-assisted content: </b>Drafts and translations of pages, product descriptions and image alt text, always reviewed by a person before publishing.</li>
            <li><b>AI in WordPress: </b>Setting up AI plugins, or a small custom integration built for your specific task.</li>
          </ul>
        ),
      },
    ],
  },

  reviews: {
    eyebrow: 'Reviews',
    title: 'Reviews',
    desc: 'Explore the feedback from my satisfied clients, showcasing their experiences with my web development services.',
    carouselLabel: 'Client reviews',
    // Keys match `id` in utils/review-items.js
    items: {
      r_1: {
        position: 'Music Producer',
        review: 'Anahit is a skilled web developer capable of fixing any tasks or errors you ask for. Her expertise as a web developer shines through, effortlessly tackling any task or error you throw her way. She is the web developer you can rely on to swiftly tackle any task or troubleshoot any error with precision.',
      },
      r_2: {
        position: 'CEO @ American Savings F.S.',
        review: "Anahit is extremely professional, and on time with the Service she offers. We've had the privilege to work with her now on two websites and her savviness unexperienced and fair treatment towards us is truly unique. I recommend anyone to work with Anahit.",
      },
      r_3: {
        position: 'Project and Operations Management Professional',
        review: "I've worked with Anahit on developing several websites using WordPress. She is a skilled developer who goes above and beyond my expectations. She delivers the product on time and in excellent quality. She will turn any UI designs into reality and is very accommodating. Each time I work with her, she exceeds my expectations. She is also an excellent English speaker and fun to work with.",
      },
      r_4: {
        position: 'Project and Operations Management Professional',
        review: "For our company was a very pleasant to have you in our team for a while to develop the current project. Here are the skills you've demonstrated: a great understanding of the product, creativity and problem-solving,  attention to detail, leadership on this project, ability to work well with the team members and stakeholders, great communication skills and provide clear explanations,  dedication and hard work, consistently meets or exceeds our quality standards, a great attitude and positive energy, ability to work independently and meet deadlines, your ideas and suggestions are always insightful and valuable, work ethic, attention to user experience and user interface is impressive.",
      },
    },
  },

  blog: {
    eyebrow: 'Blog',
    title: 'Blog',
    desc: 'Interesting articles, screenshots and links from innovate and popular topics.',
    by: 'by S.Anahit',
    resources: 'Resources:',
    // Keys match `id` in utils/blog-items.js. `intro` is optional HTML shown above the screenshots.
    posts: {
      b_1: {
        name: 'JS Fundamentals',
        desc: 'In this topic you can find some useful information about JavaScript Fundamentals. Why we use JS, short history and some basic information',
      },
      b_2: {
        name: 'JavaScript Behind the Scenes',
        desc: 'In this topic you can see how JavaScript work behind the scene. Know about Event Loom, Hoisting and etc.',
      },
      b_3: {
        name: 'Working with Arrays',
        desc: 'Do you know why we using Arrays and which methods can we use? This topic help you find main information about them.',
        intro: `<p>One of the most commonly used objects in JavaScript is called an <span>Array</span>. An array is a data structure that contains a list of elements which store multiple values under a single variable. Arrays are considered to be special kinds of objects.</p>
            <p>In JavaScript, arrays use numbered indexes. Whereas, objects are used as named indexes.</p>
            <p>Array items — also known as array elements — are nothing more than the items stored inside an array. Items in an array can be of any object or data type that JavaScript supports, including strings to integers and booleans.</p>`,
      },
      b_4: {
        name: 'DOM',
        desc: 'We will learn what the DOM is, how to create it and how it can be modified using JavaScript.',
      },
      b_5: {
        name: 'Modern JavaScript',
        desc: 'Modern JavaScript is a powerful server-side language as well.',
      },
      b_10: {
        name: 'OOP',
        desc: 'In this topic you can find some useful information about Object-oriented programming in Javascript',
      },
    },
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Contact Me',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    address: 'Zoravar Andranik str, Yerevan, Armenia',
    copy: (label) => `Copy ${label}`,
    open: (label) => `Open ${label}`,
    copied: 'Copied to clipboard',
  },

  footer: {
    name: 'Sultanova Anahit',
    backToTop: 'Back to top',
  },
};

export default en;
