import { ListNode } from '../../types'

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  let curr = head
  let temp
  while (curr) {
    temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }

  return prev
}
