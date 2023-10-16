import { 
    GuessNumberGame, 
    PigGame, 
    MinesGame,
    NaturesSpa,
    AnimatedBlocks,
    //CountDownTimer,
    BlogPosts,
    Volterman,
    Maldek,
    Hven,
    VStepanyan,
    Jtrain,
    Byrobynblair,
    ArmeniansUnified,
    Weather,
    BeerStore,
    Recipes,
    FoodOrder,
    AddCartRedux,
} from './media-files.js';

const codeUrl = 'https://github.com/soltonanna/';
const demoUrl = 'https://soltonanna.github.io/';

// categories: all, temp, games, apps, anime, modules, wps
export const portfolioItems = [
    {
        id: `p_1`,
        category: 'games',
        name: 'Guess number',
        desc: 'The player must guess the secret number between 1 and 20!',
        codeUrl: `${codeUrl}guess-my-number`,
        demoUrl: `${demoUrl}guess-my-number/`,
        imgUrl: GuessNumberGame
    },
    {
        id: `p_2`,
        category: 'games',
        name: 'Pig Game',
        desc: 'The 2 players must roll dice! The first player who rich the 50 point in game will Win!',
        codeUrl: `${codeUrl}pig_game`,
        demoUrl: `${demoUrl}pig_game/`,
        imgUrl: PigGame
    },
    {
        id: `p_3`,
        category: 'games',
        name: 'Mines',
        desc: 'The aim of Mines is to clear the minefield without detonating any of the mines!',
        codeUrl: `${codeUrl}mines_game`,
        demoUrl: `${demoUrl}mines_game/`,
        imgUrl: MinesGame
    },
    {
        id: `p_4`,
        category: 'temp',
        name: 'Natures',
        desc: '',
        codeUrl: `${codeUrl}natures`,
        demoUrl: `${demoUrl}natures/`,
        imgUrl: NaturesSpa
    },
    {
        id: `p_5`,
        category: 'anime',
        name: 'Animated blocks',
        desc: 'Here you can find some interesting animated blocks, which can use on your web sites.',
        codeUrl: `${codeUrl}animated-blocks`,
        demoUrl: `${demoUrl}animated-blocks/`,
        imgUrl: AnimatedBlocks
    },
    // {
    //     id: `p_6`,
    //     category: 'modules',
    //     name: 'CountDown Timer',
    //     desc: 'Simple CountDown Timer example.',
    //     codeUrl: `${codeUrl}countdown`,
    //     demoUrl: `${demoUrl}countdown/`,
    //     imgUrl: CountDownTimer
    // },
    {
        id: `p_7`,
        category: 'apps',
        name: 'Blog Posts',
        desc: '<p>Blog Posts is a simple app example, using public API for show some posts with pagination. </p><p>Also you can add the new posts, delete them, sort or search.</p>',
        codeUrl: `${codeUrl}blog-posts`,
        demoUrl: `${demoUrl}blog-posts/`,
        imgUrl: BlogPosts
    },
    {
        id: `p_8`,
        category: 'wps',
        name: 'Volterman',
        desc: '<div><ul><li>Collaborated with other WordPress developers working on this project</li><li>Updated website as instructed by the client to introduce new features and content.</li><li>Manage a user guide to help clients understand site features and management of the website</li></ul></div>',
        demoUrl: `https://volterman.com/`,
        imgUrl: Volterman
    },
    {
        id: `p_9`,
        category: 'wps',
        name: 'Maldek',
        desc: "<div><ul><li>Built website using WordPress CMS, based on design provided by client.</li><li>Installed required plugins and additional coding to fit final design and functionality requirements under the supervision of a client.</li><li>Added all needed content including images, texts and URLs.</li></ul></div>",
        demoUrl: `https://maldeks.org/`,
        imgUrl: Maldek
    },
    {
        id: `p_11`,
        category: 'wps',
        name: 'HVEN',
        desc: '<div><ul><li>Collaborated with other WordPress developers working on this project</li><li>Updated website as instructed by the client to introduce new features and content.</li><li>Manage a user guide to help clients understand site features and management of the website</li></ul></div>',
        demoUrl: `http://www.hven.am/`,
        imgUrl: Hven
    },
    {
        id: `p_12`,
        category: 'apps',
        name: 'Weather',
        desc: '<p>You can check weather of current location by coordinates, or search some location.</p>',
        codeUrl: `${codeUrl}weather`,
        demoUrl: `${demoUrl}weather/`,
        imgUrl: Weather
    },
    {
        id: `p_13`,
        category: 'apps',
        name: 'Beer Store',
        desc: '<p>This is a web app where people can find out information and buy different kind of beers.</p>',
        codeUrl: `${codeUrl}beer-store-app`,
        demoUrl: `${demoUrl}beer-store-app/`,
        imgUrl: BeerStore
    },
    {
        id: `p_14`,
        category: 'apps',
        name: 'Recipes App',
        desc: '<p>Recipe application with custom recipe uploaded. Here you can search some interesting recipes, bookmark them or add your own ones.</p>',
        codeUrl: `${codeUrl}recipes`,
        demoUrl: `${demoUrl}recipes/`,
        imgUrl: Recipes
    },
    {
        id: `p_15`,
        category: 'apps',
        name: 'Food Order App',
        desc: '<p>"Food Order" is a simple web app, where you can choose and order some meals. </p>',
        codeUrl: `${codeUrl}food-order`,
        demoUrl: `${demoUrl}food-order/`,
        imgUrl: FoodOrder
    },
    {
        id: `p_16`,
        category: 'apps',
        name: 'Add to Cart - Redux',
        desc: "<p>This application is a simple implementation that enables users to add products to a shopping cart. It is built using React and Redux. The application utilizes Firebase's Realtime Database as the backend database for storing and retrieving data.</p>",
        codeUrl: `${codeUrl}add-to-cart-redux`,
        demoUrl: `${demoUrl}add-to-cart-redux/`,
        imgUrl: AddCartRedux
    },
    {
        id: `p_17`,
        category: 'wps',
        name: 'Vahagn Stepanyan',
        desc: "<p>This is the official website of Vahagn Stepanyan, a music producer, arranger, and songwriter.</p>",
        demoUrl: `https://vahagnstepanyan.com/`,
        imgUrl: VStepanyan
    },
    {
        id: `p_18`,
        category: 'wps',
        name: 'Jtrain',
        desc: "<p>J Train Wellness is a unique personal training gym that focuses on overall well-being.</p>",
        demoUrl: `https://jtrainwellness.com/`,
        imgUrl: Jtrain
    },
    {
        id: `p_19`,
        category: 'wps',
        name: 'Byrobynblair',
        desc: "<p>A customizable vessel designed to display your sweetest desires, each piece of art is a cheeky nod to self-control, how and when we indulge, and the idea that life should be filled with sweet things.</p>",
        demoUrl: `https://byrobynblair.com/`,
        imgUrl: Byrobynblair
    }
    ,
    {
        id: `p_20`,
        category: 'wps',
        name: 'ArmeniansUnified',
        desc: "<p>A non-profit that works on improving the lives in Armenia through health, vocational training, and advancing the companies to improve the economy</p>",
        demoUrl: `https://armeniansunified.org/`,
        imgUrl: ArmeniansUnified
    }
]