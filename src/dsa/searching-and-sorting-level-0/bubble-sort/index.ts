const arr = [5, 4, 9, 15, 7, 1, 0]

function bubbleSort(arr: number[]): number[] {
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    let swapped = false
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        swapped = true
      }
    }
    if (!swapped) break
  }

  return arr
}

const res = bubbleSort(arr)
console.log(res) // [0, 1, 4, 5, 7, 9, 15]
