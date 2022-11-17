import { 
    GuessNumberGame, 
    PigGame, 
    MinesGame 
} from './media-files.js';

const codeUrl = 'https://github.com/soltonanna/';
const demoUrl = 'https://soltonanna.github.io/';

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
    }
]