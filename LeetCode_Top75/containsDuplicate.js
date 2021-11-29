//Given an integer array nums, return true if any value appears atleast twice in the array,
//and return false if every element is distinct.

//Example 1:
//Input: nums = [1,2,3,1]
//Output: true

const containsDuplicate = function (nums) {
  //Create a hashTable to hold the integers as you iterate through the array.
  //Very similiar in concept to AlgoExpert's firstNonRepeatingChar except we don't have to iterate
  //through the entire array once we find a duplicate, we can return true right there.
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hashMap[nums[i]]) hashMap[nums[i]] = 0; //If this intger doesn't exist in the hashMap, create the key(integer) and value(0)
    hashMap[nums[i]]++;
    if (hashMap[nums[i]] > 1) return true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
