import { 
    GuessNumberGame, 
    PigGame, 
    MinesGame,
    NaturesSpa,
    AnimatedBlocks,
    CountDownTimer,
    BlogPosts
} from './media-files.js';

const codeUrl = 'https://github.com/soltonanna/';
const demoUrl = 'https://soltonanna.github.io/';

// categories: all, temp, games, apps, anime, modules
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
    {
        id: `p_6`,
        category: 'modules',
        name: 'CountDown Timer',
        desc: 'Simple CountDown Timer example.',
        codeUrl: `${codeUrl}countdown`,
        demoUrl: `${demoUrl}countdown/`,
        imgUrl: CountDownTimer
    },
    {
        id: `p_7`,
        category: 'apps',
        name: 'Blog Posts',
        desc: 'Blog Posts is a simple app example, using public API for show some posts with pagination. Also you can add the new posts, delete them, sort or search.',
        codeUrl: `${codeUrl}blog-posts`,
        demoUrl: `${demoUrl}blog-posts/`,
        imgUrl: BlogPosts
    }
]