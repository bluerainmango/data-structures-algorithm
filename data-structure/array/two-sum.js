//! Solution 1. fastest
//? 아래 솔루션2와 비교하면, 확실히 객체[i]로 값에 접근하는 것이 arr.includes()와 같은 loop보다 빠르다.
//* arr 에서 값 유무를 체크할땐, arr.includes()
//* obj에서 값 유무를 체크할땐, if(value in obj)
var twoSum = function (nums, target) {
  let numsObj = {};

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let match = target - current;

    if (match in numsObj) {
      return [i, numsObj[match]];
    } else {
      numsObj[current] = i;
    }
  }
};
twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);

//! Solution 2. lowest memory
var twoSum = function (nums, target) {
  let index = 0;

  do {
    let subtractedNum = target - nums[index];

    if (nums.includes(subtractedNum) && nums.indexOf(subtractedNum) !== index) {
      return [index, nums.indexOf(subtractedNum)];
    }

    index++;
  } while (index <= nums.length - 1);
};

twoSum([3, 3], 6);

//! Solution 3
var twoSum = function (nums, target) {
  const obj = {};
  nums.forEach((el, i) => {
    if (!obj[el]) {
      obj[el] = [i];
    } else {
      obj[el].push(i);
    }
  });

  console.log(obj);
  const sorted = nums.sort((a, b) => a - b);

  let leftI = 0;
  let rightI = nums.length - 1;

  while (leftI <= nums.length - 1 && rightI >= 0) {
    const sum = sorted[leftI] + sorted[rightI];

    if (sum === target) {
      if (obj[sorted[leftI]].length > 1) {
        return [obj[sorted[leftI]][1], obj[sorted[rightI]][0]];
      }

      return [obj[sorted[leftI]], obj[sorted[rightI]]];
    } else if (sum > target) {
      rightI--;
    } else if (sum < target) {
      leftI++;
    }
  }
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);

const obj = { 3: 0, 3: 1 };
obj[3];
