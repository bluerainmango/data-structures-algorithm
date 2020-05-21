const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// simplest but the least efficient
//! Time complexity: O(n^2)
//! Space complexity: O(1)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      const difference = arr[j] - arr[j + 1];

      if (difference > 0) {
        let holdingFirstNum = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = holdingFirstNum;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
