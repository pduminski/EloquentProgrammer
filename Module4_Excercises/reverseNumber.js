console.log("---> Reverse a number <---");

/* 
- tablice maja metode reverse ktora odwraca kolejnosc znajdujacej sie w niej elementow 
- napisz funkcjie o nazwie reverseArray
    - pobierz tablice jako argument
    - zwraca nowa tablice z tymi samymi elementami tylko w odwrotnej kolejnosci
- napisz funkcje o nazwie reverseArrayInPlace
    - niech zrobi to samo co metoda Reverse 
    - niech modyfikuje tablice przekazana jako argument
}
*/

let numbers = [1, 2, 3, 4, 5];
console.log("Original Array: ", numbers);
console.log("New array:  ", reverse(numbers));
reverseArrayInPlace(numbers);
console.log("Modified array: ", numbers);

function reverse(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[array.length - 1 - i]);
  }

  return newArray;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
}
