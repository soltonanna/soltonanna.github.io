import React from 'react';

/*
 * Armenian dictionary.
 * All user-facing text is translated into Armenian.
 * Keys, links, variables and markup are preserved.
 */

const ext = { target: '_blank', rel: 'noopener noreferrer' };

const hy = {
  meta: {
    title: 'Անահիտ Սուլթանովա — Full-Stack Web Developer (React, TypeScript, WordPress)',
    description: 'Անահիտ Սուլթանովան Երևանում, Հայաստանում բնակվող full-stack web developer է՝ ավելի քան 10 տարվա փորձով։ Նա ստեղծում է վեբ հավելվածներ, կայքեր և պլագիններ՝ օգտագործելով React, TypeScript, JavaScript, PHP և WordPress։ Բաց է հեռավար աշխատանքի հնարավորությունների համար։',
  },

  common: {
    switchToDark: 'Միացնել մուգ ռեժիմը',
    switchToLight: 'Միացնել բաց ռեժիմը',
    language: 'Լեզու',
    downloadCv: 'Ներբեռնել CV-ն',
    downloadCvTitle: 'Ներբեռնել CV-ն (PDF)',
    readMore: 'Կարդալ ավելին',
    hide: 'Թաքցնել',
    moreInfo: 'Ավելին',
    gotIt: 'Հասկացա՛',
    close: 'Փակել',
    loadMore: (count) => `Բեռնել ավելին (${count})`,
    previous: 'Նախորդ',
    next: 'Հաջորդ',
    goToSlide: (n) => `Անցնել ${n}-րդ սլայդին`,
    slideOf: (n, total) => `${n} / ${total}`,
    certificate: 'Վկայական',
    certificateOf: (title) => `${title}-ի վկայական`,
    preview: (title) => `Դիտել ${title}-ի նախադիտումը`,
    demo: 'Դեմո',
    code: 'Կոդ',
  },

  header: {
    name: 'Սուլթանովա Անահիտ',
    role: 'Full-Stack Developer',
    roleLong: 'Full-Stack Web Developer',
    backToTop: 'Սուլթանովա Անահիտ — վերադառնալ վերև',
    skipToContent: 'Անցնել հիմնական բովանդակությանը',
    sections: 'Բաժիններ',
    collapse: 'Ծալել',
    collapseSidebar: 'Ծալել կողային վահանակը',
    expandSidebar: 'Բացել կողային վահանակը',
    openMenu: 'Բացել մենյուն',
    closeMenu: 'Փակել մենյուն',
  },

  nav: {
    'main-info': 'Գլխավոր',
    about: 'Իմ մասին',
    experience: 'Ռեզյումե',
    portfolio: 'Պորտֆոլիո',
    services: 'Ծառայություններ',
    reviews: 'Կարծիքներ',
    blog: 'Բլոգ',
    contact: 'Կապ',
  },

  hero: {
    eyebrow: 'Full-Stack Web Developer',
    firstName: 'Սուլթանովա',
    lastName: 'Անահիտ',
    lead: <>Ես ստեղծում եմ արագ և հուսալի վեբ հավելվածներ՝ React և TypeScript տեխնոլոգիաներով՝ հիմնվելով PHP-ի և WordPress-ի հետ ավելի քան 10 տարվա full-stack փորձի վրա։</>,
    viewProjects: 'Դիտել նախագծերը',
    profile: {
      role: { label: 'Դեր', value: 'Full-Stack Web Developer' },
      experience: { label: 'Փորձ', value: '10+ տարի (2014-ից)' },
      stack: { label: 'Տեխնոլոգիաներ', value: 'React · TypeScript · PHP · WordPress' },
      location: { label: 'Գտնվում եմ', value: 'Երևան, Հայաստան · Հեռավար' },
      languages: { label: 'Լեզուներ', value: 'Անգլերեն · Ռուսերեն · Հայերեն' },
      projects: { label: 'Նախագծեր', value: (count) => `${count} պորտֆոլիոյում` },
    },
  },

  about: {
    eyebrow: 'Իմ մասին',
    title: 'Իմ մասին',
    readMore: 'Կարդալ ավելին',
    showLess: 'Ցույց տալ քիչ',
    skills: 'Հմտություններ',
    paragraphs: [
      <>Ես full-stack web developer եմ՝ ավելի քան 10 տարվա փորձով կայքերի, պլագինների և վեբ հավելվածների ստեղծման ոլորտում։ Frontend-ի համար հիմնականում օգտագործում եմ React և TypeScript, իսկ backend-ում ունեմ մեծ արտադրական փորձ PHP-ի, MySQL-ի, REST API-ների և WordPress-ի հետ։</>,

      <>Կարիերաս սկսել եմ 2014 թվականին WordPress պլագինների մշակման թիմում՝ մասնակցելով լայնորեն օգտագործվող պլագինների, այդ թվում՝ <a href='https://wordpress.org/plugins/form-maker/' {...ext}>Form Maker</a> և <a href='https://wordpress.org/plugins/photo-gallery/' {...ext}>Photo Gallery</a>, ստեղծման և սպասարկման աշխատանքներին։ Որպես տեխնիկական աջակցության թիմի ղեկավար՝ ղեկավարել եմ 4 junior developer-ի և լուծել եմ 3,000+ bug իրական գործող կայքերում։ 2022 թվականից աշխատում եմ JavaScript և React նախագծերի վրա, այդ թվում՝ համագործակցության գործիքի և iGaming հարթակի, ինչպես նաև freelance պատվիրատուների համար ստեղծել եմ 20+ WordPress կայք։</>,

      <>Այս պահին մասնակցում եմ full-stack գրադարանի հավելվածի մշակմանը՝ React 19, TypeScript, Node.js/Express և MongoDB տեխնոլոգիաներով։ Ամեն օր օգտագործում եմ AI գործիքներ, ինչպիսիք են Claude-ը, ChatGPT-ն և Cursor-ը՝ ավելի արագ պրոտոտիպավորման, debugging-ի և code review-ի համար, սակայն յուրաքանչյուր տող կոդի որակի համար շարունակում եմ լիովին պատասխանատու մնալ։</>,

      <>Հաճախորդների հետ երկար տարիների աշխատանքն ինձ սովորեցրել է անորոշ bug report-ները վերածել հստակ լուծումների և տեխնիկական որոշումները բացատրել պարզ ու հասկանալի լեզվով։ Սովոր եմ աշխատել agile թիմերում՝ daily stand-up-ներով, sprint planning-ով և code review-ներով։ Ունեմ Համակարգչային համակարգեր և ինֆորմատիկա մասնագիտությամբ կրթություն՝ <a href='https://polytech.am/en/institutes/institute-of-information-and-telecommunication-technologies-and-electronics/institute/' {...ext}>Հայաստանի ազգային պոլիտեխնիկական համալսարանում (SEUA)</a> և աշխատում եմ անգլերեն, ռուսերեն և հայերեն լեզուներով։</>,

      <>Այժմ փնտրում եմ full-stack կամ front-end աշխատանք product թիմում, որը աշխատում է React և TypeScript տեխնոլոգիաներով՝ հեռավար կամ Երևանում։ Կոդից դուրս սիրում եմ կարդալ, նկարել, ֆիլմեր դիտել և լեռներում արշավել։</>,
    ],

    // Skill group titles (keys match `id` in utils/skills.js)
    groups: {
      frontend: 'Frontend',
      backend: 'Backend և տվյալներ',
      tools: 'Գործիքներ և աշխատանքային գործընթաց',
      ai: 'AI-ով աջակցվող մշակում',
      learning: 'Ներկայում սովորում եմ',
      languages: 'Լեզուներ',
      interests: 'Հետաքրքրություններ',
    },

    // Only skills whose names should be translated. Anything not listed here is shown as-is.
    skillNames: {
      'Responsive Design': 'Responsive Design',
      'Agile / Scrum': 'Agile / Scrum',
      'Prompt Engineering': 'Prompt Engineering',
      'Web Accessibility (WCAG)': 'Վեբ հասանելիություն (WCAG)',
      'WordPress (themes & plugins)': 'WordPress (թեմաներ և պլագիններ)',
    },

    personal: {
      languages: ['Անգլերեն (B1–B2)', 'Ռուսերեն', 'Հայերեն'],
      interests: ['Ընթերցանություն', 'Նկարչություն', 'Լեռնային արշավներ', 'Ֆիլմեր'],
    },
  },

  experience: {
    eyebrow: 'Ռեզյումե',
    title: 'Աշխ. փորձ',
    educationTitle: 'Կրթություն',
    keyAchievements: 'Հիմնական ձեռքբերումները՝',
    workedWith: 'Աշխատել եմ՝',

    jobs: {
      tumo: {
        title: 'WordPress / Web Developer',
        place: 'TUMO Center for Creative Technologies',
        date: 'Հունվար 2024 - Ներկա',
        desc: 'Մշակում և սպասարկում եմ TUMO-ի միջազգային գործընկերների 20+ կայք և ստեղծել եմ Camp TUMO-ի կայքը։',
        fullDesc: 'Մշակում և սպասարկում եմ TUMO-ի միջազգային գործընկերների 20+ կայք՝ աջակցություն, սպասարկում, bug fixing և նոր ֆունկցիաների մշակում։ Գործընկերների կայքերի համար ստեղծել եմ custom WordPress plugin և theme, զրոյից մշակել եմ Camp TUMO-ի կայքը և կատարելագործել ևս 5 TUMO կայք։',
        more: (
          <ul>
            <li>Սպասարկում և աջակցում եմ TUMO-ի միջազգային գործընկեր կենտրոնների 20+ կայք՝ լուծելով bug-երը, կատարելով թարմացումներ և իրականացնելով նոր ֆունկցիաների հարցումներ։</li>
            <li>Գործընկերների կայքերի համար ստեղծել եմ custom WordPress plugin և theme։</li>
            <li>Մշակել եմ <a href='https://camptumo.com/' {...ext}>Camp TUMO</a> կայքը՝ Երևանում և Դիլիջանում TUMO-ի միջազգային ամառային ծրագրի կայքը։</li>
            <li>Կատարելագործել եմ ևս 5 TUMO կայք՝ ավելացնելով նոր ֆունկցիաներ, կատարելով դիզայնի թարմացումներ և ուղղումներ։</li>
          </ul>
        ),
      },

      freelance: {
        title: 'Freelance React & WordPress Developer',
        place: 'Freelance',
        date: 'Սեպտեմբեր 2019 - Ներկա',
        desc: 'Հաճախորդների համար ստեղծում և կատարելագործում եմ React հավելվածներ և WordPress կայքեր՝ ավելացնելով նոր ֆունկցիաներ, ուղղելով bug-երը և օպտիմալացնելով աշխատանքը։',
        fullDesc: 'Հաճախորդների համար ստեղծում և կատարելագործում եմ React հավելվածներ և WordPress կայքեր՝ ավելացնելով նոր ֆունկցիաներ, ուղղելով bug-երը և օպտիմալացնելով աշխատանքը։ Ստեղծել եմ 10+ WordPress կայք և մասնակցել հաճախորդների պրոդուկտներում React ֆունկցիաների մշակմանը, այդ թվում՝ Noor Logic-ի նախագծում։',
        more: (
          <>
            <p><b>React՝</b></p>
            <ul>
              <li>UI-ն վերակառուցել եմ reusable React components-ների միջոցով՝ էջերի բեռնման արագությունն ու սպասարկման հեշտությունը բարելավելու համար։</li>
              <li>Կառավարել եմ application state-ը Redux-ի միջոցով՝ տվյալների հոսքը կանխատեսելի, իսկ կոդը՝ ավելի պարզ պահելու համար։</li>
              <li>Ինտեգրել եմ REST API-ներ՝ backend developer-ների հետ համագործակցությամբ։</li>
              <li>Աշխատել եմ <a href='https://noorlogic.com/' {...ext}>Noor Logic</a>-ի հետ՝ կատարելագործելու նրանց գործող "UNDP" պրոդուկտը․ հայտնաբերել եմ UI-ի թույլ կողմերը և իրականացրել React-ով հիմնված բարելավումներ։</li>
            </ul>

            <p><b>WordPress՝</b></p>
            <ul>
              <li>Ստեղծել եմ 10+ կայք՝ օգտագործելով Elementor, Divi և ACF-ով ստեղծված custom themes։</li>
              <li>Կարգավորել եմ hosting-ը և domains-ը, բարելավել եմ բեռնման արագությունը և իրականացրել on-page SEO։</li>
            </ul>
          </>
        ),
      },

      brainstorm: {
        title: 'Full-Stack Web Developer',
        place: 'Brainstormtech',
        date: 'Հունիս 2023 - Հունիս 2024 · 1 տարի 1 ամիս',
        desc: 'Զրոյից մինչև վերջ մշակել եմ 5 WordPress նախագիծ, սպասարկել ևս 6-ը և PageSpeed-ի գնահատականները բարձրացրել մինչև 95+։',
        fullDesc: 'Զրոյից մինչև գործարկում մշակել եմ 5 WordPress նախագիծ և սպասարկել ևս 6-ը՝ կատարելով customization, նոր ֆունկցիաների մշակում և troubleshooting։ Performance optimization-ի միջոցով Google PageSpeed-ի գնահատականները մոտ 50-ից բարձրացրել եմ մինչև 95+։',
        more: (
          <ul>
            <li>Զրոյից մինչև վերջ մշակել եմ 5 WordPress նախագիծ և սպասարկել ևս 6-ը։</li>
            <li>WordPress և Shopify կայքերում նախագծել և իրականացրել եմ նոր ֆունկցիաներ։</li>
            <li>Google PageSpeed-ի գնահատականները մոտ 50-ից բարձրացրել եմ մինչև 95+։</li>
            <li>Ստեղծել եմ responsive layouts՝ պահպանելով CMS-ի արագությունը, կայունությունն ու անվտանգությունը։</li>
            <li>Փաստաթղթավորել եմ գործընթացներն ու կոդը՝ թիմի engineering standards-ին համապատասխան։</li>
          </ul>
        ),
      },

      noorlogic: {
        title: 'Frontend Developer (React)',
        place: 'NoorLogic LLC',
        date: 'Սեպտեմբեր 2022 - Հունիս 2023 · 10 ամիս',
        desc: 'React-ով ստեղծել եմ նոր ֆունկցիաներ և ուղղել bug-երը workspace collaboration tool-ում՝ աշխատելով Figma դիզայնների հիման վրա։',
        fullDesc: 'Ստեղծել եմ նոր ֆունկցիաներ, ուղղել bug-երը և բարելավել Workspace Collaboration Tool-ի UI-ն՝ աշխատելով Figma prototypes-ի հիման վրա։ Ապահովել եմ հավելվածի սահուն աշխատանքը տարբեր բրաուզերներում և սարքերում։',
        more: (
          <ul>
            <li>Ստեղծել եմ նոր ֆունկցիաներ և ուղղել bug-երը <a href='https://noorlogic.com/portfolio/workspace-collaboration-tool' {...ext}>Workspace Collaboration Tool</a>-ում՝ React-ով ստեղծված վեբ հավելվածում։</li>
            <li>Figma prototypes-ը վերածել եմ responsive, pixel-accurate React components-ի։</li>
            <li>Թեստավորել և ուղղել եմ cross-browser և cross-device խնդիրները և բարելավել եմ performance-ը։</li>
          </ul>
        ),
      },

      betinspire: {
        title: 'Frontend Developer (JavaScript)',
        place: 'BetInspire',
        date: 'Ապրիլ 2022 - Օգոստոս 2022 · 5 ամիս',
        desc: 'Ավելացրել եմ նոր ֆունկցիաներ iGaming հարթակում և ստեղծել responsive client website front ends։',
        fullDesc: 'Ավելացրել եմ նոր ֆունկցիաներ, ուղղել bug-երը և բարելավել գործող functionality-ն iGaming հարթակում։ Նաև ստեղծել և սպասարկել եմ responsive, cross-browser front ends հաճախորդների կայքերի համար։',
        more: (
          <ul>
            <li>Ավելացրել եմ ֆունկցիաներ և ուղղել bug-երը ընկերության <a href='https://www.betinspire.com/igaming-platform/' {...ext}>iGaming platform</a>-ում։</li>
            <li>Ստեղծել և սպասարկել եմ մի քանի client web apps-ի front ends՝ դրանք դարձնելով responsive և cross-browser compatible։</li>
          </ul>
        ),
      },

      careerBreak: {
        title: 'Մասնագիտական զարգացում․ JavaScript & React',
        place: 'Կարիերայի ընդմիջում',
        date: 'Հունվար 2022 - Ապրիլ 2022 · 4 ամիս',
        desc: 'Կենտրոնացած ընդմիջում եմ վերցրել՝ WordPress-ից դեպի ժամանակակից JavaScript և React անցնելու համար։',
        fullDesc: 'Կենտրոնացած ընդմիջում եմ վերցրել՝ WordPress-ից դեպի ժամանակակից JavaScript և React անցնելու համար։ Ավարտել եմ 4 խորացված դասընթաց և ստեղծել մի քանի single-page app, որոնք կարող եք տեսնել Portfolio բաժնում։',
        moreTitle: 'Ինչ եմ արել՝',
        more: (
          <ul>
            <li>Ավարտել եմ <a href='https://www.udemy.com/course/the-complete-javascript-course/' {...ext}>The Complete JavaScript Course: From Zero to Expert</a> դասընթացը (Udemy)։</li>
            <li>Ավարտել եմ <a href='https://www.udemy.com/course/react-the-complete-guide-incl-redux/' {...ext}>React: The Complete Guide (incl. Hooks, React Router, Redux)</a> դասընթացը (Udemy)։</li>
            <li>Ավարտել եմ <a href='https://www.udemy.com/course/advanced-css-and-sass/' {...ext}>Advanced CSS and Sass: Flexbox, Grid, Animations and More</a> դասընթացը (Udemy)։</li>
            <li>Ավարտել եմ <a href='https://www.udemy.com/course/css-animation-transitions-and-transforms-creativity-course/' {...ext}>Creative Advanced CSS &amp; JavaScript Animations</a> դասընթացը (Udemy)։</li>
            <li>Ստեղծել եմ single-page apps և փոքր նախագծեր HTML, CSS, vanilla JavaScript և React տեխնոլոգիաներով (տես Portfolio բաժինը)։</li>
          </ul>
        ),
      },

      tenwebEngineer: {
        title: 'Full-Stack Engineer',
        place: '10Web.io',
        date: 'Օգոստոս 2020 - Հունվար 2022 · 1 տարի 6 ամիս',
        desc: 'Մշակել, թեստավորել և թողարկել եմ WordPress plugins և services՝ 5 հոգանոց agile թիմում։',
        fullDesc: 'Մշակել, թեստավորել և թողարկել եմ WordPress plugins և services՝ 5 հոգանոց agile թիմում, մասնակցել եմ code reviews և product releases գործընթացներին և պատասխանել եմ իմ կողմից սպասարկվող պրոդուկտների հաճախորդների հարցումներին։',
        more: (
          <ul>
            <li>Մշակել և կատարելագործել եմ WordPress plugins և services՝ համագործակցելով developers, designers, copywriters և managers մասնագետների հետ։</li>
            <li>Աշխատել եմ Scrum-ի շրջանակում՝ daily stand-ups, Jira-ում task և bug tracking, շաբաթական sprint planning և retrospectives։</li>
            <li>Մասնակցել եմ product releases-ին և code reviews-ին՝ երկու senior developer-ի և team lead-ի հետ։</li>
            <li>Օրական մշակել եմ թիմի պրոդուկտների 7+ customer tickets և emails։</li>
          </ul>
        ),
      },

      vtg: {
        title: 'Freelance WordPress Developer',
        place: 'VTG Software · պայմանագրային աշխատանք ծնողական արձակուրդի ընթացքում',
        date: 'Օգոստոս 2019 - Օգոստոս 2020 · 1 տարի 1 ամիս',
        desc: 'Կես դրույքով պայմանագրային աշխատանքի շրջանակում ստեղծել, հարմարեցրել և օպտիմալացրել եմ 3 WordPress կայք։',
        more: (
          <ul>
            <li>
              Ստեղծել, հարմարեցրել և օպտիմալացրել եմ 3 WordPress կայք <a href='https://vtgsoftware.com/' {...ext}>VTG Software</a>-ի հաճախորդների համար՝
              {' '}<a href='https://volterman.com/' {...ext}>Volterman</a>,
              {' '}<a href='https://maldeks.org/' {...ext}>Maldeks</a> և
              {' '}<a href='https://vahagnstepanyan.com/' {...ext}>Vahagn Stepanyan</a>։
            </li>
          </ul>
        ),
      },

      tenwebSupport: {
        title: 'Tech Support Specialist & Team Lead',
        place: '10Web.io',
        date: 'Դեկտեմբեր 2017 - Օգոստոս 2019 · 1 տարի 9 ամիս',
        desc: 'Ղեկավարել եմ 4 junior developer-ից բաղկացած թիմ և լուծել 3,000+ bug՝ 50+ premium WordPress plugins-ում։',
        fullDesc: 'Ղեկավարել եմ 4 junior developer-ից բաղկացած թիմ, որը սպասարկում էր 50+ premium WordPress plugins և extensions։ Օրական մշակել եմ 20+ ticket և լուծել 3,000+ bug և issue՝ հաճախորդների գործող կայքերում։',
        more: (
          <ul>
            <li>Ղեկավարել և մենթորել եմ 4 junior developer-ից բաղկացած թիմ, գրել ներքին փաստաթղթեր և անցկացրել training-ներ պրոդուկտների և code standards-ի վերաբերյալ։</li>
            <li>Անցկացրել եմ daily stand-ups՝ խնդիրները առաջնահերթություն տալու համար, և user feedback-ը փոխանցել եմ product team-ին՝ որպես feature request և bug report։</li>
            <li>Սպասարկել եմ 50+ premium plugins և extensions՝ օրական մշակելով 20+ ticket և email։</li>
            <li>Հայտնաբերել և ուղղել եմ 3,000+ bug և conflict՝ հաճախորդների գործող կայքերում։</li>
          </ul>
        ),
      },

      webDorado: {
        title: 'Full-Stack Engineer',
        place: 'Web-Dorado',
        date: 'Հունիս 2014 - Դեկտեմբեր 2017 · 3 տարի 7 ամիս',
        desc: 'Մշակել և սպասարկել եմ WordPress plugins և themes, այդ թվում՝ Form Maker և Photo Gallery։',
        fullDesc: 'Մշակել, թեստավորել և սպասարկել եմ WordPress plugins և themes, այդ թվում՝ լայնորեն օգտագործվող Form Maker և Photo Gallery plugins-ը։ Նաև ստեղծել եմ 10+ կայք և օգնել եմ օգտատերերին լուծել plugin և theme conflicts։',
        more: (
          <ul>
            <li>Մշակել, թեստավորել և սպասարկել եմ plugins, themes և extensions, այդ թվում՝ <a href='https://wordpress.org/plugins/form-maker/' {...ext}>Form Maker</a> և <a href='https://wordpress.org/plugins/photo-gallery/' {...ext}>Photo Gallery</a>։</li>
            <li>Համագործակցել եմ developers, designers և copywriters մասնագետների հետ՝ plugin improvements-ը պլանավորելու և թողարկելու համար։</li>
            <li>Օգնել եմ օգտատերերին լուծել այլ plugins և themes-ի հետ կապված bug-երն ու conflicts-ը և նրանց feedback-ը վերածել նոր ֆունկցիաների։</li>
            <li>WordPress և Joomla հարթակներում նախագծել և ստեղծել եմ 10+ կայք։</li>
          </ul>
        ),
      },

      instructor: {
        title: 'Frontend Instructor',
        place: 'Optimum IT Center',
        date: 'Հոկտեմբեր 2015 - Հունիս 2016 · 9 ամիս',
        desc: 'Դասավանդել եմ HTML, CSS և JavaScript՝ սկսնակների երկու խմբերի, որոնցից յուրաքանչյուրում կար 6–8 ուսանող՝ օգտագործելով յուրաքանչյուր խմբի համար հարմարեցված սլայդներ և ուսումնական նյութեր։',
      },

      vxsoft: {
        title: 'QA & Customer Support Specialist',
        place: 'VxSoft',
        date: 'Դեկտեմբեր 2013 - Ապրիլ 2014 · 5 ամիս',
        desc: 'Թեստավորել եմ քաղաքացիական կացության գրանցման գրասենյակների համար նախատեսված փաստաթղթերի ավտոմատացման համակարգ և վերապատրաստել աշխատակիցներին դրա օգտագործման համար։',
        fullDesc: 'Թեստավորել եմ ծննդյան, մահվան և ամուսնության գրանցման համար նախատեսված փաստաթղթերի ավտոմատացման համակարգ, designers և managers մասնագետների հետ կազմել QA checklists և վերապատրաստել եմ Երևանի քաղաքացիական կացության գրանցման գրասենյակների աշխատակիցներին։',
        more: (
          <ul>
            <li>Designers և managers մասնագետների հետ ստեղծել և սպասարկել եմ QA sheets։</li>
            <li>Թեստավորել և աջակցել եմ ծննդյան, մահվան և ամուսնության գրանցման փաստաթղթերի ավտոմատացման համակարգի ներդրմանը։</li>
            <li>Երևանի քաղաքացիական կացության գրանցման գրասենյակների աշխատակիցներին վերապատրաստել եմ նոր համակարգի օգտագործման վերաբերյալ։</li>
            <li>Հաճախորդներին աջակցել եմ call center-ի միջոցով։</li>
          </ul>
        ),
      },
    },

    education: {
      course: {
        title: 'Web Development դասընթաց',
        place: 'Optimum IT Center',
        date: 'Սեպտեմբեր 2013 - Մայիս 2014',
        desc: '9-ամսյա ինտենսիվ դասընթաց՝ HTML, CSS, PHP, MySQL և WordPress։',
      },

      degree: {
        title: 'Բակալավրի աստիճան, Համակարգչային համակարգեր և ինֆորմատիկա',
        place: 'Հայաստանի ազգային պոլիտեխնիկական համալսարան (SEUA)',
        date: 'Սեպտեմբեր 2009 - Հունիս 2013',
        desc: 'Տեղեկատվական տեխնոլոգիաների և ավտոմատացման ամբիոն։',
      },
    },
  },

  portfolio: {
    eyebrow: 'Պորտֆոլիո',
    title: 'Պորտֆոլիո',
    desc: 'Այստեղ ներկայացված են երկու տեսակի աշխատանքներ։ Live կայքերը իրական պրոդուկտներ են, որոնք ստեղծել կամ կատարելագործել եմ հաճախորդների և գործատուների համար՝ որպես միակ developer (freelance կամ in-house) կամ թիմի կազմում։ Pet projects-ը React և JavaScript հավելվածներ, խաղեր, templates և animations են, որոնք ստեղծել եմ ուսուցման ընթացքում կոնկրետ հմտություններ զարգացնելու կամ պարզապես հետաքրքրությունից ելնելով։ Բացեք ցանկացած նախագիծ՝ այն live տեսնելու համար, իսկ հասանելի լինելու դեպքում GitHub-ում կարող եք դիտել նաև source code-ը։',
    filterLabel: 'Ֆիլտրել նախագծերը',
    categories: {
      all: 'Բոլորը',
      apps: 'React & JS Apps',
      wps: 'WordPress',
      shopify: 'Shopify',
      temp: 'Templates',
      games: 'Խաղեր',
      anime: 'Animation',
    },
    empty: 'Այս կատեգորիայում դեռ նախագծեր չկան։',
    showAll: 'Ցույց տալ բոլոր նախագծերը',
    showLess: 'Ցույց տալ քիչ',
  },

  services: {
    eyebrow: 'Ծառայություններ',
    title: 'Ծառայություններ',
    desc: 'Հեռավար ֆրիլանս աշխատանք ամբողջ աշխարհի հաճախորդների հետ։ Դրույքաչափերը ժամավճարային են, իսկ հստակ ծավալով նախագծերի համար կարող եմ առաջարկել ֆիքսված գին։',
    workflow: 'Աշխատանքային գործընթաց՝',
    openSheet: '(Բացել Excel-ում)',
    howIWorkTitle: 'Ինչպես եմ աշխատում',
    howIWork: (price) => (
      <ul>
        <li><b>Դրույքաչափ՝ </b>{price}։ Հստակ ծավալով նախագծերի դեպքում աշխատանքը սկսելուց առաջ ուղարկում եմ ժամկետի և արժեքի գնահատական։</li>
        <li><b>Հասանելիություն՝ </b>երկուշաբթի–շաբաթ, 10:00–19:00 Երևանի ժամանակով (GMT+4)։ Պատասխանում եմ մեկ աշխատանքային օրվա ընթացքում։</li>
        <li><b>Ժամանակի թափանցիկ հաշվառում՝ </b>յուրաքանչյուր առաջադրանք գրանցում եմ <a href='https://clockify.me/' {...ext}>Clockify</a>-ում՝ ամեն հաճախորդի համար առանձին նախագծում։ Ցանկացած պահի կարող եք տեսնել առաջադրանքները և ծախսված ժամանակը, իսկ ամեն ամիս ստանում եք մանրամասն հաշվետվություն։</li>
        <li><b>Հանդիպումները նույնպես հաշվառվում են՝ </b>նախագծի վերաբերյալ զանգերն ու քննարկումները գրանցվում են որպես առաջադրանքներ, ոչինչ թաքցված չէ։</li>
        <li><b>Վճարում՝ </b>յուրաքանչյուր ամսվա սկզբին։</li>
        <li><b>Կապ՝ </b>էլ. փոստ <a href='mailto:sultanova.anahit92@gmail.com'>sultanova.anahit92@gmail.com</a> կամ Telegram <a href='https://t.me/soltonanna' {...ext}>@soltonanna</a>։</li>
      </ul>
    ),
    items: [
      {
        id: 'wordpress',
        title: 'WordPress-ի անհատական մշակում',
        price: '$30 / ժամ',
        desc: 'Թեմաներ և պլագիններ ձեր դիզայնով՝ արագ, թիմի համար հեշտ խմբագրվող և առանց page builder-ների ավելորդ կոդի։',
        fullDesc: '',
        more: (
          <ul>
            <li><b>Դիզայնից մինչև գործարկում՝ </b>ձեր Figma դիզայնը վերածում եմ անհատական, ադապտիվ WordPress կայքի, որը ճիշտ է երևում ցանկացած էկրանին։ Դիզայն դեռ չունե՞ք։ Կարող ենք սկսել պատրաստի թեմայից կամ օրինակ կայքերից։</li>
            <li><b>Հեշտ խմբագրում՝ </b>անհատական Gutenberg բլոկներ և <a href='https://www.advancedcustomfields.com/' {...ext}>ACF</a> դաշտեր, որպեսզի ձեր թիմը թարմացնի էջերը՝ առանց կոդին դիպչելու և դասավորությունը խախտելու։</li>
            <li><b>Պլագիններ և ինտեգրացիաներ՝ </b>ձևեր, ամրագրումներ, custom post type-եր, վճարային համակարգեր և երրորդ կողմի API-ներ՝ մաքուր, փաստաթղթավորված պլագինների տեսքով։</li>
            <li><b>WooCommerce՝ </b>առցանց խանութներ՝ անհատական ապրանքային էջերով, պատվերի ձևակերպման փոփոխություններով, վճարման և առաքման կարգավորումներով։</li>
            <li><b>Page builder-ներ, երբ դրանք տեղին են՝ </b>Elementor կամ Divi, եթե ցանկանում եք էջերը խմբագրել վիզուալ։ Ազնվորեն կասեմ, երբ անհատական թեման ավելի լավ ընտրություն է։</li>
            <li><b>Բազմալեզու կայքեր և Multisite՝ </b>WPML, Polylang և WordPress Multisite։ </li>
            <li><b>Ինչպես ստանալ գնահատական՝ </b>ուղարկեք էջերի ցանկը, անհրաժեշտ ֆունկցիաները և դիզայնը (կամ օրինակ կայքեր), և ես կպատասխանեմ ժամկետի ու արժեքի միջակայքով։</li>
          </ul>
        ),
      },
      {
        id: 'support',
        title: 'WordPress-ի սպասարկում և ամսական փաթեթներ',
        price: '$25 / ժամ',
        desc: 'Թարմացումներ, պահուստային պատճեններ, անվտանգություն, սխալների ուղղում և նոր ֆունկցիաներ ձեր կայքի համար՝ ժամավճարով կամ ամսական փաթեթով։',
        fullDesc: '',
        more: (
          <ul>
            <li><b>Ամսական փաթեթ՝ </b>ամսական ֆիքսված քանակով ժամեր՝ թարմացումների, պահուստավորման, մոնիթորինգի և փոքր փոփոխությունների համար։ Չօգտագործված ժամերը կարելի է ուղղել բարելավումների։</li>
            <li><b>Անվտանգ թարմացումներ՝ </b>WordPress-ի միջուկը, թեման և պլագինները նախ թարմացվում են թեստային պատճենի վրա, որպեսզի աշխատող կայքը չխափանվի։</li>
            <li><b>Անվտանգություն և պահուստավորում՝ </b>կայքի պաշտպանություն, վնասակար կոդի ստուգում և մաքրում, ավտոմատ արտաքին պահուստային պատճեններ և արագ վերականգնում խափանման դեպքում։</li>
            <li><b>Սխալների ուղղում՝ </b>PHP սխալներ, խախտված դասավորություն, պլագինների կոնֆլիկտներ։ Աշխատող WordPress կայքերում ուղղել եմ 3000+ խնդիր։</li>
            <li><b>Նոր ֆունկցիաներ և բովանդակություն՝ </b>նոր էջեր, բաժիններ, ձևեր և պլագիններ՝ ձեր բիզնեսի աճին զուգընթաց։</li>
            <li><b>Կայքի ընդունում՝ </b>կայքը ստացել եք այլ ծրագրավորողի՞ց։ Կստուգեմ այն, կնկարագրեմ, թե ինչպես է այն աշխատում, և կկարգավորեմ։</li>
          </ul>
        ),
      },
      {
        id: 'speed',
        title: 'Արագություն, SEO և մատչելիություն',
        price: '$30 / ժամ',
        desc: 'Ավելի արագ էջեր, Core Web Vitals-ի և որոնման դիրքերի բարելավում, և կայք, որից հեշտ է օգտվել բոլորի համար։',
        fullDesc: '',
        more: (
          <ul>
            <li><b>Core Web Vitals՝ </b>չափում եմ էջերը PageSpeed Insights-ով և Lighthouse-ով և վերացնում այն, ինչ դանդաղեցնում է դրանք (LCP, INP, CLS)։</li>
            <li><b>Թեթև էջեր՝ </b>նկարների սեղմում և WebP/AVIF, lazy loading, ավելորդ CSS-ի, JavaScript-ի և պլագինների հեռացում, քեշավորում և CDN-ի կարգավորում։</li>
            <li><b>Տեխնիկական SEO՝ </b>մաքուր HTML կառուցվածք, մետա թեգեր, schema նշագրում, sitemap, վերահղումներ և Google Search Console-ի կարգավորում։</li>
            <li><b>Մատչելիություն՝ </b>գույների կոնտրաստ, alt տեքստեր, ստեղնաշարով նավիգացիա և ձևերի դաշտերի պիտակներ՝ WCAG ստանդարտի հիման վրա։ Սա հատկապես կարևոր է հիմա, երբ Եվրոպական մատչելիության ակտը (EAA) տարածվում է ԵՄ-ում վաճառող բազմաթիվ ընկերությունների վրա։</li>
            <li><b>«Առաջ և հետո» հաշվետվություն՝ </b>ստանում եք ցուցանիշները աշխատանքից առաջ և հետո, ինչպես նաև կատարված բոլոր փոփոխությունների ցանկը։</li>
          </ul>
        ),
      },
      {
        id: 'react',
        title: 'React և Headless WordPress',
        price: '$35 / ժամ',
        desc: 'Ժամանակակից ֆրոնտենդ React-ով և TypeScript-ով՝ առանձին վեբ հավելվածներ կամ արագ headless կայքեր՝ WordPress-ի բովանդակությամբ։',
        fullDesc: '',
        more: (
          <ul>
            <li><b>React և TypeScript հավելվածներ՝ </b>single-page հավելվածներ, դաշբորդներ և ինտերակտիվ ինտերֆեյսներ՝ վերաօգտագործվող կոմպոնենտներից։</li>
            <li><b>Headless WordPress՝ </b>ձեր թիմն աշխատում է WordPress-ի ծանոթ ադմին վահանակում, իսկ այցելուները տեսնում են արագ React / Next.js ֆրոնտենդ, որը բովանդակությունը ստանում է REST API-ի միջոցով։</li>
            <li><b>Գոյություն ունեցող նախագծեր՝ </b>նոր ֆունկցիաներ, սխալների ուղղում և ռեֆակտորինգ React նախագծերում։</li>
            <li><b>Մաքուր և ադապտիվ ինտերֆեյս՝ </b>սեմանտիկ HTML, SCSS կամ Tailwind CSS, ադապտիվություն՝ սմարթֆոնից մինչև դեսքթոփ։</li>
            <li><b>API ինտեգրացիա՝ </b>ֆրոնտենդի միացում REST API-ներին և երրորդ կողմի ծառայություններին։</li>
            <li><b>Աշխատանք Git-ով՝ </b>կոդը պահվում է ձեր ռեպոզիտորիայում՝ հստակ commit-ներով և pull request-ներով։</li>
          </ul>
        ),
      },
      {
        id: 'shopify',
        title: 'Shopify խանութների անհատականացում',
        price: '$30 / ժամ',
        desc: 'Թեմայի կարգավորում, անհատական բաժիններ և խանութի գործարկում, որպեսզի ձեր Shopify խանութը երևա և վաճառի այնպես, ինչպես ցանկանում եք։',
        fullDesc: '',
        more: (
          <ul>
            <li><b>Թեմայի կարգավորում՝ </b>ցանկացած Online Store 2.0 թեմա հարմարեցնում եմ ձեր բրենդին Liquid-ի, CSS-ի և JavaScript-ի միջոցով։</li>
            <li><b>Անհատական բաժիններ և բլոկներ՝ </b>վերաօգտագործվող բաժիններ, որոնք ձեր թիմը դասավորում է թեմայի խմբագրիչում՝ առանց կոդի։</li>
            <li><b>Խանութի կարգավորում՝ </b>ապրանքներ, հավաքածուներ, մենյու, վճարում, առաքում և միայն իսկապես անհրաժեշտ հավելվածները։</li>
            <li><b>Ուղղումներ և արագություն՝ </b>հավելվածներից մնացած կոդի հեռացում, դասավորության սխալների ուղղում և բջջային տարբերակի բարելավում։</li>
          </ul>
        ),
      },
      {
        id: 'ai',
        title: 'AI ֆունկցիաներ և բովանդակություն կայքերի համար',
        price: '$30 / ժամ',
        desc: 'Չաթ-օգնականներ, ավտոմատացումներ և AI-ի օգնությամբ բովանդակության ստեղծում, որոնք խնայում են ձեր թիմի ժամանակը։',
        fullDesc: '',
        more: (
          <ul>
            <li><b>AI չաթ-օգնական՝ </b>չաթ-բոտ ձեր կայքում, որը պատասխանում է այցելուների հարցերին՝ հիմնվելով ձեր բովանդակության վրա՝ FAQ, ծառայություններ, ապրանքներ։</li>
            <li><b>Ավտոմատացումներ՝ </b>ձեր ձևերի, էլ. փոստի և CRM-ի միացում AI ծառայություններին (OpenAI, Claude)՝ Zapier-ի, Make-ի կամ n8n-ի միջոցով։</li>
            <li><b>Բովանդակություն AI-ի օգնությամբ՝ </b>էջերի, ապրանքների նկարագրությունների և alt տեքստերի սևագրեր և թարգմանություններ, որոնք հրապարակելուց առաջ միշտ ստուգում է մարդը։</li>
            <li><b>AI WordPress-ում՝ </b>AI պլագինների կարգավորում կամ փոքր անհատական ինտեգրացիա՝ ձեր կոնկրետ խնդրի համար։</li>
          </ul>
        ),
      },
    ],
  },

  reviews: {
    eyebrow: 'Կարծիքներ',
    title: 'Կարծիքներ',
    desc: 'Ծանոթացեք իմ հաճախորդների արձագանքներին և նրանց փորձին իմ վեբ մշակման ծառայություններից օգտվելիս։',
    carouselLabel: 'Հաճախորդների կարծիքներ',

    items: {
      r_1: {
        position: 'Երաժշտական պրոդյուսեր',
        review: 'Անահիտը հմուտ web developer է, ով կարողանում է լուծել ցանկացած խնդիր կամ սխալ, որը դուք կարող եք ներկայացնել։ Նրա մասնագիտական գիտելիքները ակնհայտ են՝ նա հեշտությամբ հաղթահարում է տարբեր task-եր և troubleshoot անում խնդիրները։ Նա այն web developer-ն է, ում կարող եք վստահել ցանկացած խնդրի արագ և ճշգրիտ լուծումը։',
      },

      r_2: {
        position: 'CEO @ American Savings F.S.',
        review: 'Անահիտը չափազանց պրոֆեսիոնալ է և իր ծառայությունները մատուցում է ժամանակին։ Մենք հնարավորություն ենք ունեցել նրա հետ աշխատել երկու կայքի վրա, և նրա մասնագիտական հմտություններն ու մեր նկատմամբ արդար վերաբերմունքն իսկապես առանձնահատուկ են։ Խորհուրդ եմ տալիս աշխատել Անահիտի հետ։',
      },

      r_3: {
        position: 'Project and Operations Management Professional',
        review: 'Ես աշխատել եմ Անահիտի հետ մի քանի WordPress կայքերի մշակման ընթացքում։ Նա հմուտ developer է, ով մշտապես գերազանցում է իմ սպասելիքները։ Նա աշխատանքը կատարում է ժամանակին և գերազանց որակով։ Նա կարող է ցանկացած UI design վերածել իրականության և շատ ճկուն է համագործակցության ընթացքում։ Ամեն անգամ, երբ աշխատում եմ նրա հետ, նա գերազանցում է իմ սպասելիքները։ Նա նաև հիանալի տիրապետում է անգլերենին և հաճելի է նրա հետ աշխատելը։',
      },

      r_4: {
        position: 'Project and Operations Management Professional',
        review: 'Մեր ընկերության համար շատ հաճելի էր որոշ ժամանակ ունենալ քեզ մեր թիմում՝ ընթացիկ նախագիծը մշակելու համար։ Ահա այն հմտությունները, որոնք դու ցուցաբերեցիր՝ պրոդուկտի լավ ըմբռնում, ստեղծագործական մոտեցում և խնդիրների լուծում, մանրուքների նկատմամբ ուշադրություն, leadership նախագծի շրջանակում, թիմակիցների և stakeholders-ի հետ արդյունավետ համագործակցություն, հաղորդակցման բարձր հմտություններ և հստակ բացատրություններ, նվիրվածություն և աշխատասիրություն, մեր որակի չափանիշները մշտապես պահպանելու կամ գերազանցելու կարողություն, դրական վերաբերմունք և էներգիա, ինքնուրույն աշխատելու և deadlines-ը պահպանելու կարողություն։ Քո գաղափարներն ու առաջարկները միշտ խորաթափանց և արժեքավոր էին։ Work ethic-ը, ինչպես նաև user experience-ի և user interface-ի նկատմամբ ուշադրությունը տպավորիչ են։',
      },
    },
  },

  blog: {
    eyebrow: 'Բլոգ',
    title: 'Բլոգ',
    desc: 'Հետաքրքիր հոդվածներ, screenshots և հղումներ նորարարական և հայտնի թեմաների վերաբերյալ։',
    by: 'S.Anahit-ի կողմից',
    resources: 'Ռեսուրսներ՝',

    posts: {
      b_1: {
        name: 'JS Fundamentals',
        desc: 'Այս թեմայում կարող եք գտնել օգտակար տեղեկություններ JavaScript Fundamentals-ի մասին՝ ինչու ենք օգտագործում JS-ը, դրա համառոտ պատմությունը և հիմնական տեղեկությունները։',
      },

      b_2: {
        name: 'JavaScript Behind the Scenes',
        desc: 'Այս թեմայում կարող եք տեսնել, թե ինչպես է JavaScript-ը աշխատում ներքին մակարդակում։ Կծանոթանաք Event Loop-ին, Hoisting-ին և այլ թեմաների։',
      },

      b_3: {
        name: 'Working with Arrays',
        desc: 'Գիտե՞ք, թե ինչու ենք օգտագործում Arrays և ինչ methods կարող ենք կիրառել դրանց հետ աշխատելիս։ Այս թեման կօգնի ձեզ գտնել դրանց մասին հիմնական տեղեկատվությունը։',
        intro: `<p>JavaScript-ում ամենահաճախ օգտագործվող օբյեկտներից մեկը <span>Array</span>-ն է։ Array-ը տվյալների կառուցվածք է, որը պարունակում է տարրերի ցանկ և թույլ է տալիս մի քանի արժեք պահել մեկ փոփոխականի ներքո։ Arrays-ը համարվում են օբյեկտների հատուկ տեսակ։</p>
            <p>JavaScript-ում arrays-ը օգտագործում է թվային indexes, մինչդեռ objects-ը օգտագործում են անվանական indexes։</p>
            <p>Array items-ը, որոնք նաև կոչվում են array elements, պարզապես array-ի ներսում պահվող տարրերն են։ Array-ի տարրերը կարող են լինել JavaScript-ի կողմից աջակցվող ցանկացած օբյեկտ կամ տվյալների տեսակ՝ strings-ից մինչև integers և booleans։</p>`,
      },

      b_4: {
        name: 'DOM',
        desc: 'Կսովորենք, թե ինչ է DOM-ը, ինչպես է այն ստեղծվում և ինչպես կարելի է այն փոփոխել JavaScript-ի միջոցով։',
      },

      b_5: {
        name: 'Modern JavaScript',
        desc: 'Modern JavaScript-ը նաև հզոր server-side լեզու է։',
      },

      b_10: {
        name: 'OOP',
        desc: 'Այս թեմայում կարող եք գտնել օգտակար տեղեկություններ Javascript-ում Object-oriented programming-ի մասին։',
      },
    },
  },

  contact: {
    eyebrow: 'Կապ',
    title: 'Կապ հաստատել',
    email: 'Էլ․ փոստ',
    phone: 'Հեռախոս',
    location: 'Գտնվելու վայր',
    address: 'Զորավար Անդրանիկի փողոց, Երևան, Հայաստան',
    copy: (label) => `Պատճենել ${label}-ը`,
    open: (label) => `Բացել ${label}-ը`,
    copied: 'Պատճենված է clipboard-ում',
  },

  footer: {
    name: 'Սուլթանովա Անահիտ',
    backToTop: 'Վերադառնալ վերև',
  },
};

export default hy;