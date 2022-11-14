function shuffleArray<T extends unknown>(array: T[]): T[] {
  const shuffleArray = array.slice();

  // eslint-disable-next-line no-plusplus
  for (let i = shuffleArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
  }

  return shuffleArray;
}

export { shuffleArray };
