/**
 * Sort Colors - 所有 In-place 解法比較
 */

// 方法 1: Dutch National Flag (3 Pointers) - 最優解
function sortColors_3Pointers(nums: number[]): void {
  let low = 0, mid = 0, high = nums.length - 1;
  
  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[high], nums[mid]] = [nums[mid], nums[high]];
      high--;
    }
  }
}

// 方法 2: Two-Pass Counting Sort - 簡單直觀
function sortColors_TwoPass(nums: number[]): void {
  let count0 = 0, count1 = 0, count2 = 0;
  
  // 第一次遍歷：計數
  for (const num of nums) {
    if (num === 0) count0++;
    else if (num === 1) count1++;
    else count2++;
  }
  
  // 第二次遍歷：填充
  let i = 0;
  while (count0-- > 0) nums[i++] = 0;
  while (count1-- > 0) nums[i++] = 1;
  while (count2-- > 0) nums[i++] = 2;
}

// 方法 3: Two Pointers (2-Pass) - 分兩次處理
function sortColors_2Pointers(nums: number[]): void {
  // 第一次：把所有 0 移到前面
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
    }
  }
  
  // 第二次：把所有 1 移到中間（從 left 開始）
  for (let i = left; i < nums.length; i++) {
    if (nums[i] === 1) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
    }
  }
}

// 方法 4: Partition-Based (類似 Quick Sort)
function sortColors_Partition(nums: number[]): void {
  // 先以 1 為 pivot，把 0 移到左邊
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] < 1) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  
  // 再以 2 為 pivot，把 1 移到已排序的 0 後面
  for (let j = i; j < nums.length; j++) {
    if (nums[j] < 2) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
}

// 方法 5: Bubble Sort 優化版 - 教學用
function sortColors_Bubble(nums: number[]): void {
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
}

// 測試所有方法
function testAll() {
  const testCases = [
    [2, 0, 2, 1, 1, 0],
    [2, 0, 1],
    [0],
    [1, 2, 0],
    [2, 2, 1, 0, 1, 0]
  ];
  
  const methods = [
    { name: "3 Pointers (Dutch Flag)", fn: sortColors_3Pointers },
    { name: "Two-Pass Counting", fn: sortColors_TwoPass },
    { name: "2 Pointers (2-Pass)", fn: sortColors_2Pointers },
    { name: "Partition-Based", fn: sortColors_Partition },
    { name: "Bubble Sort", fn: sortColors_Bubble }
  ];
  
  testCases.forEach((test, idx) => {
    console.log(`\n測試案例 ${idx + 1}: [${test}]`);
    methods.forEach(method => {
      const arr = [...test];
      method.fn(arr);
      console.log(`${method.name.padEnd(25)} -> [${arr}]`);
    });
  });
  
  console.log("\n\n=== 方法比較 ===\n");
  console.log("方法                      | 時間複雜度 | 遍歷次數 | 難度 | 推薦度");
  console.log("-".repeat(70));
  console.log("3 Pointers (Dutch Flag)  | O(n)       | 1 次     | 中   | ⭐⭐⭐⭐⭐");
  console.log("Two-Pass Counting        | O(n)       | 2 次     | 易   | ⭐⭐⭐⭐");
  console.log("2 Pointers (2-Pass)      | O(n)       | 2 次     | 易   | ⭐⭐⭐");
  console.log("Partition-Based          | O(n)       | 2 次     | 中   | ⭐⭐⭐");
  console.log("Bubble Sort              | O(n²)      | 多次     | 易   | ⭐ (不推薦)");
}

testAll();