function reverseString(s: string[]): void {
  let start = 0
  let end = s.length - 1

  while (start < end) {
    const temp = s[start]
    s[start] = s[end]
    s[end] = temp
    console.log('Start', s[start], s[end])
    start++
    end--
  }
}

const arr = ['h', 'e', 'l', 'l', 'o']

console.log('Before reverse', arr)
console.log('After reverse', reverseString(arr))
