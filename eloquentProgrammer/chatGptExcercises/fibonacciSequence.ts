/* 
    Exercise 4: Fibonacci Sequence
    Write a TypeScript function that generates the Fibonacci sequence up to a specified number of terms. 
    The function should return an array with the Fibonacci numbers.
*/

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

function fibonacciSequenceIteration(amountOfNumbers: number): number[] {
  let fibonacciSequence: number[] = [];

  for (let i = 0; i < amountOfNumbers; i++) {
    if (i === 0) {
      fibonacciSequence.push(0);
    } else if (i === 1) {
      fibonacciSequence.push(1);
    } else {
      const nextFibonacciNumber =
        fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
      fibonacciSequence.push(nextFibonacciNumber);
    }
  }

  return fibonacciSequence;
}

function fibonacciSequenceRecursion(n: number): number {
  if (n <= 0) return 0; // Base case: Fibonacci(0) is 0
  if (n === 1) return 1; // Base case: Fibonacci(1) is 1

  // Recursive case: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
  return fibonacciSequenceRecursion(n - 1) + fibonacciSequenceRecursion(n - 2);
}

console.log(fibonacciSequenceIteration(6));
console.log(fibonacciSequenceIteration(1));
console.log(fibonacciSequenceIteration(10));
console.log("---------------------------------");
console.log(fibonacciSequenceRecursion(0));
console.log(fibonacciSequenceRecursion(1));
console.log(fibonacciSequenceRecursion(2));
console.log(fibonacciSequenceRecursion(3));
console.log(fibonacciSequenceRecursion(4));
console.log(fibonacciSequenceRecursion(5));
console.log(fibonacciSequenceRecursion(6));
