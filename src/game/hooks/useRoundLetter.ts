import useGameHistory from './useGameHistory';

function useRoundLetter() {
  const { history } = useGameHistory();
  const lastWord = history[0].word;

  return {
    letter: lastWord.slice(-1).toLocaleUpperCase('tr-TR'),
  };
}

export default useRoundLetter;
