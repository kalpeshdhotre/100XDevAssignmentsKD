// find out length of the given string
function getLength(str) {
   console.log(`Original string ${str}`);
   console.log(`Length of the string is ${str.length}`);
}
getLength("Hello World");

// indexof -  find out the location of given character or strin
function getIndexOf(str, target) {
   console.log(`Given string is : ${str}`);
   console.log(`Index of ${target} is:`, str.indexOf(target));
}
getIndexOf("Hello Word of JS", "JS");

// lastIndexOf - find outs the location of the given string but last occurance
function getLastIndexOf(str, target) {
   console.log("Given string is ", str);
   console.log("Last Index is ", str.lastIndexOf(target));
}
getLastIndexOf("Hello of World of JS and of React", "of");

// slice - this method in JS gives part of the string requested
// str.slice(m,n) cuts the str from mth position till  n-th position of string.
function getSlice(str, start, end) {
   console.log("Given string is ", str);
   console.log("Slice output of given string is ", str.slice(start, end));
}
getSlice("HelloJSWorld", -8, -5);

// substring -
// it start is greater than  end position JS will swap it
// if any negative value is mention is start or end it will treat as ZERO
function getSubstring(str, start, end) {
   console.log("Original string is ", str);
   console.log("Substring is ", str.substring(start, end));
}
getSubstring("Hello World", -8, 3);

// repalce
function replaceString(str, target, replacement) {
   console.log("Original string is -", str);
   console.log("Modified string is -", str.replace(target, replacement));
}
replaceString("Hello this is JS World", "JS", "AI");

//split - it returns array after seperation
function splitString(str, seprator) {
   console.log("Original string is", str);
   console.log("String after spliting is ", str.split(seprator));
}
splitString("Hello World of JS", " ");

// Trim - removes all trailing and leading spaces from the string
// toUpperCase
// toLowerCase
function trimString(str) {
   console.log("origianl String is ", str);
   console.log("After trim function ", str.trim());
   console.log("convertion to UPPERCASE", str.toUpperCase());
   console.log("convertion to lowercase", str.toLowerCase());
}
trimString("   Hello this is world of JS  ");
