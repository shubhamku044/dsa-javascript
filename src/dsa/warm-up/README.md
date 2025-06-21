# Warm up

## second largest

Find the second largest number in an array

```js
const arr = [4, 9, 0, 2, 8, 7, 1];

const findSecondLargest = (arr) => {
  if (arr.length < 2) return -1;
  let firstLargest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  arr.forEach((num) => {
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest && num !== firstLargest) {
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

## Star pattern

### 1st pattern

```javascript
/*

*
* *
* * *
* * * *

*/

function printStarPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    console.log(pattern.trim());
  }
}
```

### 2nd pattern

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

```js
function pattern2(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += `${j.toString()} `;
    }
    console.log(pattern.trim());
  }
}
```

### 3rd pattern

```js

/*

      *
    * *
  * * *
* * * *

*/

function pattern3(rows: number): void {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 2 * (rows - i); j > 0; j--) {
      pattern += " ";
    }
    for (let j = 1; j <= i; j++) {
      pattern += `* `;
    }
    console.log(pattern);
  }
}
pattern3(4);
```
