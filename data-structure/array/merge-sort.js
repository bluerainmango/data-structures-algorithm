//! Solution 1.
mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

function mergeSortedArrays(...arrs) {
  let arrays = arrs; // arrays = [[0,3,4,31],[4,6,30]]

  const mergedArr = arrays.reduce((el, acc, arr) => {
    return acc.concat(el);
  }, []);

  return mergedArr.sort((a, b) => a - b);
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

function mergeSortedArrays(...arrs) {
  console.log(...arrs);
  console.log(arrs);
  console.log(new Array(...arrs.length).fill(...arrs));
}

//! Solution 2
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);

nums.forEach((el, i, arr) => {
  if (subtracted[i - 1]) subtracted.push(target - el);
});
