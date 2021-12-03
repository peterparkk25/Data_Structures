//Given two strings s and t, return true if t is an anagram of s, and false otherwise
//Example 1:
//Input: s = "anagram", t = "nagaram"
//Output: true

//Example 2:
//Input: s = "rat", t = "car"
//Output: false

const validAnagram = function (string1, string2) {
  // console.log(sorter(string1) === sorter(string2));
  return sorter(string1) === sorter(string2);
};

//Helper function
const sorter = function (str) {
  str.split("").sort().join("");
  //str.split("") splits the string into an array
  //str.sort() sorts in alphabetical order
  //.join("") puts the array of chars back into a single string
};

validAnagram("anagram", "nagaram");
validAnagram("rat", "car");

//Time Complexity is O(nlog(n)) for above solution

//Trying to solve below by using a hashTable using the frequency of

const validAnagram2 = function (string1, string2) {
  const hashTable = {};
  for (let i = 0; i < string1.length; i++) {
    let char = string1[i];
    if (!hashTable[char]) hashTable[char] = 0;
    hashTable[char]++;
  }
  console.log("After first for loop ->", hashTable);
  for (let i = 0; i < string2.length; i++) {
    let char2 = string2[i];
    if (!hashTable[char2]) return false;
    hashTable[char2]--;
  }
  console.log("After second for loop ->", hashTable);
  for (let i = 0; i < string1.length; i++) {
    let char = string1[i];
    if (hashTable[char] !== 0) return false;
  }
  console.log("End of function ->", hashTable);
  return true;
};

validAnagram2("anagram", "nagaram");
validAnagram2("rat", "car");
