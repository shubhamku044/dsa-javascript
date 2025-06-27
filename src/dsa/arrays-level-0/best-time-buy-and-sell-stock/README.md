# Best Time to Buy and Sell Stock

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

## Example

```javascript
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

## Solution

```javascript
function maxProfit(prices) {
  let profit = 0;
  let lowestPrice = prices[0];

  prices.forEach((price) => {
    if (price < lowestPrice) {
      lowestPrice = price;
    }

    const currProfit = price - lowestPrice;

    if (currProfit > profit) {
      profit = currProfit;
    }
  });

  return profit;
}
```

## Time Complexity
- **Time:** O(n) - Single pass through the array
- **Space:** O(1) - Only using constant extra space

## Key Insight
Keep track of the minimum price seen so far and calculate profit for each day. 