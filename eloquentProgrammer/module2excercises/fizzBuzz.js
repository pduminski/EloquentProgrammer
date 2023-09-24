console.log("---> FizzBuzz <---");

/* Napisz program ktory przy pomocy console.log wypisze:
- Wszystkie liczby od 1 do 100 z 2 wyjatkami
- zamiast liczb podzielnych przez 3 wydrukuj slowo "Fizz"
- zamiast liczb podzielnych przez 5 wydrukuj slowo "Buzz"
- zamiast liczb podzielnych zarowno przez 3 i 5 FizzBuzz*

Program nadal ma drukowac podzielne tylko przez 3 i 5 jako Fizz i Buzz*/

let i = 1;

while (i <= 100) {
  console.log(resultForFizzBuzz(i));
  i++;
}

function resultForFizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
  else if (number % 3 === 0) return "Fizz";
  else if (number % 5 === 0) return "Buzz";
  else return number;
}
