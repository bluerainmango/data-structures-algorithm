//Implement a function that reverses a string using iteration...and then recursion!
//! Solution 1 using iteration
function reverseString(str) {
  const arr = str.split("");
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr.pop());
  }
  return reversed.join("");
}

reverseString("yoyo mastery");
//should return: 'yretsam oyoy'

//! Solution 1 using closure
function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];
  //We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

reverseString("yoyo master");

//! Solution 3 using recursion 1
let reversed = [];

function reverseString(str) {
  const arr = str.split("");

  if (str.length === 0) {
    return reversed.join("");
  }

  reversed.push(arr.pop());

  return reverseString(arr.join(""));
}

reverseString("yoyo mastery");

//! Solution 4 using recursion 2 : Best
function reverseString(str) {
  if (str.length === 1) {
    return str;
  }

  return reverseString(str.substring(1)) + str.substr(0, 1);
}

reverseString("yoyo mastery");

//! Solution 5 using recursion 3 : Best
function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

reverseStringRecursive("yoyo master");
