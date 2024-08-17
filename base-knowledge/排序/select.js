/**
 * 选择排序
 * @param {Array} nums
 * @description
 * 思路：
 * 每次循环将当前区间的最小树素移动至该区间的最左端
 *
 * 特性：
 * 时间复杂度：平均情况：O(n^2)
 * 空间复杂度：O(1)
 * 非稳定排序
 */
const selectionSort = (nums) => {
  const len = nums.length;
  if (len <= 1) {
    return nums;
  }
  // 外循环：未排序区间为 [i, n-1]
  for (let i = 0; i < len - 1; i++) {
    // 内循环：将未排序区间 [i + 1, n-1] 中的最小元素交换至该区间的最左端
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    [nums[i], nums[min]] = [nums[min], nums[i]];
  }
};

const nums = [3, 2, 1, 5, 4];
selectionSort(nums);
console.log(nums);
