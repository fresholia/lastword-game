import { initialAppState } from './AppContext.constants';

/* eslint-disable no-unused-vars */
export enum GAME_DIFFICULTIES {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}
export enum GAME_STATUS {
  IDLE = 'idle',
  PLAYING = 'playing',
  WON = 'won',
  LOST = 'lost',
}
export enum PLAYER {
  USER = 'user',
  COMPUTER = 'computer',
}
export enum REASONS {
  NOT_IN_DICTIONARY = 'not_in_dictionary',
  TIMEOUT = 'timeout',
  WRONG_LETTER = 'wrong_letter',
  USED_WORD = 'used_word',
  COMPUTER_TIMEOUT = 'computer_timeout',
}
/* eslint-enable no-unused-vars */

export type WordHistoryItem = {
  word: string;
  player: PLAYER;
};

export type WordHistory = WordHistoryItem[];

export type AppStateReducerAction =
  | {
      type: 'SET_SETTINGS_VALUE';
      payload: {
        key: keyof typeof initialAppState.settings;
        value: typeof initialAppState.settings[keyof typeof initialAppState.settings];
      };
    }
  | {
      type: 'SET_GAME_STATUS';
      payload: GAME_STATUS;
    }
  | {
      type: 'SET_CURRENT_PLAYER';
      payload: PLAYER;
    }
  | {
      type: 'ADD_HISTORY_ITEM';
      payload: WordHistoryItem;
    }
  | {
      type: 'RESET_GAME_HISTORY';
    }
  | {
      type: 'SET_GAME_RESULT';
      payload: {
        reason: REASONS;
        lastWord: string;
      };
    }
  | {
      type: 'RESET_GAME_STATE';
    };
