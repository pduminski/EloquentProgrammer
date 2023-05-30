console.log("---> List <---");

/*
- napisz funkcję arrayToList tworzaca liste danych podobna do przedstawionej z argumentu [1, 2, 3]
- napisz funkcje listToArray tworzaca tablice z listy 
- napisz 2 funcje pomocnicze 
    - pierwsza o nazwie prepend -> niech pobiera element i liste i tworzy nowa listee z tym elementem na poczatku listy wejsciowej
    - druga o nazwie nth, niech pobiera liste i liczbe i zwraca element znajdujacy sie a danyj pozycji w liscie (zero odnosi sie do pierwszego elementu, lub do elementu undefined)
- napisz tez wersje rekurencyjna funcki nth
*/

let list = {
  value: 1,
  remain: {
    value: 2,
    remain: {
      value: 3,
      remain: null,
    },
  },
};

console.log(arrayToList([1, 2, 3])); // Output: { value: 1, remain: { value: 2, remain: { value: 3, remain: null } } }
console.log(listToArray(list)); // Output: [1, 2, 3]
console.log(prepend(0, list)); // Output: { value: 0, remain: { value: 1, remain: { value: 2, remain: { value: 3, remain: null } } } }
console.log(nth(list, 1)); // Output: 2

// Creating a list from an array
// we can iterate through the array in reverse order and recursively build the nested remain objects
function arrayToList(array) {
  if (array.length === 0) {
    return null;
  }

  // [value, ...rest] is called array destructuring in JS
  // It allows us to extract values from an array and assign them to variables.
  const [value, ...rest] = array;

  return {
    value,
    remain: arrayToList(rest),
  };
}

// Part 2 Creating an array from a list (listToArray function):
// To create an array from a list, we can iterate through the list and push each value into an array. Here's the implementation:
function listToArray(list) {
  const array = [];

  let current = list;

  while (current) {
    array.push(current.value);
    current = current.remain;
  }

  return array;
}

// Part 3 Helper function: prepend:
// The prepend function takes an element and a list and creates a new list with the element added at the beginning of the input list. Here's the implementation:
function prepend(element, list) {
  return {
    value: element,
    remain: list,
  };
}

//Part 4 Helper function: nth:
// The nth function takes a list and a number and returns the element at the specified position in the list.
// Positions are zero-based, meaning the first element is at position 0. If the position is out of range, it returns undefined. Here's the implementation:
function nth(list, position) {
  if (!list) {
    return undefined;
  }

  if (position === 0) {
    return list.value;
  }

  return nth(list.remain, position - 1);
}
