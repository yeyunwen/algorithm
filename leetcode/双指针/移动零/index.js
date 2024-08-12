/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
};

// 思路：快慢指针

// 时间复杂度：O(n)
// 指针i不断向右移动，遇到非0就和j交换，j再往前移动
// 这样所有非0元素都被移到了前面
// 空间复杂度：O(1)

// 测试用例
const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // [1, 3, 12, 0, 0]
