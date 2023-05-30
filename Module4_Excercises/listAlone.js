console.log("---> List Alone <---");

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

console.log(arrayToList([1, 2, 3, 4]));
console.log(listToArray(list));
console.log(prepend(5, list));
console.log(nth(list, 2));

function arrayToList(array) {
  if (array.length === 0) {
    return null;
  }

  const [value, ...rest] = array;

  return {
    value: value,
    remain: arrayToList(rest),
  };
}

function listToArray(list) {
  const array = [];

  let current = list;

  while (current) {
    array.push(current.value);
    current = current.remain;
  }

  return array;
}

function prepend(element, list) {
  return {
    value: element,
    rest: list,
  };
}

function nth(list, element) {
  if (!list) {
    return undefined;
  }

  if (element === 0) {
    return list.value;
  }

  return nth(list.remain, element - 1);
}
