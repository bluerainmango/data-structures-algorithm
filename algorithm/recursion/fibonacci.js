// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

//! Solution 1.
// time complexity: O(n)
function fibonacciIterative(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}

console.log(fibonacciIterative(2));

//! Solution 2.
// time complexity: O(2^N) [two to the power of N], Exponential time
// recursive algorithms that solve a problem of size N
// 속도가 이렇게 느린데 왜 iteration 보다 recursion이 더 나은 걸까?(가독성 제외)
// => memoization 등을 활용하면 O(n)으로 만들 수 있음.
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

console.log(fibonacciRecursive(8));
