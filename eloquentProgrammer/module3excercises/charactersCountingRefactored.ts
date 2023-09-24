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

let yourString: string = "BBS";
let yourSecondString: string = "Barbara Straisand BBBonner";

console.log(countBs(yourString));
console.log(countChars(yourSecondString, "B"));

function countBs(stringToExtractFrom: string): number {
  let numberOfOccurences: number = 0;

  for (let i = 0; i < stringToExtractFrom.length - 1; i++) {
    if (stringToExtractFrom[i] === "B") numberOfOccurences++;
  }
  return numberOfOccurences;
}

function countChars(
  stringToExtractFrom: string,
  searchedCharacter: string
): number {
  let numberOfOccurences: number = 0;

  for (let i = 0; i < stringToExtractFrom.length - 1; i++) {
    if (stringToExtractFrom[i] === searchedCharacter) numberOfOccurences++;
  }

  return numberOfOccurences;
}
