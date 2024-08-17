/**
 * 归并排序
 * @param {number[]} nums
 * @returns {number[]}
 * @description
 * 思路：
 * 1. 递归将数组分成左右两部分
 * 2. 递归终止条件：数组长度为 1 时，返回数组本身
 * 3. 递归合并左右两个有序数组
 *
 * 特性：
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(n)
 * 稳定排序
 */
const mergeSort = (nums) => {
  /**
   * 合并两个有序数组
   * @param {number[]} left
   * @param {number[]} right
   * @returns {number[]}
   */
  const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
      // 把小的的元素加入到结果数组中
      if (left[0] <= right[0]) {
        res.push(left.shift());
      } else {
        res.push(right.shift());
      }
    }
    // 这个时候res中的组数是有序的，left和right肯定有一个为空，非空的数组元素一定比res中的元素大
    return res.concat(left).concat(right);
  };
  const len = nums.length;
  if (len <= 1) return nums; // 递归终止条件
  const mid = Math.floor(len / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

const nums = [3, 2, 1, 5, 4];
console.log(mergeSort(nums));
