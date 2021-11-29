//You are given an array "prices" where "prices[i]" is the price of a given stock on the ith day
//You want to maximize your profit by choosing a single day to buy one stock and
//choosing a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot
//achieve any profit, return 0.

//Example 1:
//Input: prices = [7,1,5,3,6,4]
//Output: 5
//Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5
//Note that buying on day 2 and selling on day 1 is not allowed. You must buy before you sell

const maximumProfit = function (prices) {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];
    if (price < minPrice) {
      minPrice = price;
      console.log("minPrice ->", minPrice);
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
      console.log("maxProfit ->", maxProfit);
    }
    //As you iterate the array, if price - minPrice is greater than the current maxProfit, reassign maxProfit to be price - minPrice
  }
  return maxProfit;
};

console.log(maximumProfit([7, 1, 5, 3, 6, 4]));
console.log(maximumProfit([7, 6, 4, 3, 1]));
