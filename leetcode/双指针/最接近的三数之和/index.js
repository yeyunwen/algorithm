/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const l = nums.length;
  if (l <= 3) {
    return nums.reduce((total, cur) => total + cur, 0);
  }

  nums.sort((a, b) => a - b); // 排序

  let min = Infinity;
  let res;
  for (let i = 0; i < l; i++) {
    const base = nums[i]; // 基数
    let left = i + 1;
    let right = l - 1;
    while (left < right) {
      let sum = base + nums[left] + nums[right];
      if (sum === target) {
        return sum;
      }
      const diff = Math.abs(sum - target);
      if (diff < min) {
        min = diff; // 最小差值
        res = sum; // 更新res
      }
      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};

// 思路 碰撞指针
// 基数a 左右指针 pb pc
// 相加和大于target 右指针左移
// 相加和小于target 左指针右移
// 相加和等于target 返回

console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
console.log(threeSumClosest([0, 0, 0], 1)); // 0
