function removeDuplicates(nums: number[]): number {
  let x = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x += 1
      nums[x] = nums[i]
    }
  }
  return x + 1
}

const arr = [1, 1, 2, 2, 3, 4, 5, 5]
console.log(removeDuplicates(arr)) // Output: 5
