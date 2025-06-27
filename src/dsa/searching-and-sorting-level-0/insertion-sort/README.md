# Insertion Sort

Insertion Sort builds the final sorted array one item at a time. It works similarly to how you sort playing cards in your hands - you pick up cards one by one and insert each into its proper position among the previously sorted cards.

## How it Works

The algorithm maintains a sorted portion at the beginning of the array and repeatedly takes the next element from the unsorted portion, inserting it into the correct position in the sorted portion.

## Example

```javascript
Input: [5, 4, 9, 15, 7, 1, 0]
Output: [0, 1, 4, 5, 7, 9, 15]
```

## Solution

```javascript
function insertionSort(arr) {
  const n = arr.length;
  
  for (let i = 1; i < n; i++) {
    const curr = arr[i];
    let prev = i - 1;

    // Move elements that are greater than curr one position ahead
    while (prev >= 0 && arr[prev] > curr) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    
    // Insert curr at its correct position
    arr[prev + 1] = curr;
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
- **Adaptive:** Performs very well on nearly sorted arrays
- **Online:** Can sort a list as it receives it

## Algorithm Steps
1. Start from the second element (index 1)
2. Compare current element with previous elements
3. Shift larger elements one position to the right
4. Insert current element at its correct position
5. Repeat for all remaining elements

## When to Use
- Small datasets (n < 50)
- Nearly sorted arrays
- As a subroutine in hybrid algorithms like quicksort 