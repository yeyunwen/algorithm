// 思路：
// 每次循环将当前区间的最大树素移动至该区间的最右端

/**
 * 冒泡排序
 * @param {Array} nums
 */
const bubbleSort = (nums) => {
  // 外循环：未排序区间为 [0, i]
  for (let i = nums.length - 1; i > 0; i--) {
    // 内循环：将未排序区间 [0, i] 中的最大元素交换至该区间的最右端
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
};

const nums = [3, 2, 1, 5, 4];
bubbleSort(nums);
console.log(nums);
