console.log("Panlindrome Number");

const isPalindrome = (num: number): boolean => {
  let rev = 0;
  let temp = num;

  while (temp) {
    const rem = temp % 10;
    rev = rev * 10 + rem;
    temp = Math.floor(temp / 10);
  }

  return rev === num;
};
console.log(isPalindrome(121)); // Output: true
