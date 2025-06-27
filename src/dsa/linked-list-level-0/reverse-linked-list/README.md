# Reverse Linked List

Given the `head` of a singly linked list, reverse the list, and return the reversed list.

## Example

```javascript
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Input: head = [1,2]
Output: [2,1]

Input: head = []
Output: []
```

## Solution - Iterative Approach

```javascript
function reverseList(head) {
  let prev = null;
  let curr = head;
  let temp;
  
  while (curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}
```

## Alternative Solution - Recursive Approach

```javascript
function reverseList(head) {
  if (!head || !head.next) {
    return head;
  }
  
  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  
  return newHead;
}
```

## Time Complexity
- **Time:** O(n) - Visit each node once
- **Space:** O(1) for iterative, O(n) for recursive (call stack)

## Key Insight
Reverse the direction of pointers by keeping track of previous, current, and next nodes.

## Algorithm Explanation (Iterative)
1. Use three pointers: prev (initially null), curr (head), and temp
2. Store next node in temp before breaking the link
3. Reverse the current link: curr.next = prev
4. Move pointers forward: prev = curr, curr = temp
5. Return prev (new head of reversed list) 