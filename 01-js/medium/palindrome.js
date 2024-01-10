/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
   let strToCheck = [...str.toLowerCase().replace(/[^\w]|_/g, "")].join("");

  //  console.log(strToCheck);
  //  console.log([...strToCheck].reverse().join(""));
   

   if (strToCheck == [...strToCheck].reverse().join("")) {
      // console.log("Strin is Palindrom");
      return true;
   } else {
      // console.log("Strin is NOT Palindrom");
      return false;
   }
}
// isPalindrome("A man a plan a canal Panama!!");
module.exports = isPalindrome;
