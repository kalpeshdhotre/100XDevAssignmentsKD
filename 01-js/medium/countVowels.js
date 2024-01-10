/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
   const vowels = [`a`, `e`, `i`, `o`, `u`];
   let totalCount = 0;

   let strToCheck = str.toLowerCase().split("");
   //  console.log(strToCheck);

   for (let i = 0; i <= strToCheck.length; i++) {
      if (vowels.includes(strToCheck[i])) {
         totalCount += 1;
      }
   }
   return totalCount;
   //  console.log(totalCount);
}

// countVowels("kaLPlpesh DHOTRE");
module.exports = countVowels;
