import { useGameState } from 'core/app/context/AppContext.utils';
import { ResultMessages } from 'result/constants/resultConstants';

function useGameResult() {
  const { result } = useGameState();
  const reason = result.reason && ResultMessages[result.reason];

  return {
    ...result,
    reason,
  };
}

export default useGameResult;
