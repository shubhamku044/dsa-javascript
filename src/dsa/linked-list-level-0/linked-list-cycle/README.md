# Linked List Cycle

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

## Example

```javascript
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

## Solution - Floyd's Cycle Detection Algorithm

```javascript
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}
```

## Time Complexity
- **Time:** O(n) - At most traverse the list twice
- **Space:** O(1) - Only using two pointers

## Key Insight
Use two pointers moving at different speeds. If there's a cycle, the fast pointer will eventually meet the slow pointer.

## Algorithm Explanation
1. Initialize two pointers: slow (moves 1 step) and fast (moves 2 steps)
2. If there's no cycle, fast will reach the end
3. If there's a cycle, fast will eventually catch up to slow within the cycle 