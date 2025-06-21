# Warm up

## Palindrome number

```js
const isPalindrome = (num) => {
  let rev = 0;
  let temp = num;

  while (temp) {
    const rem = temp % 10;
    rev = rev * 10 + rem;
    temp = Math.floor(temp / 10);
  }

  return rev === num;
};
```
