function maxProfit(prices: number[]): number {
  let profit = 0
  let lowestPrice = prices[0]

  prices.forEach((price) => {
    if (price < lowestPrice) {
      lowestPrice = price
    }

    const currProfit = price - lowestPrice

    if (currProfit > profit) {
      profit = currProfit
    }
  })

  return profit
}
