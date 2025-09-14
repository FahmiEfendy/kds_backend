const findDisappeared = (nums: number[]) => {
  const n = nums.length;

  if (n > 105) {
    console.log("Array number length must be lower than 105!");
    return false;
  }

  const sortedNum = nums.sort((a, b) => a - b);
  const missingNum = [];
  let expectedNum = 1;

  for (let i = 0; i < n; i++) {
    // skip checking for duplicate num
    if (i > 0 && sortedNum[i] === sortedNum[i - 1]) continue;

    // check expected number with number on current index
    while (expectedNum < sortedNum[i]) {
      missingNum.push(expectedNum);
      expectedNum++;
    }

    // add expectedNum for next loop
    expectedNum = sortedNum[i] + 1;
  }

  // check other missing number when expectedNum <= n
  while (expectedNum <= n) {
    missingNum.push(expectedNum);
    expectedNum++;
  }

  return missingNum;
};

console.log(findDisappeared([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
console.log(findDisappeared([1, 1])); // [2]
console.log(findDisappeared([1, 1, 1, 1])); // [2, 3, 4]
console.log(findDisappeared([3, 2, 3])); // [1]
