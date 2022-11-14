import { REASONS } from 'core/app/context/AppContext.types';

const ResultMessages: Record<REASONS, string> = {
  [REASONS.NOT_IN_DICTIONARY]: 'You have to use a word that is in the dictionary.',
  [REASONS.TIMEOUT]: 'You have run out of time.',
  [REASONS.WRONG_LETTER]: 'You have to use the last letter of the previous word.',
  [REASONS.USED_WORD]: 'You have to use a word that has not been used before.',
  [REASONS.COMPUTER_TIMEOUT]: 'The computer could not find a word.',
} as const;

export { ResultMessages };
