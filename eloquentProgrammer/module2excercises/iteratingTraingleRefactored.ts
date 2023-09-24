console.log("Pętlowy trójkąt");

/* Napisz pętlę wywołującą siedem razy funkcję console.log i drukującą poniższy trójkąt
#
##
###
####
#####
######
#######
*/

for (let i = 0; i < 7; i++) {
  let rowMessage: string = "";
  for (let j = 0; j <= i; j++) {
    rowMessage += "#";
  }
  console.log(rowMessage);
}
