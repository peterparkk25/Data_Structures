//Given an integer array nums, return an array asnwer such that answer[i] is  equal
//to the product of all the elements of nums except nums[i]
//The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//You must write an algorithm that runs in O(n) time and without using the division operation

//Example 1:
//Input: nums = [1,2,3,4]
//Output: [24,12,8,6]

//Exmaple 2:
//Input: nums = [-1,1,0,-3,3]
//Output: [0,0,9,0,0]

//Splice, and slice(?) has a O(n) time complexity in the worst case
const productExceptSelf = function (nums) {
  const newArray = [];
  for (let i = 0; i < nums.length; i++) {
    let numsCopy = nums.slice();
    numsCopy.splice(i, 1);
    let product = 1;
    for (let j = 0; j < numsCopy.length; j++) {
      product *= numsCopy[j];
      if (product === -0) product = 0;
    }
    newArray.push(product);
    // console.log(newArray);
  }
  return newArray;
};

productExceptSelf([1, 2, 3, 4]); //Outputting [24,12,8,6]
productExceptSelf([-1, 1, 0, -3, 3]); //Outputting [-0,0,9,-0,0]

//We want to get a O(n) time complexity without using division which means we dont want nested loops
//
const productExceptSelf2 = function (nums) {
  const newArray = [];
  let prefix = 1;
  let postfix = 1;
  for (let i = 0; i < nums.length; i++) {
    //
    newArray[i] = prefix; //rather than using the .push method, we can just use this declaration
    prefix *= nums[i];
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    newArray[j] *= postfix;
    if (newArray[j] === -0) newArray[j] = 0;
    postfix *= nums[j];
  }
  // console.log(newArray);
  return newArray;
};

productExceptSelf2([1, 2, 3, 4]); //Outputting [24,12,8,6]
productExceptSelf2([-1, 1, 0, -3, 3]); //Outputting [-0,0,9,-0,0]

//Using divide operator (for fun)
const productExceptSelf3 = function (nums) {
  const newArray = [];
  product = 1;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) newArray[i] = product;
    newArray[i] = product / nums[i];
  }
  console.log(newArray);
  return newArray;
};

productExceptSelf3([1, 2, 3, 4]);
productExceptSelf3([-1, 1, 0, -3, 3]);
