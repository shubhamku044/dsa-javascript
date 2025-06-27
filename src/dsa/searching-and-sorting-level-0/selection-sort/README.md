# Selection Sort

Selection Sort works by repeatedly finding the minimum element from the unsorted portion and placing it at the beginning. It maintains two parts: a sorted portion at the beginning and an unsorted portion at the end.

## How it Works

The algorithm divides the input list into two parts: a sorted sublist of items which is built up from left to right and a sublist of the remaining unsorted items.

## Example

```javascript
Input: [5, 4, 9, 15, 7, 1, 0]
Output: [0, 1, 4, 5, 7, 9, 15]
```

## Solution

```javascript
function selectionSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    
    // Find the minimum element in remaining unsorted array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  
  return arr;
}
```

## Time Complexity
- **Best Case:** O(n²) - Always performs the same number of comparisons
- **Average Case:** O(n²) - Same as best case
- **Worst Case:** O(n²) - Same as best case
- **Space:** O(1) - In-place sorting algorithm

## Key Characteristics
- **Unstable:** May change the relative order of equal elements
- **In-place:** Requires only O(1) extra memory
- **Not adaptive:** Performance doesn't improve on nearly sorted arrays
- **Minimum swaps:** Performs at most n-1 swaps

## Algorithm Steps
1. Find the smallest element in the array
2. Swap it with the element at the first position
3. Find the second smallest element and swap with second position
4. Continue until the entire array is sorted

## When to Use
- Small datasets where simplicity is preferred
- When memory is limited (in-place algorithm)
- When the cost of swapping is high (minimizes swaps)

## Advantages
- Simple implementation
- In-place sorting (O(1) space)
- Performs well on small lists
- Minimizes the number of swaps 