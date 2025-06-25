function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2)

    if (nums[middle] === target) {
      return middle
    } else if (target < nums[middle]) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  return -1
}
