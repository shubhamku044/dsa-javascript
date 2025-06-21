console.log("Reverse Number");

const reverseInt = (num: number): number => {
  let rev = 0;
  const isNegative = num < 0;
  num = Math.abs(num);

  while (num) {
    const rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }

  const limit = Math.pow(2, 31);

  if (rev < -limit || rev > limit) return 0;

  return isNegative ? -1 * rev : rev;
};
console.log(reverseInt(120));
console.log(reverseInt(-120));
