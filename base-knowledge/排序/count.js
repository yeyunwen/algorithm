/**
 * 计数排序
 * @param {number[]} arr
 * @returns {number[]}
 */
const countingSort = (arr) => {
  // 1. 统计数组最大元素 m
  let m = 0;
  for (const num of nums) {
    m = Math.max(m, num);
  }
  // 2. 统计各数字的出现次数
  // counter[num] 代表 num 的出现次数
  const counter = new Array(m + 1).fill(0);
  for (const num of nums) {
    counter[num]++;
  }
  // 3. 遍历 counter ，将各元素填入原数组 nums
  let i = 0;
  for (let num = 0; num < m + 1; num++) {
    for (let j = 0; j < counter[num]; j++, i++) {
      nums[i] = num;
    }
  }
};

// 测试用例
const nums = [5, 3, 6, 2, 10];
countingSort(nums);
console.log(nums); // [2, 3, 5, 6, 10]
