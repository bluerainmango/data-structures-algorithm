//! Solution 1
function reverse(str) {
  //check input

  if (!str || str.length < 2 || typeof str !== "string") {
    return "input is not string.";
  }

  let reversed = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]); // O(n)
  }
  return reversed.join("");
  //   return reversed.toString(); // 동일
}

reverse("hello Emily");
//* Time complexity: O(n)
//* Space complexity: O(n)

//! Solution 2
function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "input is not string.";
  }

  let reversed = [];
  for (let i = 0; i < str.length; i++) {
    reversed[i] = str[-1 * (i - str.length) - 1]; // O
  }
  return reversed;
  //   new Array(str.length);
}
reverse("hello Emily");

//! Solution 3
function reverse(str) {
  return str.split("").reverse().join("");
}

//! Solution 4
function reverse(str) {
  return [...str].reverse().join("");
}
