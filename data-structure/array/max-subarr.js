//! Sollution 1. 속도 최악 O(n^2)
var maxSubArray = function (nums) {
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
    }

    for (let j = i + 1; j < nums.length; j++) {
      if (j > nums.length - 1) {
        break;
      }
      const subArr = nums.slice(i, j + 1);
      const sum = subArr.reduce((el, acc, arr) => {
        return acc + el;
      }, 0);
      if (sum > max) max = sum;
    }
  }
  return max;
};
