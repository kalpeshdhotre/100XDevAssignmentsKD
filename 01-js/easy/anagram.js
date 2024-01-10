/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// test after diretory renameed 

function isAnagram(str1, str2) {
  let sortedString1 = str1.toLowerCase().split("").sort().join("");
  let sortedString2 = str2.toLowerCase().split("").sort().join("");
  console.log(sortedString1);
  console.log(sortedString2);

  if (str1.length != str2.length) {
     console.log("NOT Anagram - Length Different!");
     return false;
  }

  if (sortedString1 == sortedString2) {
     console.log("Strings are Anagram");
     return true;
  } else {
     console.log("NOT anagram - not matching characters");
     return false;
  }
}

// isAnagram("conversationalists", "conservationalists");

module.exports = isAnagram;
