console.log("---> Recursion <---");

/* 
- Zero jest parzyste 
- Jedynka jest nieparzysta 
- dla każdej innej liczby N, jej parzystośc jaest taka sama jak dla N - 2

Zdefiniuj rekurenbcyjną funkcję o nazwie isElven implementującą ten opis.
Funckja ta powinna przyjmowac jeden parametr (dodatnią liczbę całkowitą) i zwracać wartość logiczną.
Przetestuj ją na liczbach 50 i 75 . Sprawdz, jak działa na liczbie -1. Wiesz dlaczego tak? Umiesz to naprawić? 
*/

// Testowanie
console.log("0:", isEven(0));
console.log("1:", isEven(1));
console.log("-1:", isEven(-1));
console.log("-4:", isEven(-4));
console.log("50:", isEven(50));
console.log("75:", isEven(75));

function isEven(n) {
  let absoluteValue = Math.abs(n);

  // Base case: 0 is even
  if (absoluteValue === 0) {
    return true;
  }

  // Base case: 1 is odd
  if (absoluteValue === 1) {
    return false;
  }

  // Recursive case: we check isEven for (N - 2)
  return isEven(absoluteValue - 2);
}
