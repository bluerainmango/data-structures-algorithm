//! my solution: sort은 되긴 하는데, 이게 맞는건지 모르겠음...
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  //* 이건 recursion을 사용하는데도 불구, base case 필요 없음.
  // if(array.length ===1){
  //   return array;
  // }

  let headIndex = left;
  let pivotIndex = right;

  while (headIndex < pivotIndex) {
    const head = array[headIndex];
    const pivot = array[pivotIndex];
    const prePivot = array[pivotIndex - 1];

    if (head > pivot) {
      array[pivotIndex] = head;
      array[headIndex] = prePivot;
      array[pivotIndex - 1] = pivot;
      pivotIndex--;
    } else if (head < pivot) {
      headIndex++;
    }
  }

  // console.log(array)

  const half = Number.parseInt(right - 1 / 2);

  //* if pivot is smallest or biggest
  if (pivotIndex === 0) {
    //* pivot 와 head가 바로 이웃할때
    if (pivotIndex - headIndex === 1) return array;
    quickSort(array, 1, right);
  } else if (pivotIndex === right) {
    console.log("pivot===right", array, pivotIndex, headIndex);
    // 아래는 왜 같은게 계속 나오는지 모르겠어....ㅠ
    if (pivotIndex === headIndex) return array;
    quickSort(array, 0, right - 1);
  } else {
    console.log("tree: ", array, pivotIndex);
    quickSort(array, 0, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }

  return array;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);

//! Andrei's solution
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  const len = array.length;
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
