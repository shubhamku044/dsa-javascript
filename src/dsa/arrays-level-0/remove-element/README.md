# Remove Element

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` **in-place**. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array `nums`. More formally, if there are `k` elements after removing, then the first `k` elements of `nums` should hold the final result.

Return `k` after placing the final result in the first `k` slots of `nums`.

## Example

```javascript
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

## Solution

```javascript
function removeElement(nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x += 1;
    }
  }
  return x;
}
```

## Time Complexity
- **Time:** O(n) - Single pass through the array
- **Space:** O(1) - In-place modification

## Key Insight
Keep elements that don't match the target value by using two pointers technique. 