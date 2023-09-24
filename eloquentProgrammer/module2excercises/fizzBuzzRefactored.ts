console.log("---> FizzBuzz <---");

/* Napisz program ktory przy pomocy console.log wypisze:
- Wszystkie liczby od 1 do 100 z 2 wyjatkami
- zamiast liczb podzielnych przez 3 wydrukuj slowo "Fizz"
- zamiast liczb podzielnych przez 5 wydrukuj slowo "Buzz"
- zamiast liczb podzielnych zarowno przez 3 i 5 FizzBuzz*

Program nadal ma drukowac podzielne tylko przez 3 i 5 jako Fizz i Buzz*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  if (i % 3 === 0) console.log("Fizz");
  if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
