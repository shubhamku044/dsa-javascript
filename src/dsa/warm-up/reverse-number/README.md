# Warm up

## Reverse Integer

```js
const reverseInt = (num: number): number => {
  let rev = 0;
  const isNegative = num < 0;
  num = Math.abs(num);

  while (num) {
    const rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }

  return isNegative ? -1 * rev : rev;
};
console.log(reverseInt(120));
console.log(reverseInt(-120));
```
