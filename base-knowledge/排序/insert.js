/**
 * 插入排序
 * @param {Array} nums
 * @description
 * 思路：
 * 每次循环将当前元素插入到已排序区间的正确位置。
 *
 * 特性：
 * 时间复杂度：平均情况：O(n^2)， 最好情况：(n) （数组完全有序）
 * 空间复杂度：O(1)
 * 稳定排序
 */
function insertionSort(nums) {
  // 外循环：已排序区间为 [0, i-1]
  for (let i = 1; i < nums.length; i++) {
    let base = nums[i],
      j = i - 1;
    // 内循环：将 base 插入到已排序区间 [0, i-1] 中的正确位置
    while (j >= 0 && nums[j] > base) {
      nums[j + 1] = nums[j]; // 将 nums[j] 向右移动一位
      j--;
    }
    nums[j + 1] = base; // 将 base 赋值到正确位置
  }
}

const nums = [3, 2, 1, 5, 4];
insertionSort(nums);
console.log(nums);
