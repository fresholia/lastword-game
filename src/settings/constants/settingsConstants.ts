import { GAME_DIFFICULTIES } from 'core/app/context/AppContext.types';

const GAME_CONFIG = {
  [GAME_DIFFICULTIES.EASY]: {
    timeLimit: 12,
    computerWinRate: 0.3,
  },
  [GAME_DIFFICULTIES.MEDIUM]: {
    timeLimit: 8,
    computerWinRate: 0.7,
  },
  [GAME_DIFFICULTIES.HARD]: {
    timeLimit: 4,
    computerWinRate: 0.9,
  },
};

export { GAME_CONFIG };
