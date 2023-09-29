/* 
    Exercise 5: Temperature Conversion
    Create a TypeScript function that converts temperatures between Celsius and Fahrenheit. 
    Implement two functions, one for Celsius to Fahrenheit and another for Fahrenheit to Celsius.
*/

function calculateCelsiusToFarenheit(temperatureInCelcius: number): number {
  return temperatureInCelcius * 1.8 + 32;
}

function calculateFarenheitToCelsius(temperatureInFarenheit: number): number {
  return (temperatureInFarenheit - 32) / 1.8;
}

console.log(calculateCelsiusToFarenheit(22));
console.log(calculateFarenheitToCelsius(72));
