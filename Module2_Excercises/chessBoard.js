console.log("---> Chess Board <---");

/* Napisz program towrzący łańcuch reprezentujący siatkę elementów o wymiarach 8 x 8
używaj znaków nowego wiersza do oddzielania poszczególnych wierszy /n
dla kazdej pozycji moze byc spacja albo znak #. 
Znaki te powinny tworzyc szachownicę 
Postaraj sie aby program dzialal dla jakiejkolwiek wartosci, przyklad size = 8*/

let size = 10;

console.log(createChessBoard(size));

function createChessBoard(boardSize) {
  let i = 0;

  while (i < boardSize) {
    let rowMessage = "";

    if (i % 2 === 0) {
      for (let i = 0; i < boardSize; i++) {
        if (i % 2 == 0) rowMessage += "#";
        else rowMessage += " ";
      }
    } else {
      for (let i = 0; i < boardSize; i++) {
        if (i % 2 == 0) rowMessage += " ";
        else rowMessage += "#";
      }
    }
    console.log(rowMessage);
    i++;
  }
}
