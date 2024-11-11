function sumArray(numbers: number[]) {
  let sum: number = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
console.log(sumArray([2, 5, 6]));
