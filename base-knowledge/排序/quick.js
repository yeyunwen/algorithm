/**
 * 快速排序
 * @param {number[]} nums
 * @returns {number[]}
 * @description
 * 思路：
 * 1. 选择一个基准元素
 * 2. 遍历数组，将小于基准元素的元素放在左边，大于基准元素的元素放在右边
 * 3. 递归左右两个数组
 *
 * 特性：
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(n)
 * 不稳定排序
 */
const quickSort = (nums) => {
  const len = nums.length;
  if (len <= 1) return nums;
  const mid = Math.floor(len / 2);
  const left = [];
  const right = [];
  for (let i = 0; i < len; i++) {
    if (i === mid) continue;
    if (nums[i] <= nums[mid]) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return quickSort(left).concat(nums[mid], quickSort(right));
};

const nums = [3, 2, 1, 5, 4];
console.log(quickSort(nums));
