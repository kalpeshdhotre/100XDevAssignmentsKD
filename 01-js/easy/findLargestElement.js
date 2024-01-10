/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
// assignment complete

function findLargestElement(numbers) {
   let largestNumber = numbers[0];

   for (i = 0; i < numbers.length; i++) {
      if (numbers[i] > largestNumber) {
         largestNumber = numbers[i];
      }
   }
   //   console.log(`Largest Number is ${largestNumber}`);

   return largestNumber;
}

// console.log(`Final Largest number is ${bigNumber}`);

module.exports = findLargestElement;
