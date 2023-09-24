console.log("---> Characters Counting <---");

/* 
- z łańcucha można pobrać znak o dowolnym numerze N za pomocą wyrażenia string[N] 
zwrócona zostanie wartość jednego znaku 'a'
- pierwszy znak ma numer 0, ostatni ma string.length - 1
Napisz funkcję CountBs, pobierającą łańcuch jako jedyny argument, 
i zwracającą liczbę wielkich liter B w tym łańcuchu. 
- Następnie napisz funkcję o nazwie countChar dzialającą podobnie jak countBs, 
tylko przyjmującą dodatkowy argument określający znak ktorego wystąpienia mają byc policzone,. 
Przepisz funkcję countBs aby wykorzystać tę nową funkcję*/

let myString = "Felgi BBS";
console.log(myString);
console.log(countBs(myString));
console.log(countChar(myString, "B"));

function countBs(string) {
  return countChar(string, "B");
}

function countChar(string, searchedCharacter) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === searchedCharacter) {
      count++;
    }
  }

  return count;
}

// different aproaches

/* For .. of 
function countChar(string, searchedCharacter) {
  let count = 0;
  for (let char of string) {
    if (char === searchedCharacter) {
      count++;
    }
  }
  return count;
}
*/

/* Using Regular expressions
function countChar(string, searchedCharacter) {
  const regex = new RegExp(searchedCharacter, "g");
  const matches = string.match(regex);
  return matches ? matches.length : 0;
}
*/

/* Array methods
function countChar(string, searchedCharacter) {
  const chars = string.split("");
  const matchingChars = chars.filter((char) => char === searchedCharacter);
  return matchingChars.length;
}
*/
