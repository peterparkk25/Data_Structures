//A phrase is a palindrome if, after converting all uppercase letters into lowercase
//letters and removing all non-alphanumeric characters, it reads the same forward and backward.
//Alphanumeric characters include letters and numbers.

//Given a string s, return true if it is a palindrome, or false otherwise.

//Example 1:
//Input: s = "A man, a plan, a canal: Panama"
//Output: true
//Explanation: "amanaplanacanalpanama" is a palindrome.

//Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

const validPalindrome = function (string) {
  //The below takes the input string and removes all non-alphanumeric characters and makes them lowercase
  newString = string.replace(/[\W_]/g, "").toLowerCase();
  compString = "";
  for (let i = newString.length - 1; i >= 0; i--) {
    //going from the last character of the newly made string, add each character to a new string
    compString += newString[i];
  }
  //At the end of the function, compare the two strings and return the boolean
  console.log(string);
  console.log(newString === compString);
  return newString === compString;
};

validPalindrome("A man, a plan, a canal: Panama");
validPalindrome("tesTing a raNdom Sentence");
validPalindrome(" ");
