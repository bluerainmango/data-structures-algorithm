//#1 -- For loop in Javascript.
const fish = ["dory", "bruce", "marlin", "nemo"];
const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const large = new Array(10).fill("nemo");

function findNemo2(fish) {
  let t0 = performance.now();

  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }

  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

findNemo2(everyone);

//! Speed : Time complexity

//! Excersie #1.
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1). assignment는 한번만 실행되기에, O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // 이건 O(n)으로 추가해도 되고 안해도 됨.
    anotherFunction(); // O(n). loop안에서 input.length만큼 실행되기에 O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

//* Total: 1+1+1+n+n+n+n = 3+4n => 그냥 n으로 변환 => O(n)

//! Excercise #2.
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n). 추가해도 되고 생략해도 되고.
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n). 추가해도 되고 생략해도 되고.
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

//* BIG O(4 + 5n) => O(n)

//! Excercise #3
const compressBoxesTwice = (boxes, boxes2) => {
  boxes.forEach((box) => {
    console.log(box);
  });

  boxes2.forEach((box) => {
    console.log(box);
  });
};

compressBoxesTwice();
//* BIG O(a+b)
// 입력한 다른 데이터라면 다른 variable 사용

//! Excercise #4
// Log all pairs of array
const boxes = [1, 2, 3, 4, 5];

const pairs = () => {
  boxes.forEach((num, i, arr) => {
    boxes.forEach((num2, i2, arr2) => {
      if (i === i2) return;
      console.log(num, num2);
    });
  });
};

pairs();
//* BIG O(n * n) => O(n^2)
// nested loop은 곱하기

//! Excercise #5
const boxes = [1, 2, 3, 4, 5];
const boxes2 = [6, 7];

const pairs = (arr1, arr2) => {
  arr1.forEach((num, i, arr) => {
    arr2.forEach((num2, i2, arr2) => {
      if (i === i2) return;
      console.log(num, num2);
    });
  });
};

pairs(boxes, boxes2);
//* BIG O(a * b)

//! Excercise #6
function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers:");
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log("and these are their sums:");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);
//* BIG O(n + n^2) => O(n^2)
// Drop non dominants : n은 n^2에 비해 힘이 약한 값이기에 생략

boxes.forEach((n, i, arr) => {
  console.log(n);
});

const func = (i) => {
  if (i === 0) return;
  console.log(`${boxes[i]}, ${boxes[i - 1]}`);
};

boxes.sort((a, b) => {
  console.log(a, b);
  //   return b - a;
});

//! Memory : Space complexity

//! #5 Space complexity O(1) // [오원]
function boooo(n) {
  for (let i = 0; i < n; i++) {
    // i 에 assign 했기에 0(1)
    console.log("booooo");
  }
}
//* space complexity: O(1)

//! #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    // 아래 O(n) 이 dominant var이기에 O(1)인 i 는 무시(rule #3)
    hiArray[i] = "hi"; // data structure 로 arr에 n 개수만큼 채우니, O(n)
  }
  return hiArray;
}

arrayOfHiNTimes(6);
//* space complexity: O(n)

//! Bonus
"asdfasdfsdf".length; // O(1) : JS에서는 length가 prop으로 들어있기 때문에 iteration하지 않고 쉽게 가져옴

//! Example: return true if there is matching el in both arrays.
//! Solution 1. worst way(nested loop with different arrays : O(a*b))
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

const worstFunc = (arr1, arr2) => {
  arr1.forEach((num1) => {
    arr2.forEach((num2) => {
      if (num1 === num2) {
        return true;
      }
      return false;
    });
  });
};

worstFunc(array1, array2);
//* Time complexity: O(a*b)
//* Space complexity: O(1) // 추가로 만드는 var이 없으니깡.

//! Solution 2. 내 방법 time,space complexity가 맞는지 모르겟음...
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

const func = (arr1, arr2) => {
  const newArr = arr1.concat(arr2); // speed: O(n). concat 이나 [...arr1, ...arr2] 나 거의 같은 성능이라네
  const totalLength = arr1.length + arr2.length;
  const skinyArr = Array.from(new Set(newArr));

  console.log(skinyArr);

  if (skinyArr.length !== totalLength) return true;
  return false;
};

func(array1, array2);
//* Time complexity: O(1)
//* Space complexity: O(a+b)  //skinyArr에 저장하지 않고 그냥 통째로 쓰면 O(1) 잉가???

//! Solution 3. arr를 obj로 변환
// JS에서는 obj로 변환 시 property 값은 모두 string으로 변환. 따라서 [] === [] 원래 false이나 "[]" === "[]"로 바뀌어 true가 되는 것.
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

const func = (arr1, arr2) => {
  // 1. loop through first array and create obj where properties === items in the array
  let obj = {};

  // obj = {a:true, b:true...} 식으로 arr를 obj으로 변환
  arr1.forEach((el) => {
    if (!obj[el]) {
      return (obj[el] = true);
    }
  });

  // 2. loop through second array and check if item in second array exists on created obj.
  for (let el of arr2) {
    if (obj[el]) return true;
  }

  return false;
};

func(array1, array2);
//* Time complexity: O(a+b) // loop 2개가 nest가 아닌 병렬로 전개되니깡
//* Space complexity: O(a) // 첫번째 인자의 개수에 따라 신규 var인 obj의 크기도 그에 따라 꺼지니깡.

//! Solution 4. readability
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

const func = (arr1, arr2) => {
  return arr1.some((item) => arr2.includes(item));
};

func(array1, array2);
//* Time complexity: O(a*b) // some, includes는 loop 사용 in behind scene
//* Space complexity: O(1)

//! Google question
// Video https://www.youtube.com/watch?v=XKu_SEDAykw
// Naive
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}

// Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

hasPairWithSum2([6, 4, 3, 2, 1, 7], 9);
