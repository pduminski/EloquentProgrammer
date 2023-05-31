console.log("---> Examples from module <---");

// mozemy przekazac czynnosc jako wartosc funkcyjna
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log);

// stwórz funkcję od razu jako argument
let labels = [];
repeat(5, (i) => {
  labels.push(`Moduł ${i + 1}`);
});
console.log(labels);

//funkcja tworząca nowe funkcje
function greaterThan(n) {
  return (m) => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// funkcje zmieniające inne funkcje
function noisy(f) {
  return (...args) => {
    console.log("wywołanie z", args);
    let result = f(...args);
    console.log("wywołano z", args, ", zwraca", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);

// mozna tez napisac funkcje implementujace nowe typy kontroli przeplywu
function unless(test, then) {
  if (!test) then();
}

repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, "to liczba parzysta");
  });
});

// forEach realizuje w formie funkcji wyzszerzo rzedu cos w rodzaju petli for-of
["A", "B"].forEach((l) => console.log(l));

// Function reduce
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
