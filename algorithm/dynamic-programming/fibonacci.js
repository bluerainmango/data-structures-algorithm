//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
//! Dynamic Programming 적용하기 전
//* Time Complexity: O(2^n)
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let calculations = 0;
function fibonacci(n) {
  //O(2^n)

  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//! Dynamic Programming 적용 후(Top down 방법)
//* Time Complexity: O(n)
function fibonacciMaster() {
  let cache = {};

  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

//! 다른 방법(Bottom top 방법): cache obj(hash table) 대신 arr 사용
function fibonacciMaster2(n) {
  let answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}
