//Write a function that takes in a string of lowercase English-alphabet
//letters and returns the index of the string's first non-repeating character.
//The first non-repeating character is the first character in a string
//that occurs only onces.
//If the input string doesn't have any non-repeating characters, your function should return -1

//Sample Input: string = "abcdcaf"
//Sample Output: 1, the first non-repeating char is "b" and is found at index 1

//Brute force method using 2 loops O(n^2)
// const firstNonRepeatingCharacter = function(string){
//   for(let i = 0; i < string.length - 1; i++){
//     for(let j = 0; j < string.length; j++){
//       if(i === j || j === string.length - 1)
//     }
//   }

// }

//Optimized way of finding non-repeating char using a hashTable
const firstNonRepeatingCharacter = function (string) {
  const hashTable = {};
  //First loop through string to make a hashtable of the characters and their frequency
  //Character assigned as key and value is the frequency of that character
  for (let i = 0; i < string.length; i++) {
    char = string[i];
    if (!hashMap[char]) hashMap[char] = 0;
    hashMap[char]++;
  }
  //Second loop loops through string to see if the letter has only appeared once referencing
  // the hashTable we made in the first loop
  for (let i = 0; i < string.length; i++) {
    char = string[i];
    if (hashMap[char] === 1) return char;
  }
  return -1;
};

console.log(firstNonRepeatingCharacter("abcdcaf")); //returns 'b'
