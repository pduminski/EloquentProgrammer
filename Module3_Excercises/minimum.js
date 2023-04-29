console.log("---> Minimum <---");

/* napisz funkcjęo nazwie min przyjmującą dwa argumenty i zwracającą najmniejszy z nich*/

let theLowest = min(11, 10);
console.log(theLowest);

function min(number1, number2) {
  return number1 < number2 ? number1 : number2;
}
