console.log("Count digits");

function countDigits(num: number): number {
  if (num === 0) return 1;

  let count = 0;
  num = Math.abs(num);
  while (num) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

console.log(countDigits(12345)); // Output: 5
console.log(countDigits(0)); // Output: 1
console.log(countDigits(100)); // Output: 3
