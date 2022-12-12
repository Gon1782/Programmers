function solution(nums) {
    return [...new Set(nums)].length < nums.length/2 ? [...new Set(nums)].length : Math.floor(nums.length/2)
}