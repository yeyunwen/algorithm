// 思路：
// 每次循环将当前区间的最大树素移动至该区间的最右端

// 优化：
// 我们发现，如果某轮“冒泡”中没有执行任何交换操作，说明数组已经完成排序，可直接返回结果。
// 因此，可以增加一个标志位 flag 来监测这种情况，一旦出现就立即返回。
// 经过优化，冒泡排序的最差时间复杂度和平均时间复杂度仍为；但当输入数组完全有序时，可达到最佳时间复杂度 。

// 特性
// 时间复杂度：平均情况：O(n^2)， 最好情况：(n) （数组完全有序）
// 空间复杂度：O(1)
// 稳定排序

/**
 * 冒泡排序
 * @param {Array} nums
 */
const bubbleSort = (nums) => {
  // 外循环：未排序区间为 [0, i]
  for (let i = nums.length - 1; i > 0; i--) {
    let flag = false; // 效率优化
    // 内循环：将未排序区间 [0, i] 中的最大元素交换至该区间的最右端
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        flag = true;
      }
    }
    if (!flag) {
      break;
    }
  }
};

const nums = [3, 2, 1, 5, 4];
bubbleSort(nums);
console.log(nums);
