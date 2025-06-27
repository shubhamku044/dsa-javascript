# Reverse String

Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array **in-place** with O(1) extra memory.

## Example

```javascript
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

## Solution

```javascript
function reverseString(s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    const temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
}
```

## Time Complexity
- **Time:** O(n) - Visit each character once
- **Space:** O(1) - Only using constant extra space

## Key Insight
Use two pointers from both ends moving towards the center, swapping characters. 