import { REASONS, WordHistory } from 'core/app/context/AppContext.types';
import { shuffleArray } from 'core/utils/array/arrayUtils';
import names from 'names.json';

type CheckAnswerValidityProps = {
  isValid: boolean;
  reason?: REASONS;
};

function getRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);

  return names[randomIndex];
}

function checkAnswerValidity(name: string, history: WordHistory): CheckAnswerValidityProps {
  const hasNameAvailable = names.includes(name);

  const { word: lastWord } = history[0];
  const lastLetter = lastWord.toLocaleLowerCase('tr-TR').slice(-1);
  const startsWithLastLetter = name.startsWith(lastLetter);

  const isUsedBefore = history.some((item) => item.word === name);

  if (isUsedBefore) {
    return {
      isValid: false,
      reason: REASONS.USED_WORD,
    };
  }

  if (!startsWithLastLetter) {
    return {
      isValid: false,
      reason: REASONS.WRONG_LETTER,
    };
  }

  if (!hasNameAvailable) {
    // In fact NOT_IN_DICTIONARY(x) and CANT_FIND_WORD(o) are the same
    // but x for the user and o for the computer
    return {
      isValid: false,
      reason: REASONS.NOT_IN_DICTIONARY,
    };
  }

  return {
    isValid: true,
  };
}

function generateComputerAnswer(history: WordHistory, winRate: number) {
  if (Math.random() > winRate) {
    return null;
  }
  const shuffledNames = shuffleArray(names);

  return shuffledNames.find((name) => checkAnswerValidity(name, history).isValid);
}

export { checkAnswerValidity, generateComputerAnswer, getRandomName };
