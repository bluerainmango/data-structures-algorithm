//! My Solution
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  //* Split Array in into right and left
  const halfIndex = Number.parseInt(array.length / 2);

  const right = array.splice(halfIndex);
  const left = array;

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let arr = [];

  //* left,right의 맨 앞 자리의 수를 비교해가며 arr에 push
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      arr.push(left.splice(0, 1)[0]);
    } else if (left[0] > right[0]) {
      arr.push(right.splice(0, 1)[0]);
    } else if (left[0] === right[0]) {
      arr.push(elft.splice(0, 1)[0]);
      arr.push(right.splice(0, 1)[0]);
    }
  }

  //* 한쪽이 빈 arr가 되었을때에는 남은 꽁다리를 그대로 arr에 붙여주기
  if (left.length > 0 || right.length > 0) {
    const remainingArr = left[0] ? left : right;
    arr = arr.concat(remainingArr);
  }

  return arr;
}

const answer = mergeSort(numbers);
console.log(answer);

//! Andrei's solution
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);
