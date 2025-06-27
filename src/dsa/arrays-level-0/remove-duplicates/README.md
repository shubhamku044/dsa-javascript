# Remove Duplicates from Sorted Array

Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only **once**. The **relative order** of the elements should be kept the **same**.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result.

Return `k` after placing the final result in the first `k` slots of `nums`.

## Example

```javascript
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

## Solution

```javascript
function removeDuplicates(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x += 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
}
```

## Time Complexity
- **Time:** O(n) - Single pass through the array
- **Space:** O(1) - In-place modification

## Key Insight
Use two pointers: one for reading and one for writing unique elements. 