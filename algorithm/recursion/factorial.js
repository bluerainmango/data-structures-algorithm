//* solution 1 Loop.
//time complexity : O(n)
function findFactorialiterative(num) {
  let currentNum = 1;

  for (let i = 1; i <= num; i++) {
    currentNum = currentNum * i;
  }

  return currentNum;
}

console.log(findFactorialiterative(5));

//* solution 2 Recursion.
//time complexity : O(n)
function findFactorialRecursive(num) {
  if (num === 1) {
    return 1;
  }
  return num * findFactorialRecursive(num - 1);
}

console.log(findFactorialRecursive(5));

//!Andrei's solution
// 1x1 = 1, 2x1 = 2 이므로 loop할 필요 없음
function findFactorialiterative(num) {
  let currentNum = 1;
  if (number === 2) {
    answer = 2;
  }

  for (let i = 2; i <= num; i++) {
    currentNum = currentNum * i;
  }

  return currentNum;
}

function findFactorialRecursive(num) {
  if (num === 2) {
    return 2;
  }
  return num * findFactorialRecursive(num - 1);
}
