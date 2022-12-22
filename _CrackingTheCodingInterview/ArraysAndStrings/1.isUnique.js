//Implement an algorithm to determine fi a string has all unique characters.
//What if you cannot use additional data structures?

//Brute force method with O(n^2) time complexity
const isUnique = function (string) {
  for (let i = 0; i < string.length - 1; i++) {
    for (let j = i + 1; j < string.length; j++) {
      //Every following letter from i is going to be checked
      if (string[j] === string[i]) return false;
    }
  }
  return true;
};
// console.log(isUnique("abcdefa"));

//More efficient way with O(n) time complexity(?)
const isUnique2 = function (string) {
  const tempArray = [];
  for (let i = 0; i < string.length; i++) {
    let stringChar = string[i];
    if (tempArray.includes(stringChar)) return false;
    tempArray.push(stringChar);
  }
  return true;
};
console.log(isUnique("abcdefa"));
