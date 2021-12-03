//Given an integer array nums, find the contiguous subarray (containing at least one number)
//which has the largest sum and return its sum.

//A subarray is a contiguous part of an array.

//Example 1:
//Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
//Output: 6
//Explanation: [4,-1,2,1] has the largest sum = 6;

const maxmimumSubarray = function (nums) {
  maxSubarray = nums[0];
  currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (currentSum < 0) currentSum = 0; //As you iterate through the array, if the currentSum + nums[i]
    //yielded less than 0, setting the currentSum to 0 basically starts from the new index
    currentSum += nums[i]; //Add each index to continue computing the sum, and check conditional ^
    // console.log("currentSum ->", currentSum);
    maxSubarray = Math.max(maxSubarray, currentSum);
    console.log("currentSum ->", currentSum, "maxSubarray ->", maxSubarray);
  }
  // console.log(maxSubarray);
  return maxSubarray;
};

maxmimumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
