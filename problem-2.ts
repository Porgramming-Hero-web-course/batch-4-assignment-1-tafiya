const removeDuplicates = (numberArray: number[]) => {
  return numberArray.filter(
    (number, index) => numberArray.indexOf(number) === index
  );
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
