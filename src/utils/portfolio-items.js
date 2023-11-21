import { 
    GuessNumberGame, 
    PigGame, 
    MinesGame,
    NaturesSpa,
    AnimatedBlocks,
    BlogPosts,
    Volterman,
    Maldek,
    Hven,
    VStepanyan,
    Jtrain,
    Byrobynblair,
    VenutiMyoka,
    TKT,
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
    // Games
    {
        id: `p_1`,
        category: 'games',
        name: 'Pig Game',
        codeUrl: `${codeUrl}pig_game`,
        demoUrl: `${demoUrl}pig_game/`,
        imgUrl: PigGame
    },
    {
        id: `p_2`,
        category: 'games',
        name: 'Mines',
        codeUrl: `${codeUrl}mines_game`,
        demoUrl: `${demoUrl}mines_game/`,
        imgUrl: MinesGame
    },
    // Templates
    {
        id: `p_3`,
        category: 'temp',
        name: 'Natures',
        codeUrl: `${codeUrl}natures`,
        demoUrl: `${demoUrl}natures/`,
        imgUrl: NaturesSpa
    },
    //Animations
    {
        id: `p_4`,
        category: 'anime',
        name: 'Animated blocks',
        codeUrl: `${codeUrl}animated-blocks`,
        demoUrl: `${demoUrl}animated-blocks/`,
        imgUrl: AnimatedBlocks
    },
    // Wordpress Sites
    {
        id: `p_5`,
        category: 'wps',
        name: 'Vahagn Stepanyan',
        demoUrl: `https://vahagnstepanyan.com/`,
        imgUrl: VStepanyan
    },
    {
        id: `p_6`,
        category: 'wps',
        name: 'Jtrain',
        demoUrl: `https://jtrainwellness.com/`,
        imgUrl: Jtrain
    },
    {
        id: `p_7`,
        category: 'wps',
        name: 'Maldek',
        demoUrl: `https://maldeks.org/`,
        imgUrl: Maldek
    },
    {
        id: `p_9`,
        category: 'wps',
        name: 'Byrobynblair',
        demoUrl: `https://byrobynblair.com/`,
        imgUrl: Byrobynblair
    },
    {
        id:`p_10`,
        category: 'wps',
        name: 'VenutiMyoka',
        demoUrl: `https://venutimayoka.com/`,
        imgUrl: VenutiMyoka
    },
    {
        id:`p_11`,
        category: 'wps',
        name: 'Trager, Kevy & Trager Group',
        demoUrl: `http://tktcpa.com/`,
        imgUrl: TKT
    },
    {
        id: `p_12`,
        category: 'wps',
        name: 'ArmeniansUnified',
        demoUrl: `https://armeniansunified.org/`,
        imgUrl: ArmeniansUnified
    },
    // React Apps
    {
        id: `p_15`,
        category: 'apps',
        name: 'Recipes App',
        codeUrl: `${codeUrl}recipes`,
        demoUrl: `${demoUrl}recipes/`,
        imgUrl: Recipes
    },
    {
        id: `p_14`,
        category: 'apps',
        name: 'Beer Store',
        codeUrl: `${codeUrl}beer-store-app`,
        demoUrl: `${demoUrl}beer-store-app/`,
        imgUrl: BeerStore
    },
    {
        id: `p_16`,
        category: 'apps',
        name: 'Food Order App',
        codeUrl: `${codeUrl}food-order`,
        demoUrl: `${demoUrl}food-order/`,
        imgUrl: FoodOrder
    },
    {
        id: `p_13`,
        category: 'apps',
        name: 'Weather',
        codeUrl: `${codeUrl}weather`,
        demoUrl: `${demoUrl}weather/`,
        imgUrl: Weather
    },
];

export const portfolioItemsOld = [
    {
        id: `p_1`,
        category: 'games',
        name: 'Guess number',
        codeUrl: `${codeUrl}guess-my-number`,
        demoUrl: `${demoUrl}guess-my-number/`,
        imgUrl: GuessNumberGame
    },
    {
        id: `p_2`,
        category: 'games',
        name: 'Pig Game',
        codeUrl: `${codeUrl}pig_game`,
        demoUrl: `${demoUrl}pig_game/`,
        imgUrl: PigGame
    },
    {
        id: `p_3`,
        category: 'games',
        name: 'Mines',
        codeUrl: `${codeUrl}mines_game`,
        demoUrl: `${demoUrl}mines_game/`,
        imgUrl: MinesGame
    },
    {
        id: `p_4`,
        category: 'temp',
        name: 'Natures',
        codeUrl: `${codeUrl}natures`,
        demoUrl: `${demoUrl}natures/`,
        imgUrl: NaturesSpa
    },
    {
        id: `p_5`,
        category: 'anime',
        name: 'Animated blocks',
        codeUrl: `${codeUrl}animated-blocks`,
        demoUrl: `${demoUrl}animated-blocks/`,
        imgUrl: AnimatedBlocks
    },
    {
        id: `p_7`,
        category: 'apps',
        name: 'Blog Posts',
        codeUrl: `${codeUrl}blog-posts`,
        demoUrl: `${demoUrl}blog-posts/`,
        imgUrl: BlogPosts
    },
    {
        id: `p_8`,
        category: 'wps',
        name: 'Volterman',
        demoUrl: `https://volterman.com/`,
        imgUrl: Volterman
    },
    {
        id: `p_9`,
        category: 'wps',
        name: 'Maldek',
        demoUrl: `https://maldeks.org/`,
        imgUrl: Maldek
    },
    {
        id: `p_11`,
        category: 'wps',
        name: 'HVEN',
        demoUrl: `http://www.hven.am/`,
        imgUrl: Hven
    },
    {
        id: `p_12`,
        category: 'apps',
        name: 'Weather',
        codeUrl: `${codeUrl}weather`,
        demoUrl: `${demoUrl}weather/`,
        imgUrl: Weather
    },
    {
        id: `p_13`,
        category: 'apps',
        name: 'Beer Store',
        codeUrl: `${codeUrl}beer-store-app`,
        demoUrl: `${demoUrl}beer-store-app/`,
        imgUrl: BeerStore
    },
    {
        id: `p_14`,
        category: 'apps',
        name: 'Recipes App',
        codeUrl: `${codeUrl}recipes`,
        demoUrl: `${demoUrl}recipes/`,
        imgUrl: Recipes
    },
    {
        id: `p_15`,
        category: 'apps',
        name: 'Food Order App',
        codeUrl: `${codeUrl}food-order`,
        demoUrl: `${demoUrl}food-order/`,
        imgUrl: FoodOrder
    },
    {
        id: `p_16`,
        category: 'apps',
        name: 'Add to Cart - Redux',
        codeUrl: `${codeUrl}add-to-cart-redux`,
        demoUrl: `${demoUrl}add-to-cart-redux/`,
        imgUrl: AddCartRedux
    },
    {
        id: `p_17`,
        category: 'wps',
        name: 'Vahagn Stepanyan',
        demoUrl: `https://vahagnstepanyan.com/`,
        imgUrl: VStepanyan
    },
    {
        id: `p_18`,
        category: 'wps',
        name: 'Jtrain',
        demoUrl: `https://jtrainwellness.com/`,
        imgUrl: Jtrain
    },
    {
        id: `p_19`,
        category: 'wps',
        name: 'Byrobynblair',
        demoUrl: `https://byrobynblair.com/`,
        imgUrl: Byrobynblair
    }
    ,
    {
        id: `p_20`,
        category: 'wps',
        name: 'ArmeniansUnified',
        demoUrl: `https://armeniansunified.org/`,
        imgUrl: ArmeniansUnified
    }
]