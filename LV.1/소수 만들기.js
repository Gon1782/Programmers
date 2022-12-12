function solution(nums) {
  let count = 0;
  const arr = new Array(3001).fill(0);
  for (let i = 2; i <= arr.length; ++i) {
    if (arr[i] === 1) {
      continue;
    }
    for (let j = i * 2; j <= arr.length; j += i) {
      arr[j] = 1;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (arr[nums[i] + nums[j] + nums[k]] === 0) count++;
      }
    }
  }
  return count;
}
