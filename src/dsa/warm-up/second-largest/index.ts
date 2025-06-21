console.log("Find second largest number in an array")

const arr = [4, 9, 0, 2, 8, 7, 1]
console.log("Array:", arr)
console.log("Expected output: 8")
console.log("shubham")
console.log("priyo")
const findSecondLargest = (arr: number[]) => {
  let firstLargest = Number.NEGATIVE_INFINITY
  let secondLargest = Number.NEGATIVE_INFINITY

  arr.forEach((num) => {
    if (num > firstLargest) {
      secondLargest = firstLargest
      firstLargest = num
    } else if (num > secondLargest) {
      secondLargest = num
    }
  })

  return secondLargest
}

console.log("Second largest number in arr:", arr, "is:", findSecondLargest(arr))
