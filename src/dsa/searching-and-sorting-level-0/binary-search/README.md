# Binary Search

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with O(log n) runtime complexity.

## Example

```javascript
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
```

## Solution

```javascript
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}
```

## Time Complexity
- **Time:** O(log n) - Each iteration eliminates half of the search space
- **Space:** O(1) - Only using constant extra space

## Key Insight
Eliminate half of the search space in each iteration by comparing with the middle element.

## Algorithm Explanation
1. Initialize left and right pointers to array bounds
2. Calculate middle index
3. If middle element equals target, return index
4. If target is smaller, search left half (right = middle - 1)
5. If target is larger, search right half (left = middle + 1)
6. Repeat until found or search space is exhausted 