//! Brute solution(Naive solution)
const findFirstRecursion = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // 왼쪽 el들은 이미 이전 loop에서 check되었으니 확인할 필요 없어 j=i+1
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }

  return undefined;
};

findFirstRecursion([2, 5, 1, 2, 3, 5, 1, 2, 4]);
//* time complexity: O(n^2)
//* space complexity: O(1)

//! Solution 2.
const findFirstRecursion = (arr) => {
  let obj = {};

  for (val of arr) {
    if (!obj[val]) {
      obj[val] = 1;
    } else {
      return val;
    }
  }

  return undefined;
};

findFirstRecursion([2, 5, 1, 2, 3, 5, 1, 2, 4]);
//* time complexity: O(n)
//* space complexity: O(n)

//! 이 외 두 함수의 차이: 첫번째 함수의 반환값은 아래 예시에서 2를 반환하나, 두 번째 함수는 5를 반환한다.
findFirstRecursion([2, 5, 5, 2, 3, 5, 1, 2, 4]);
