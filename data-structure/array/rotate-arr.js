//! Solution 1. splice, concat 이 메모리를 많이 소요해서 space complexity 가 높다. O(n) 넘어가나??
var rotate = function (nums, k) {
  return nums.splice(nums.length - k, k).concat(nums);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);

//! Solution 2. 속도는 진짜...느리지만... 그래도 space complexity는 O(1)로 줄였다...
//* Time complexity: O(n x k)
//* Space complexity: O(1)
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    let lastI = nums.length - 1;
    let lastNum = nums[lastI];

    for (let j = lastI; j >= 0; j--) {
      nums[j] = j !== 0 ? nums[j - 1] : lastNum;
    }
  }

  return nums;
};
