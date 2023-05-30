console.log("---> Sum from range of X to Y <---");
/* 
Part 1: 
- napisz funkcję o nazwie range
- ma mieć 2 argumenty -> start i end włącznie
- napisz funkcję sum, która pobiera tablicę liczb i zwraca ich sumę 

Part 2: 
- zmodyfikuj funckję range tak, aby przyjmowala opcjonalnie 3ci argument -> rozmiar kroku
- jezeli nie zostanie podany, niech wartosc bedzie zwiekszana o 1 
- funkcja powinna rowniez ogarniac wartosci ujemne 
  */
console.log(range(1, 10), sum(range(1, 10)));
console.log(range(10, 20), sum(range(10, 20)));
console.log(range(1, 10, 2), sum(range(1, 10, 2)));
console.log(range(10, 1, -2), sum(range(10, 1, -2)));

function range(start, end, step = 1) {
  let numbers = [];
  if (step > 0 && start < end) {
    for (let i = start; i <= end; i += step) {
      numbers.push(i);
    }
  } else if (step < 0 && start > end) {
    for (let i = start; i >= end; i += step) {
      numbers.push(i);
    }
  }

  return numbers;
}

function sum(table) {
  let result = 0;
  for (number of table) {
    result += number;
  }

  return result;
}
