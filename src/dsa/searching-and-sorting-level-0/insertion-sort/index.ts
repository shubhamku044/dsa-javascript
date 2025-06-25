const arr = [5, 4, 9, 15, 7, 1, 0]

function insertionSort(arr: number[]): number[] {
  const n = arr.length
  for (let i = 1; i < n; i++) {
    const curr = arr[i]
    let prev = i - 1

    while (prev >= 0 && arr[prev] > curr) {
      arr[prev + 1] = arr[prev]
      prev--
    }
    arr[prev + 1] = curr
  }

  return arr
}

const res = insertionSort(arr)
console.log(res) // [0, 1, 4, 5, 7, 9, 15]
