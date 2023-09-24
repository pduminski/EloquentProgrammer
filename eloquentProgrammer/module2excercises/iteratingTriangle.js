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
let i = 0;
let message = "";

while (i < 7) {
  message += "#";
  console.log(message);
  i++;
}
