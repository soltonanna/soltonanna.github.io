import { 
    GuessNumberGame, 
    PigGame, 
    MinesGame,
    NaturesSpa,
    AnimatedBlocks,
    Maldek,
    VStepanyan,
    Jtrain,
    Byrobynblair,
    VenutiMyoka,
    TKT,
    Prosky,
    EllenNielsen,
    ArmeniansUnified,
    AmericanSavings,
    Weather,
    BeerStore,
    Recipes,
    FoodOrder,
} from './media-files.js';

const codeUrl = 'https://github.com/soltonanna/';
const demoUrl = 'https://soltonanna.github.io/';

// categories: all, temp, games, apps, anime, modules, wps
export const portfolioItems = [
    // Games
    {
        id: `p_g1`,
        category: 'games',
        name: 'Pig Game',
        codeUrl: `${codeUrl}pig_game`,
        demoUrl: `${demoUrl}pig_game/`,
        imgUrl: PigGame
    },
    {
        id: `p_g2`,
        category: 'games',
        name: 'Mines',
        codeUrl: `${codeUrl}mines_game`,
        demoUrl: `${demoUrl}mines_game/`,
        imgUrl: MinesGame
    },
    {
        id: `p_g3`,
        category: 'games',
        name: 'Guess number',
        codeUrl: `${codeUrl}guess-my-number`,
        demoUrl: `${demoUrl}guess-my-number/`,
        imgUrl: GuessNumberGame
    },
    // Templates
    {
        id: `p_t1`,
        category: 'temp',
        name: 'Natures',
        codeUrl: `${codeUrl}natures`,
        demoUrl: `${demoUrl}natures/`,
        imgUrl: NaturesSpa
    },
    //Animations
    {
        id: `p_a1`,
        category: 'anime',
        name: 'Animated blocks',
        codeUrl: `${codeUrl}animated-blocks`,
        demoUrl: `${demoUrl}animated-blocks/`,
        imgUrl: AnimatedBlocks
    },
    // Wordpress Sites
    {
        id: `p_w1`,
        category: 'wps',
        name: 'Vahagn Stepanyan',
        demoUrl: `https://vahagnstepanyan.com/`,
        imgUrl: VStepanyan
    },
    {
        id: `p_w2`,
        category: 'wps',
        name: 'Jtrain',
        demoUrl: `https://jtrainwellness.com/`,
        imgUrl: Jtrain
    },
    {
        id: `p_w3`,
        category: 'wps',
        name: 'Maldek',
        demoUrl: `https://maldeks.org/`,
        imgUrl: Maldek
    },
    {
        id: `p_w4`,
        category: 'wps',
        name: 'American Savings Loans',
        demoUrl: `https://americansavingsloans.com/`,
        imgUrl: AmericanSavings
    },
    {
        id: `p_w5`,
        category: 'wps',
        name: 'Byrobynblair',
        demoUrl: `https://byrobynblair.com/`,
        imgUrl: Byrobynblair
    },
    {
        id:`p_w6`,
        category: 'wps',
        name: 'VenutiMyoka',
        demoUrl: `https://venutimayoka.com/`,
        imgUrl: VenutiMyoka
    },
    {
        id:`p_w7`,
        category: 'wps',
        name: 'Trager, Kevy & Trager Group',
        demoUrl: `http://tktcpa.com/`,
        imgUrl: TKT
    },
    {
        id: `p_w8`,
        category: 'wps',
        name: 'ArmeniansUnified',
        demoUrl: `https://armeniansunified.org/`,
        imgUrl: ArmeniansUnified
    },
    {
        id: `p_w9`,
        category: 'wps',
        name: 'Prosky & Rosenfeld CPA',
        demoUrl: `https://prcpallp.com/`,
        imgUrl: Prosky
    },
    {
        id: `p_w10`,
        category: 'wps',
        name: 'Ellen Nielsen',
        demoUrl: `https://en-enterprises.com/`,
        imgUrl: EllenNielsen
    },
    // React Apps
    {
        id: `p_r1`,
        category: 'apps',
        name: 'Recipes App',
        codeUrl: `${codeUrl}recipes`,
        demoUrl: `${demoUrl}recipes/`,
        imgUrl: Recipes
    },
    {
        id: `p_r2`,
        category: 'apps',
        name: 'Beer Store',
        codeUrl: `${codeUrl}beer-store-app`,
        demoUrl: `${demoUrl}beer-store-app/`,
        imgUrl: BeerStore
    },
    {
        id: `p_r3`,
        category: 'apps',
        name: 'Food Order App',
        codeUrl: `${codeUrl}food-order`,
        demoUrl: `${demoUrl}food-order/`,
        imgUrl: FoodOrder
    },
    {
        id: `p_r4`,
        category: 'apps',
        name: 'Weather',
        codeUrl: `${codeUrl}weather`,
        demoUrl: `${demoUrl}weather/`,
        imgUrl: Weather
    },
];