//! Solution 1
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.

      if (array[i] < array[i - 1]) {
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            //move number to the right spot

            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);

//! Solution 2 my solution
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const standard = arr[i];

    for (let j = i - 1; j >= 0; j--) {
      if (standard > arr[j] && j === i - 1) {
        break;
      }

      if (standard > arr[j] && j !== 0) {
        arr.splice(i, 1);
        arr.splice(j + 1, 0, standard);
        break;
      }

      if (standard < arr[j] && j === 0) {
        arr.splice(i, 1);
        arr.unshift(standard);
      }
    }

    // if standard > arr[j] break
    // if standard < arr[j] 계속 j--하다가 arr[j] > standard일때, => arr.splice(i,1), arr.splice(j+1,0,standard)
    // j===0 일때=> arr.splice(i,1), arr.unshift(standard)
  }
}

insertionSort(numbers);
console.log(numbers);

//! I think this is wrong solution
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function insertionSort(arr) {

//   for(let i = 1; i<arr.length; i++){
//   const standard = arr[i];

//   let j = i-1;
//     while(arr[j] > standard){

//       const temp = arr[j];
//       arr[j] = standard;
//       arr[j+1] = temp;
//       j--
//       console.log("changed",numbers)
//     }

//   }
// }

// insertionSort(numbers);
// console.log(numbers);
