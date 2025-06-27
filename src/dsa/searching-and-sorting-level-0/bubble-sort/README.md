# Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

## How it Works

The algorithm gets its name from the way smaller or larger elements "bubble" to the top/end of the list.

## Example

```javascript
Input: [5, 4, 9, 15, 7, 1, 0]
Output: [0, 1, 4, 5, 7, 9, 15]
```

## Solution

```javascript
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    
    // If no swapping occurred, array is sorted
    if (!swapped) break;
  }

  return arr;
}
```

## Time Complexity
- **Best Case:** O(n) - When array is already sorted
- **Average Case:** O(n²) - When elements are in random order
- **Worst Case:** O(n²) - When array is sorted in reverse order
- **Space:** O(1) - In-place sorting algorithm

## Key Characteristics
- **Stable:** Equal elements maintain their relative order
- **In-place:** Requires only O(1) extra memory
- **Adaptive:** Performs better on nearly sorted arrays

## Algorithm Steps
1. Compare adjacent elements
2. Swap if they are in wrong order
3. After each pass, the largest element "bubbles up" to its correct position
4. Repeat for remaining unsorted portion
5. Optimization: Stop early if no swaps occur in a pass 