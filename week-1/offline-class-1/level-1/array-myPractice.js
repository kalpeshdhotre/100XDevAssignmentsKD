// push() - adding new element to array , it adds to end
// note you cannot directly log the push operation in consoleLog
function pushArray(arr, element) {
   console.log("original Array is", arr);
   arr.push(element);
   console.log("After push operation", arr);
}
pushArray([2, 3, 4, 5, 6, 7], 4);

// pop() - delete LAST element from given array
function popArray(arr) {
   console.log("Original array is", arr);
   arr.pop();
   console.log();
   console.log("Array after pop operation", arr);
}
popArray([3, 4, 5, 6, 7, 8]);

// shift() - Deletes First element from array
// unshift() - add element at the begining of the array
function shiftArr(arr) {
   console.log("Original Array is ", arr);
   arr.shift();
   console.log("after shift operation ", arr);
   arr.unshift(0);
   console.log("after shift operation ", arr);
}
shiftArr([12, 3, 4, 5, 6]);

// concat - Add one array to another
function concatArray(arr1, arr2) {
   let arrFinal = arr1.concat(arr2);
   console.log("final array after conact operation is", arrFinal);
}
concatArray([1, 2, 3, 4], [5, 6, 7, 8]);

// forEach - it performs operation on each element in the array;
// it can take three arguments in function element, index and array itself
function forEachArrayElement(arr) {
   console.log("Original Array is", arr);
   arr.forEach(function (item, index) {
      console.log(item);
      console.log(index);
   });
}
forEachArrayElement([1, 2, 3, 4, 5]);

// map() - when we want to create new array after performing
// operation on each element of given array w;
//

function mapArray(arr) {
   console.log("orgianl array", arr);
   const newArray = arr.map(function (item) {
      return item + 2;
   });
   console.log("new array is", newArray);
}
mapArray([1, 2, 3, 4, 5]);

// filter () - when you want to create new array from given array with ;
// some element filtered outbased on given condition
function filterArray(arr) {
   console.log("Orignial Array is", arr);
   const finalArray = arr.filter(function (item) {
      return item > 4;
   });
   console.log("filtered array is", finalArray);
}
filterArray([1, 2, 3, 4, 5, 6, 7, 8, 11, 12]);

// find() = to find element
//  findindex() = to find location of the element
function findInArray(arr) {
   console.log("Array given is", arr);
   let found = arr.find(function (element) {
      return element == 129;
   });
   console.log(`element found in array ${found} at position ${arr.indexOf(found)}`);

   console.log(arr.findIndex((element) => element == 19));
}
findInArray([3, 4, 2, 1, 5, 19, 23, 4]);

// sort() sort given array.
function sortArray(arr) {
   console.log("Original array", arr);
   arr.sort(function (a, b) {
      return b - a;
   });
   console.log("array in acsending order is ", arr);
}

sortArray([3, 4, 6, 2, 3, 8, 9, 1]);
