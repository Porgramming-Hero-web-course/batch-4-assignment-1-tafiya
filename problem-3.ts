const countWordOccurrences = (sentence: string, word: string): number => {
  let arrayWords: string[] = sentence.split(" ");
  let i: number;
  let count: number = 0;

  for (i = 0; i < arrayWords.length; i++) {
    if (arrayWords[i].toLowerCase() === word.toLowerCase()) {
      count++;
    }
  }
  return count;
};
console.log(countWordOccurrences("I love TypeScript", "typescript"));
