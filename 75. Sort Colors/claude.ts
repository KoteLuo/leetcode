/**
 * Problem: Sort Colors (LeetCode 75)
 * Given an array with n objects colored red, white or blue,
 * sort them in-place so that objects of the same color are adjacent,
 * with colors in order red (0), white (1), and blue (2).
 */

function sortColors(nums: number[]): void {
  let low = 0;      // pointer for 0s
  let mid = 0;      // current element
  let high = nums.length - 1;  // pointer for 2s
  
  while (mid <= high) {
    if (nums[mid] === 0) {
      // Swap with low pointer and move both forward
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // Just move mid forward
      mid++;
    } else {
      // nums[mid] === 2
      // Swap with high pointer and move high backward
      [nums[high], nums[mid]] = [nums[mid], nums[high]];
      high--;
      // Don't increment mid as we need to check swapped element
    }
  }
}

// Test cases
const test1 = [2, 0, 2, 1, 1, 0];
sortColors(test1);
console.log("Test 1:", test1); // [0, 0, 1, 1, 2, 2]

const test2 = [2, 0, 1];
sortColors(test2);
console.log("Test 2:", test2); // [0, 1, 2]

const test3 = [0];
sortColors(test3);
console.log("Test 3:", test3); // [0]

const test4 = [1, 2, 0];
sortColors(test4);
console.log("Test 4:", test4); // [0, 1, 2]