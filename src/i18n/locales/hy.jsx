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
    workflow: 'Աշխատանքային գործընթաց՝',
    openSheet: '(Բացել Excel-ում)',

    items: [
      {
        title: 'WordPress կայքի մշակում զրոյից',
        price: '$20 ժամում',
        desc: 'Ստեղծում եմ ամբողջությամբ անհատականացված կայքեր զրոյից՝ WordPress-ի միջոցով՝ յուրաքանչյուր դետալը համապատասխանեցնելով ձեր պահանջներին և տեսլականին։',
        fullDesc: '',
        more: (
          <ul>
            <li><b>WordPress կայքի մշակում՝ </b>
            Մասնագիտանում եմ WordPress Content Management System (CMS)-ի միջոցով կայքերի ստեղծման մեջ։ Անկախ նրանից՝ ձեզ անհրաժեշտ է անձնական բլոգ, բիզնես կայք կամ e-commerce հարթակ, կարող եմ օգնել։</li>

            <li><b>Դիզայնի ճկուն տարբերակներ՝ </b>
            Կարող եմ աշխատել տարբեր Page Builder-ների, օրինակ՝ <a href='https://elementor.com/' {...ext}>"Elementor"</a>-ի կամ <a href='https://www.elegantthemes.com/gallery/divi/' {...ext}>"Divi"</a>-ի հետ՝ ձեր տեսլականը իրականություն դարձնելու համար։ Այլընտրանքային տարբերակ է <a href='https://themeforest.net/' {...ext}>"Envato Market"</a>-ից template ընտրելը, որը ես կհարմարեցնեմ ձեր նախասիրություններին՝ ավելացնելով ձեր պատկերները, տեքստը և այլ բովանդակությունը։</li>

            <li><b>Օպտիմալացված լուծումներ՝ </b>
            Լավագույն performance-ի և արդյունավետության համար խորհուրդ եմ տալիս օգտագործել <a href='https://www.advancedcustomfields.com/' {...ext}>Advanced Custom Fields (ACF)</a> plugin-ը և ստեղծել custom theme։ Այս մոտեցումը թույլ է տալիս ստանալ թեթև կայք, որը ճշգրիտ համապատասխանում է ձեր կարիքներին՝ առանց ավելորդ functionality-ի։</li>

            <li><b>Plugin-ների ինտեգրում և կառավարում՝ </b>
            Կայքում ինտեգրում և կառավարում եմ տարբեր plugin-ներ՝ անհրաժեշտ functionality ավելացնելու համար, այդ թվում՝ <a href='https://wordpress.org/plugins/contact-form-7/' {...ext}>"Contact Form"</a>, galleries, <a href='https://wordpress.org/plugins/popup-maker/' {...ext}>"Popup Maker"</a>, SEO optimization՝ <a href='https://yoast.com/' {...ext}>"Yoast SEO"</a>-ի միջոցով, <a href='https://wordpress.org/plugins/updraftplus/' {...ext}>"UpdraftPlus"</a> backups, caching և այլն։ Հիմնականում օգտագործում եմ <b>FREE</b> plugin-ներ, սակայն որոշ դեպքերում, կախված կոնկրետ պահանջներից, կարող է անհրաժեշտ լինել <b>PRO</b> plugin։ Այդ դեպքում դուք միշտ տեղեկացված կլինեք premium plugin-ի օգտագործման մասին։</li>

            <li><b>Custom Design-ի ինտեգրում՝ </b>
            Եթե ունեք կոնկրետ դիզայն կամ Figma template, կարող եմ կայքը ստեղծել զրոյից՝ հիմնվելով այդ պահանջների վրա։</li>

            <li><b>Համագործակցային գործընթաց՝ </b>
            Սկսելու համար պարզապես տրամադրեք hosting-ը և domain-ը։ Կայքի տեղադրումից հետո ինձ անհրաժեշտ կլինեն համապատասխան նյութերը՝ email, logo, images և text։ Մնացածը ես կկատարեմ՝ ամբողջ գործընթացի ընթացքում ձեզ տեղեկացնելով առաջընթացի մասին։</li>

            <li><b>Ժամանակի արդյունավետ հաշվառում՝ </b>
            Յուրաքանչյուր նախագծի համար ժամանակը ճշգրիտ հաշվարկելու նպատակով օգտագործում եմ <a href='https://app.clockify.me/tracker' {...ext}>Clockify App</a>-ը։ Բացի այդ, յուրաքանչյուր հաճախորդի համար ստեղծում եմ առանձին project և ձեզ տրամադրում եմ դրա մանրամասներին հասանելիություն։ Դուք կարող եք տեսնել կատարված task-երի քանակը և յուրաքանչյուրի վրա ծախսված ժամանակը՝ ապահովելով ամբողջական թափանցիկություն։ Յուրաքանչյուր ամսվա վերջում կստանաք նաև մանրամասն հաշվետվություն։</li>

            <li><b>Հանդիպումների և քննարկումների հաշվառում՝ </b>
            Ձեր կայքի նախագծին վերաբերող բոլոր հանդիպումներն ու քննարկումները գրանցվում են որպես task-եր՝ ապահովելու համար, որ համագործակցության յուրաքանչյուր փուլ հաշվառված և թափանցիկ լինի։</li>

            <li><b>Թափանցիկ գնագոյացում՝ </b>
            Իմ ժամային դրույքը <b><i>$20 ժամում</i></b> է։ Հասանելի եմ շաբաթական վեց օր՝ <b><i>10:00-ից 19:00 (GMT+4)</i></b>։</li>

            <li><b>Գնի գնահատման գործընթաց՝ </b>
            Ճշգրիտ նախնական գին հաշվարկելու համար ինձ անհրաժեշտ է տեղեկություն կայքի կառուցվածքի մասին՝ էջերի քանակը, բովանդակության տեսակները, ցանկալի functionality-ն (որը կարող է պահանջել plugin կամ custom code), ինչպես նաև նախատեսվող animations կամ հատուկ features։ Այս տվյալների հիման վրա կներկայացնեմ նախագծի համար անհրաժեշտ մոտավոր ժամանակի և արժեքի միջակայքը։ Խնդրում եմ նկատի ունենալ, որ վերջնական ժամանակն ու արժեքը կարող են փոփոխվել՝ կախված բարդությունից և աշխատանքի ընթացքում կատարվող փոփոխություններից։</li>

            <li><b>Հարմար վճարման տարբերակներ՝ </b>
            Նախընտրում եմ վճարումը ստանալ յուրաքանչյուր ամսվա սկզբում, ինչը թույլ է տալիս պահպանել աշխատանքային գործընթացի սահուն ընթացքը։</li>

            <li><b>Ամբողջական աջակցություն՝ </b>
            Նախագծի ավարտից հետո կարող եմ տրամադրել ուսուցում կամ փաստաթղթեր՝ պատկերներով և տեսանյութերով, որպեսզի կարողանաք ինքնուրույն կառավարել ձեր կայքը։ Անհրաժեշտության դեպքում առաջարկում եմ նաև ongoing support՝ թարմացումների և նոր բովանդակության ավելացման համար։</li>

            <li><b>Հաղորդակցության ուղիներ՝ </b>
            Հեշտ հաղորդակցության համար կարող եք կապվել ինձ հետ Gmail-ով՝ [<a href='mailto:sultanova.anahit92@gmail.com'>sultanova.anahit92@gmail.com</a>] կամ Telegram-ով՝ [<a href='https://t.me/soltonanna' {...ext}>@soltonanna</a>]։</li>
          </ul>
        ),
      },

      {
        title: 'WordPress-ի աջակցություն և սպասարկում',
        price: '$20 ժամում',
        desc: 'Տրամադրում եմ գործող WordPress կայքերի ամբողջական աջակցություն՝ ֆունկցիոնալ և դիզայնի փոփոխություններից մինչև նոր հնարավորությունների ավելացում։',
        fullDesc: 'Տրամադրում եմ գործող WordPress կայքերի ամբողջական աջակցություն՝ ֆունկցիոնալ և դիզայնի փոփոխություններից մինչև նոր հնարավորությունների ավելացում՝ ապահովելով, որ ձեր կայքը մնա արդիական և մրցունակ։',
        more: (
          <ul>
            <li><b>Ամբողջական աջակցություն՝ </b>
            Տրամադրում եմ գործող WordPress կայքերի շարունակական աջակցություն՝ ապահովելով դրանց ֆունկցիոնալությունը, անվտանգությունն ու արդիականությունը։</li>

            <li><b>Ֆունկցիոնալ և դիզայնի թարմացումներ՝ </b>
            Անկախ նրանից՝ անհրաժեշտ է bug fixing, performance optimization կամ դիզայնի թարմացում, կատարում եմ անհրաժեշտ փոփոխությունները՝ կայքը սահուն աշխատելու և ժամանակակից տեսք ունենալու համար։</li>

            <li><b>Նոր ֆունկցիաների ավելացում՝ </b>
            Անհրաժեշտ է նոր functionality կամ plugin ինտեգրել։ Կարող եմ կատարելագործել ձեր կայքը՝ ավելացնելով e-commerce լուծումներ, contact forms և այլ անհրաժեշտ հնարավորություններ։</li>

            <li><b>Անվտանգության սպասարկում՝ </b>
            Անվտանգությունը առաջնահերթություն է։ Իրականացնում եմ անհրաժեշտ միջոցառումներ՝ կայքը հնարավոր սպառնալիքներից պաշտպանելու համար։</li>

            <li><b>Պարբերական backup-ներ՝ </b>
            Պարբերաբար պահուստավորում եմ կայքի տվյալները՝ տվյալների կորուստը կանխելու և անհրաժեշտության դեպքում արագ վերականգնում ապահովելու համար։</li>

            <li><b>Plugin և theme թարմացումներ՝ </b>
            Կառավարում եմ plugin-ների և theme-ների բոլոր թարմացումները՝ ապահովելով compatibility-ն և օպտիմալ performance-ը։</li>

            <li><b>Performance optimization՝ </b>
            Կատարում եմ պարբերական performance audits և optimizations՝ կայքի արագ և արդյունավետ բեռնումն ապահովելու համար։</li>

            <li><b>Թափանցիկ հաղորդակցություն՝ </b>
            Ամբողջ գործընթացի ընթացքում պահպանում եմ բաց հաղորդակցություն՝ տեղեկացնելով maintenance tasks-ի ընթացքի մասին և արագ արձագանքելով հարցերին։</li>

            <li><b>Ճկուն գնագոյացում՝ </b>
            Իմ ժամային դրույքը $20 է։ Հասանելի եմ շաբաթական վեց օր՝ 10:00-ից 19:00 (GMT+4)։</li>

            <li><b>Ժամանակի արդյունավետ հաշվառում՝ </b>
            Յուրաքանչյուր նախագծի համար ժամանակը ճշգրիտ հաշվարկելու նպատակով օգտագործում եմ <a href='https://app.clockify.me/tracker' {...ext}>Clockify App</a>-ը։ Յուրաքանչյուր հաճախորդի համար ստեղծում եմ առանձին project, որի մանրամասներին դուք նույնպես կարող եք հասանելիություն ունենալ։ Ամսվա վերջում տրամադրում եմ մանրամասն հաշվետվություն։</li>

            <li><b>Հաղորդակցության ուղիներ՝ </b>
            Կարող եք կապվել ինձ հետ Gmail-ով՝ [<a href='mailto:sultanova.anahit92@gmail.com'>sultanova.anahit92@gmail.com</a>] կամ Telegram-ով՝ [<a href='https://t.me/soltonanna' {...ext}>@soltonanna</a>]։</li>
          </ul>
        ),
      },

      {
        title: 'Կայքի օպտիմալացում',
        price: '$15 ժամում',
        desc: 'Մասնագիտանում եմ կայքերի բեռնման արագության և ընդհանուր արդյունավետության բարձրացման մեջ՝ ապահովելով այցելուների համար սահուն աշխատանք։',
        fullDesc: 'Մասնագիտանում եմ կայքերի բեռնման արագության և ընդհանուր արդյունավետության բարձրացման մեջ՝ ապահովելով այցելուների համար սահուն browsing experience և նպաստելով search engine rankings-ի բարելավմանը։',
        more: (
          <ul>
            <li><b>Արագություն և արդյունավետություն՝ </b>
            Օպտիմալացնում եմ կայքերը՝ բեռնման արագությունն ու ընդհանուր արդյունավետությունը բարձրացնելու համար։</li>

            <li><b>Բարելավված performance՝ </b>
            Կայքի տարբեր տարրերի օպտիմալացման միջոցով բարելավում եմ դրա performance-ը՝ ժամանակակից օգտատերերի պահանջներին համապատասխան։</li>

            <li><b>Search engine rankings՝ </b>
            Ավելի արագ կայքը ոչ միայն բարելավում է օգտատիրոջ փորձը, այլև կարող է դրականորեն ազդել search engine rankings-ի վրա։ Օպտիմալացնում եմ կայքը՝ դրա տեսանելիությունն ու հասանելիությունը բարելավելու համար։</li>

            <li><b>Բովանդակության օպտիմալացում՝ </b>
            Բովանդակությունը կարևոր դեր ունի website optimization-ում։ Օպտիմալացնում եմ բովանդակությունը և՛ օգտատերերի, և՛ search engines-ի համար։</li>

            <li><b>Պատկերների սեղմում՝ </b>
            Մեծ չափի պատկերները կարող են դանդաղեցնել կայքը։ Օգտագործում եմ image compression techniques՝ ֆայլերի չափը նվազեցնելու համար՝ հնարավորինս պահպանելով որակը։</li>

            <li><b>Caching strategies՝ </b>
            Caching strategies-ի միջոցով բարելավում եմ կայքի արագությունը՝ հաճախ օգտագործվող տվյալները պահելով cache-ում, նվազեցնելով server load-ը և բարելավելով response times-ը։</li>

            <li><b>Mobile optimization՝ </b>
            Mobile սարքերի աճող օգտագործման պայմաններում օպտիմալացնում եմ կայքը mobile responsiveness-ի համար՝ բոլոր սարքերում ապահովելով հարմար և կայուն փորձ։</li>

            <li><b>Թափանցիկ հաշվետվություն՝ </b>
            Օպտիմալացման ամբողջ գործընթացի ընթացքում տրամադրում եմ թափանցիկ հաշվետվություն՝ ներկայացնելով կատարված աշխատանքը և ստացված արդյունքները։</li>

            <li><b>Ճկուն գնագոյացում՝ </b>
            Իմ ժամային դրույքը $15 է։ Հասանելի եմ շաբաթական վեց օր՝ 10:00-ից 19:00 (GMT+4)։</li>

            <li><b>Ժամանակի արդյունավետ հաշվառում՝ </b>
            Յուրաքանչյուր նախագծի համար օգտագործում եմ <a href='https://app.clockify.me/tracker' {...ext}>Clockify App</a>-ը՝ ժամանակը ճշգրիտ հաշվարկելու համար։ Յուրաքանչյուր հաճախորդի համար ստեղծում եմ առանձին project և ամսվա վերջում տրամադրում մանրամասն հաշվետվություն։</li>

            <li><b>Հաղորդակցության ուղիներ՝ </b>
            Կարող եք կապվել ինձ հետ Gmail-ով՝ [<a href='mailto:sultanova.anahit92@gmail.com'>sultanova.anahit92@gmail.com</a>] կամ Telegram-ով՝ [<a href='https://t.me/soltonanna' {...ext}>@soltonanna</a>]։</li>
          </ul>
        ),
      },

      {
        title: 'AI-ով բովանդակության ստեղծում',
        price: '$25 ժամում',
        desc: 'Օգտագործելով ժամանակակից AI տեխնոլոգիաներ՝ արագացնում եմ բովանդակության ստեղծման գործընթացը՝ գեներացնելով գրավիչ տեքստ և գտնելով բարձրորակ պատկերներ։',
        fullDesc: 'Օգտագործելով ժամանակակից AI տեխնոլոգիաներ՝ արագացնում եմ բովանդակության ստեղծման գործընթացը՝ ստեղծելով գրավիչ տեքստ և գտնելով բարձրորակ պատկերներ, որպեսզի ձեր կայքն առանձնանա գրավիչ վիզուալներով և հետաքրքիր բովանդակությամբ։',
        more: (
          <ul>
            <li><b>Ժամանակակից AI տեխնոլոգիաներ՝ </b>
            Օգտագործելով առաջադեմ AI տեխնոլոգիաներ՝ արդյունավետացնում եմ բովանդակության ստեղծման գործընթացը՝ ստեղծելով գրավիչ տեքստ և վիզուալ նյութեր։</li>

            <li><b>Գրավիչ տեքստ՝ </b>
            AI-ի օգնությամբ ստեղծված copy-ի միջոցով օգնում եմ գրավել ձեր լսարանի ուշադրությունը։ Բլոգային հոդվածներից մինչև product descriptions՝ ստեղծում եմ բովանդակություն, որը համապատասխանում է ձեր լսարանին։</li>

            <li><b>Հետևողական tone և style՝ </b>
            AI-ով ստեղծվող տեքստերի միջոցով հնարավոր է պահպանել միասնական tone և style ամբողջ բովանդակության մեջ՝ ստեղծելով cohesive experience և ամրապնդելով brand identity-ն։</li>

            <li><b>Շարունակական կատարելագործում՝ </b>
            Հետևում եմ AI տեխնոլոգիաների վերջին զարգացումներին և շարունակաբար կատարելագործում եմ աշխատանքային գործընթացները՝ ավելի լավ արդյունքներ ապահովելու համար։</li>

            <li><b>Ճկուն գնագոյացում՝ </b>
            Իմ ժամային դրույքը $25 է։ Հասանելի եմ շաբաթական վեց օր՝ 10:00-ից 19:00 (GMT+4)։</li>

            <li><b>Ժամանակի արդյունավետ հաշվառում՝ </b>
            Յուրաքանչյուր նախագծի համար օգտագործում եմ <a href='https://app.clockify.me/tracker' {...ext}>Clockify App</a>-ը՝ ժամանակը ճշգրիտ հաշվարկելու համար։ Յուրաքանչյուր հաճախորդի համար ստեղծում եմ առանձին project և ամսվա վերջում տրամադրում մանրամասն հաշվետվություն։</li>

            <li><b>Հաղորդակցության ուղիներ՝ </b>
            Կարող եք կապվել ինձ հետ Gmail-ով՝ [<a href='mailto:sultanova.anahit92@gmail.com'>sultanova.anahit92@gmail.com</a>] կամ Telegram-ով՝ [<a href='https://t.me/soltonanna' {...ext}>@soltonanna</a>]։</li>
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