//Given an array of integers nums and an integer target,
//return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution,
//and you may not use the same element twice.
//You can return the answer in any order.

//Example 1:
//Input: nums = [2,7,11,15], target = 9
//Output: [0,1] because nums[0] + nums[1] = 9

//Brute force method using 2 for loops
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return;
};
console.log(twoSum([2, 7, 11, 15], 9));

//Optimized way using a hashMap
const twoSumOptimized = function (nums, target) {
  const hashMap = {};
  const outputArray = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (hashMap[num]) {
      outputArray.push(hashMap[num][1], i);
    }
    hashMap[target - num] = [num, i];
  }
  return outputArray;
};
console.log(twoSumOptimized([2, 7, 11, 15], 9)); //Output: [0, 1]
