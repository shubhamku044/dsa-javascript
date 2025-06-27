# String Manipulation

Learn fundamental string operations and techniques for text processing. This section covers basic string manipulation methods that are essential for solving string-related problems.

## Common String Operations

### String Traversal
```javascript
function traverseString(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]); // Access character at index i
  }
  
  // Alternative: for...of loop
  for (const char of str) {
    console.log(char);
  }
}
```

### String Reversal
```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Manual approach
function reverseStringManual(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
```

### Character Frequency Count
```javascript
function countCharacters(str) {
  const freq = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
```

### Palindrome Check
```javascript
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

// Two-pointer approach
function isPalindromeOptimal(str) {
  let left = 0;
  let right = str.length - 1;
  
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
```

### Substring Operations
```javascript
// Check if substring exists
function containsSubstring(str, substr) {
  return str.includes(substr);
}

// Find all occurrences
function findAllOccurrences(str, substr) {
  const indices = [];
  let index = str.indexOf(substr);
  
  while (index !== -1) {
    indices.push(index);
    index = str.indexOf(substr, index + 1);
  }
  
  return indices;
}
```

## Key Concepts

- **String Immutability:** Strings are immutable in JavaScript
- **Character Access:** Use bracket notation or charAt() method
- **String Methods:** split(), join(), slice(), substring(), replace()
- **Case Conversion:** toLowerCase(), toUpperCase()
- **Pattern Matching:** Regular expressions for complex patterns

## Time Complexity Notes

- **Character access:** O(1)
- **String concatenation:** O(n) - creates new string
- **String traversal:** O(n)
- **String search:** O(n) for simple search, O(n+m) for advanced algorithms

## Best Practices

1. Use appropriate string methods for common operations
2. Consider StringBuilder pattern for multiple concatenations
3. Be mindful of string immutability in JavaScript
4. Use regular expressions for complex pattern matching
5. Consider space complexity when creating new strings 