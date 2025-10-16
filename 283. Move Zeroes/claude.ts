/**
 * LeetCode 283. Move Zeroes - Solution 1: Basic Swap
 * Time: O(n), Space: O(1)
 * Swaps: 可能較多（即使 left === right 也會交換）
 */
function moveZeroes(nums: number[]): void {
  let left = 0;
  
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
}

/**
 * Solution 2: Optimized - 避免不必要的交換
 * Time: O(n), Space: O(1)
 * Swaps: 更少（只在 left !== right 時交換）
 */
function moveZeroesOptimized(nums: number[]): void {
  let left = 0;
  
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      if (left !== right) {  // 只在需要時才交換
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
      left++;
    }
  }
}

/**
 * Solution 3: Two-Pass - 最直觀的寫法
 * Time: O(n), Space: O(1)
 * 先移動非零元素，再填充零
 */
function moveZeroesTwoPass(nums: number[]): void {
  let left = 0;
  
  // Pass 1: 移動所有非零元素到前面
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[left++] = nums[i];
    }
  }
  
  // Pass 2: 剩餘位置填充 0
  for (let i = left; i < nums.length; i++) {
    nums[i] = 0;
  }
}

// 測試比較三種方法
console.log("=== Solution 1: Basic Swap ===");
const test1 = [0, 1, 0, 3, 12];
moveZeroes(test1);
console.log("Result:", test1); // [1, 3, 12, 0, 0]

console.log("\n=== Solution 2: Optimized (避免不必要交換) ===");
const test2 = [0, 1, 0, 3, 12];
moveZeroesOptimized(test2);
console.log("Result:", test2); // [1, 3, 12, 0, 0]

console.log("\n=== Solution 3: Two-Pass (最直觀) ===");
const test3 = [0, 1, 0, 3, 12];
moveZeroesTwoPass(test3);
console.log("Result:", test3); // [1, 3, 12, 0, 0]

// 邊界測試
console.log("\n=== Edge Cases ===");
const edge1 = [0];
moveZeroes(edge1);
console.log("Single zero:", edge1); // [0]

const edge2 = [1, 2, 3];
moveZeroes(edge2);
console.log("No zeros:", edge2); // [1, 2, 3]

const edge3 = [0, 0, 1];
moveZeroes(edge3);
console.log("Multiple zeros:", edge3); // [1, 0, 0]