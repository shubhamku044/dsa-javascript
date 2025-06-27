# Design Linked List

Design your implementation of the linked list. You can choose to use a singly or doubly linked list.

A node in a singly linked list should have two attributes: `val` and `next`. `val` is the value of the current node, and `next` is a pointer/reference to the next node.

## Operations to Implement

- `get(index)`: Get the value of the index-th node in the linked list. If the index is invalid, return -1.
- `addAtHead(val)`: Add a node of value val before the first element of the linked list.
- `addAtTail(val)`: Append a node of value val as the last element of the linked list.
- `addAtIndex(index, val)`: Add a node of value val before the index-th node in the linked list.
- `deleteAtIndex(index)`: Delete the index-th node in the linked list, if the index is valid.

## Example

```javascript
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
myLinkedList.get(1);              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
myLinkedList.get(1);              // return 3
```

## Solution

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr.val;
  }

  addAtHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addAtTail(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.size++;
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    if (index === this.size) {
      this.addAtTail(val);
      return;
    }
    
    const newNode = new Node(val);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      curr.next = curr.next.next;
    }
    this.size--;
  }
}
```

## Time Complexity
- **get(index):** O(index)
- **addAtHead(val):** O(1)
- **addAtTail(val):** O(n)
- **addAtIndex(index, val):** O(index)
- **deleteAtIndex(index):** O(index)

## Key Concepts
- Node structure with value and next pointer
- Maintaining size for bounds checking
- Handling edge cases (empty list, head/tail operations) 