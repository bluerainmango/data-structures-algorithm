/* 
The fibonacci sequence is perhaps one of the most famous algorithms,
and definitely one of the most tested during technical interviews.
Give a number N, return the index value of the Fibonacci sequence,
where the sequence is:
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
The sequence is relatively simple mathematics. Each value is the sum
of the previous two values or:
F(n) = F(n-1) + F(n-2)
*/

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
