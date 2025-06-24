class Node {
  val: number
  next: Node | null

  constructor(val: number) {
    this.val = val
    this.next = null
  }
}

class MyLinkedList {
  head: Node | null
  size: number

  constructor() {
    this.head = null
    this.size = 0
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) {
      return -1
    }
    let curr = this.head
    for (let i = 0; i < index; i++) {
      if (curr) curr = curr.next
    }

    if (curr) return curr.val
    return -1
  }

  addAtHead(val: number): void {
    const newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
    this.size++
  }

  addAtTail(val: number): void {
    const newNode = new Node(val)
    if (this.head === null) {
      this.head = newNode
    } else {
      let curr = this.head
      while (curr.next !== null) {
        curr = curr.next
      }
      curr.next = newNode
    }

    this.size++
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) {
      return
    }
    if (index === 0) {
      this.addAtHead(val)
      return
    } else if (index === this.size) {
      this.addAtTail(val)
      return
    } else {
      const newNode = new Node(val)
      let curr = this.head
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next
      }

      newNode.next = curr.next
      curr.next = newNode
      this.size++
    }
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return
    if (index === 0) {
      this.head = this.head!.next
    } else {
      let curr = this.head
      for (let i = 0; i < index - 1; i++) {
        if (curr) curr = curr.next
      }
      if (curr && curr.next) {
        curr.next = curr.next.next
      }
    }
    this.size--
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
