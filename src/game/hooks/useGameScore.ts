import useGameHistory from './useGameHistory';

function useGameScore() {
  const { history } = useGameHistory();

  const isEven = history.length % 2 === 0;

  // TODO: Add logic documentation
  return {
    user: isEven ? history.length / 2 : (history.length - 1) / 2,
    computer: (isEven ? history.length / 2 : (history.length + 1) / 2) - 1,
  };
}

export default useGameScore;
