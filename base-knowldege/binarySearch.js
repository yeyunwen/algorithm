// const binarySearch = (arr, target) => {
//   let min = 0;
//   let max = arr.length - 1;
//   while (min <= max) {
//     let mid = Math.floor((min + max) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[min] < target) {
//       min = mid + 1;
//     } else {
//       max = mid - 1;
//     }
//   }
//   return null;
// };

const binarySearch = (arr, target, min = 0, max = arr.length - 1) => {
  if (min > max) {
    return null;
  }
  const mid = Math.floor((min + max) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, max);
  } else {
    return binarySearch(arr, target, min, mid - 1);
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 10));
