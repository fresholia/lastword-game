import { GAME_CONFIG } from 'settings/constants/settingsConstants';
import useDifficulty from './useDifficulty';

function useGameConfig() {
  const { difficulty } = useDifficulty();

  return GAME_CONFIG[difficulty];
}

export default useGameConfig;
