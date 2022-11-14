import { getRandomName } from 'game/utils/gameUtils';
import { initialAppState } from './AppContext.constants';
import { AppStateReducerAction, GAME_STATUS, PLAYER } from './AppContext.types';

export function appStateReducer(state: typeof initialAppState, action: AppStateReducerAction) {
  let newState = state;

  switch (action.type) {
    case 'SET_SETTINGS_VALUE':
      newState = {
        ...state,
        settings: {
          ...state.settings,
          [action.payload.key]: action.payload.value,
        },
      };
      break;
    case 'SET_GAME_STATUS':
      newState = {
        ...state,
        game: {
          ...state.game,
          status: action.payload,
        },
      };
      break;
    case 'ADD_HISTORY_ITEM':
      newState = {
        ...state,
        game: {
          ...state.game,
          history: [action.payload, ...state.game.history],
        },
      };
      break;
    case 'SET_CURRENT_PLAYER':
      newState = {
        ...state,
        game: {
          ...state.game,
          currentPlayer: action.payload,
        },
      };
      break;
    case 'SET_GAME_RESULT':
      newState = {
        ...state,
        game: {
          ...state.game,
          result: action.payload,
        },
      };
      break;
    case 'RESET_GAME_HISTORY':
      newState = {
        ...state,
        game: {
          ...state.game,
          history: [],
        },
      };
      break;
    case 'RESET_GAME_STATE':
      newState = {
        ...state,
        game: {
          ...initialAppState.game,
          status: GAME_STATUS.PLAYING,
          history: [
            {
              word: getRandomName(),
              player: PLAYER.COMPUTER,
            },
          ],
        },
      };
      break;
    default:
      break;
  }

  return newState;
}
