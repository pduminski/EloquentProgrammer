console.log("---> Minimum <---");

/* napisz funkcjęo nazwie min przyjmującą dwa argumenty i zwracającą najmniejszy z nich*/

console.log(minimum(7, 3));
console.log(minimum(13, 22));
console.log(minimum(5, 5));

function minimum(arg1: number, arg2: number): number {
  return arg1 < arg2 ? arg1 : arg2;
}
