# Warm upp

## second largest

Find the second largest number in an array

```js
const arr = [4, 9, 0, 2, 8, 7, 1];

const findSecondLargest = (arr) => {
  let firstLargest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  arr.forEach((num) => {
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest) {
      secondLargest = num;
    }
  });

  return secondLargest;
};

console.log(
  "Second largest number in arr:",
  arr,
  "is:",
  findSecondLargest(arr),
);
```
