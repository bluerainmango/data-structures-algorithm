var moveZeroes = function (nums) {
  // loop [] check if num === 0 : unshift & push , if num !===0 : comp num[i] and num[i+1]   O(n^2)
  // sort(), take out all 0 and push    O(n)
  // sort((a,b)=>{return a<b||b===0 => -1, a=b => 0, a>b||a===0 => 1})  O(n)
  nums.sort((a, b) => {
    console.log("comp: ", a, b, nums);

    if (a === 0) {
      console.log("a===0");
      return 1;
    } else if (b === 0) {
      console.log("b===0");
      return 1;
    } else if (a < b) {
      console.log("a<b");
      return -1;
    } else if (a > b) {
      console.log("a>b");
      return 1;
    } else {
      console.log("0");
      return 0;
    }
  });
  //
  return nums;
};

var moveZeroes = function (nums) {
  let zeroes = 0;

  let numArr = nums.filter((el) => {
    zeroes++;
    return el;
  });

  console.log(numArr);

  for (let i = 0; i < zeroes; i++) {
    numArr.push(0);
  }
  return numArr;
};
