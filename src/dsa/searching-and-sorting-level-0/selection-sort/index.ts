const arr = [5, 4, 9, 15, 7, 1, 0]

function selectionSort(arr: number[]): number[] {
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}

const res = selectionSort(arr)
console.log(res) // [0, 1, 4, 5, 7, 9, 15]
