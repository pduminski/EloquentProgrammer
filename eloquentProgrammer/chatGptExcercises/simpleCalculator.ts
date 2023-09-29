/*
  Create a TypeScript function that takes two numbers and an operator ('+', '-', '*', '/') as input
  and returns the result of the operation.
  Ensure proper error handling for invalid inputs (e.g., division by zero). 
*/

function calculator(
  number1: number,
  number2: number,
  operator: string
): number | string {
  if (operator === "+") return number1 + number2;
  if (operator === "-") return number1 - number2;
  if (operator === "*") return number1 * number2;
  if (operator === "/" && number2 !== 0) return number1 / number2;
  else return "Cannot divide by 0";
}

function calculatorRefactor(
  number1: number,
  number2: number,
  operator: string
): number | string {
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      if (number2 !== 0) {
        return number1 / number2;
      } else {
        return "Cannot divide by 0";
      }
    default:
      return "Invalid Operator";
  }
}

// tests
console.log(calculatorRefactor(5, 5, "+"));
console.log(calculatorRefactor(11, 5, "-"));
console.log(calculatorRefactor(3, 2, "*"));
console.log(calculatorRefactor(10, 5, "/"));
console.log(calculatorRefactor(10, 0, "/"));
console.log(calculatorRefactor(10, 0, "%"));
