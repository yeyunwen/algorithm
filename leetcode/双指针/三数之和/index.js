/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  const len = nums.length;
  nums.sort((a, b) => a - b); // 生序排序
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      // 第一个数大于0，则三数之和一定大于0，所以结束循环
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      // 如果第一个数和前一个数相同，则跳过，因为我们已经在之前的迭代中考虑过这个元素了。
      continue;
    }
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          // 如果左指针和前一个数相同，则跳过，因为我们已经在之前的迭代中考虑过这个元素了。
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          // 如果右指针和前一个数相同，则跳过，因为我们已经在之前的迭代中考虑过这个元素了。
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};

// 思路：排序+对撞指针

// 排序后，固定一个数，左右指针向中间移动
// 如果和大于0，右指针左移
// 如果和小于0，左指针右移
// 如果和等于0，则添加到结果中，并且左右指针同时移动
// 注意去重

// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
// 测试用例
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 0, 0, 0])); // [[0,0,0]]
