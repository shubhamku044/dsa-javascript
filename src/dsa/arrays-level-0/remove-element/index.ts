function removeElement(nums: number[], val: number): number {
  let x = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i]
      x += 1
    }
  }
  return x
}

const arr = [3, 2, 2, 3]

console.log(removeElement(arr, 3)) // Output: 2
