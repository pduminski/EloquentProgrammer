console.log("---> Chess Board <---");

/* Napisz program towrzący łańcuch reprezentujący siatkę elementów o wymiarach 8 x 8
używaj znaków nowego wiersza do oddzielania poszczególnych wierszy /n
dla kazdej pozycji moze byc spacja albo znak #. 
Znaki te powinny tworzyc szachownicę 
Postaraj sie aby program dzialal dla jakiejkolwiek wartosci, przyklad size = 8*/

// initiate your values
let size: number = 4;
let symbols: string[] = ["O", "X"];
// use the function and provide parameters
createBoard(size, symbols[0], symbols[1]);

// create a board based on symbols list and size
function createBoard(
  boardSize: number,
  symbolA: string,
  symbolB: string
): void {
  let i: number = 0;

  while (i < boardSize) {
    let rowMessage: string = "";
    if (i % 2 === 0) {
      for (let i = 0; i < boardSize; i++) {
        if (i % 2 === 0) rowMessage += symbolA;
        else rowMessage += symbolB;
      }
    } else {
      for (let i = 0; i < boardSize; i++) {
        if (i % 2 === 0) rowMessage += symbolB;
        else rowMessage += symbolA;
      }
    }
    i++;
    console.log(rowMessage);
  }
}
