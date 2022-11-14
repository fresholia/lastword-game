import { getRandomName } from 'game/utils/gameUtils';
import { GAME_DIFFICULTIES, GAME_STATUS, REASONS, WordHistory, PLAYER } from './AppContext.types';

export const initialAppState = {
  settings: {
    username: '',
    difficulty: 'medium' as GAME_DIFFICULTIES,
    sounds: true,
  },
  game: {
    status: 'idle' as GAME_STATUS,
    history: [
      {
        word: getRandomName(),
        player: PLAYER.COMPUTER,
      },
    ] as WordHistory,
    currentPlayer: PLAYER.USER,
    result: {
      reason: '' as REASONS | '',
      lastWord: '',
    },
  },
};
