/* 
    Exercise 3: Palindrome Checker
    Create a TypeScript function that checks if a given string is a palindrome (reads the same forwards and backward). 
    Ignore spaces, punctuation, and capitalization.
*/

function checkIfPalindrome(word: string) {
  let isPalindrome = true;

  if (word.length % 2 === 0) {
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        isPalindrome = false;
        break;
      }
    }
  } else {
    isPalindrome = false;
  }

  return isPalindrome;
}

const palindromeTrue1 = "anna";
const palindromeTrue2 = "loppol";
const palindromeFalse1 = "beautiful";
const palindromeFalse2 = "pawap";

console.log(checkIfPalindrome(palindromeTrue1)); // Output: true
console.log(checkIfPalindrome(palindromeTrue2)); // Output: true
console.log(checkIfPalindrome(palindromeFalse1)); // Output: false
console.log(checkIfPalindrome(palindromeFalse2)); // Output: false
