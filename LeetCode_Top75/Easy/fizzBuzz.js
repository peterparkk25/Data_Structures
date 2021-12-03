//Given an integer n, return a string array (1 - indexed) where:
// answer[i] == "FizzBuzz" if divisible by 3 and 5.
// answer[i] -- "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if none of the above conditions are true.

//Example 1:
//Input: n = 3
//Output: ["1","2","Fizz"]

const fizzBuzz = function (n) {
  const returnArray = [];
  for (let i = 1; i <= n; i++) {
    let str = "";
    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";
    if (str === "") str += i;
    returnArray[i - 1] = str;
  }
  // console.log(returnArray);
  return returnArray;
};

fizzBuzz(15);

const fizzBuzzJazz = function (n) {
  const returnArray = [];
  for (let i = 1; i <= n; i++) {
    let str = "";
    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";
    if (i % 7 === 0) str += "Jazz";
    if (str === "") str += i;
    returnArray[i - 1] = str;
  }
  console.log(returnArray);
  return returnArray;
};

fizzBuzzJazz(21);
