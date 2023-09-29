/*
    Write a TypeScript function that takes an array of numbers as input and returns the sum of all the numbers. Use the reduce method.
*/

let myList: number[] = [1, 2, 3, 4, 5];

function sumOfTheNumbersFromList(list: number[]): number {
  return list.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}

console.log(sumOfTheNumbersFromList(myList));
