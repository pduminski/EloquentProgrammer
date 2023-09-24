console.log("---> Recursion <---");

/* 
- Zero jest parzyste 
- Jedynka jest nieparzysta 
- dla każdej innej liczby N, jej parzystośc jaest taka sama jak dla N - 2

Zdefiniuj rekurenbcyjną funkcję o nazwie isElven implementującą ten opis.
Funckja ta powinna przyjmowac jeden parametr (dodatnią liczbę całkowitą) i zwracać wartość logiczną.
Przetestuj ją na liczbach 50 i 75 . Sprawdz, jak działa na liczbie -1. Wiesz dlaczego tak? Umiesz to naprawić? 
*/

// !Actual Excercise
function isEven(n: number): boolean {
  let absoluteValue: number = Math.abs(n);

  if (absoluteValue === 0) return true;
  if (absoluteValue === 1) return false;

  return isEven(absoluteValue - 2);
}

console.log("0:", isEven(0));
console.log("1:", isEven(1));
console.log("-1:", isEven(-1));
console.log("-4:", isEven(-4));
console.log("50:", isEven(50));
console.log("75:", isEven(75));

// !Great example from Chat GPT
function factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(10));
