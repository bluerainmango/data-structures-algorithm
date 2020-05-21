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
function fibonacci(num) {
  let i = 1;
  let first = 0;
  let second = 1;
  let total = first + second;

  console.log(i, first, second, total);

  while (total <= num) {
    first = second;
    second = total;
    total = first + second;
    i++;
    console.log("inside:", total, i);
  }

  return i;
}

fibonacci(3);

//! Solution 3.
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

//! Solution 4 : Tail Call Optimization
// 위의 recursion 이 2개 들어가면 속도도 O(2^n) 로 아주 느리지만 call stack 메모리로 인해 Space complexity도 천문학적으로 늘어나 Stack overflow 로 브라우저가 다운된다. 이를 해결해 주는 방법이 Tail Call Optimization(TCO) 다.
// TCO: 말 그대로 tail에서 자기자신 recursion만 깔끔히 call 해준다.
// 핵심은 함수 내 return 에 어떤 operation(+,- 등)이나 추가 recursion 없이 내부 값을 바로 내뱉어내게 해, 함수가 return에 오는 추가 operation, recursion을 기다리지 않고 바로 call을 종료하고 call stack에서 없어지도록 하는 것이다.
function fibonacciTailRecursion(n, previousFibo, previousPreviousFibo) {
  let currentFibo;
  if (n - 2 < 0) return;

  // 이번 호출의 피보나치 수를 구하고
  currentFibo = previousFibo + previousPreviousFibo;

  // 다음번 재귀 호출을 위해 앞의 피보나치 수를 앞의앞의 피보나치 수로 한 칸 미루고
  previousPreviousFibo = previousFibo;

  // 다음번 재귀 호출을 위해 현재의 피보나치 수를 앞의 피보나치 수로 한 칸 미룬다.
  previousFibo = currentFibo;

  return fibonacciTailRecursion(n - 1, previousFibo, previousPreviousFibo);
}

fibonacciTailRecursion(8, 1, 0);

//! 위의 더 간략한 버전
// f(n) = f(n - 1) + f(n - 2)를 f(n, fibo1, fibo2) = f(n - 1, fibo1 + fibo2, fibo1)로 바꾼 것
function fibonacciTailRecursion(n, previousFibo, previousPreviousFibo) {
  if (n - 2 < 0) return;
  return fibonacciTailRecursion(
    n - 1,
    previousFibo + previousPreviousFibo,
    previousFibo
  );
}

//* 참고
function a() {
  var v = 0;
  return b(v--); // 이건 tail call 이 아님 --v로 고쳐야 tail ca ll. v--는 추가 operation이 return에 적용 되는 것.
}
function b(n) {
  return n + 1;
}
a();
