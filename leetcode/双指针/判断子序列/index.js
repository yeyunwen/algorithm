/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const sl = s.length;

  let j = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[j] === t[i]) {
      j++;
      if (j === sl) {
        return true;
      }
    }
  }
  return false;
};

// 思路：快慢指针
// 快指针i 慢指针j
// 快指针i 遍历t 慢指针j 遍历s
// 如果s[j] === t[i] 说明是子序列 慢指针j++
// 如果j === sl 说明s是t的子序列
// 时间复杂度：O(n)
// 空间复杂度：O(1)

// 测试用例
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
