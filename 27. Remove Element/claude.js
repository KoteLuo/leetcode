/**
 * 移除陣列中所有等於 val 的元素（原地操作）
 * @param {number[]} nums - 輸入陣列
 * @param {number} val - 要移除的值
 * @return {number} - 不等於 val 的元素個數
 */
function removeElement(nums, val) {
    let k = 0; // 用來追蹤不等於 val 的元素應該放置的位置
    
    // 遍歷整個陣列
    for (let i = 0; i < nums.length; i++) {
        // 如果當前元素不等於 val
        if (nums[i] !== val) {
            // 將此元素移動到位置 k
            nums[k] = nums[i];
            k++; // k 指向下一個可用位置
        }
        // 如果 nums[i] === val，我們跳過它（不做任何操作）
    }
    
    return k; // 返回不等於 val 的元素個數
}

// 測試範例
console.log("=== 測試範例 ===");

// 範例 1
let nums1 = [3, 2, 2, 3];
let val1 = 3;
console.log(`範例 1:`);
console.log(`輸入: nums = [${nums1}], val = ${val1}`);
let k1 = removeElement(nums1, val1);
console.log(`輸出: k = ${k1}, nums = [${nums1.slice(0, k1)}]`);
console.log(`完整陣列: [${nums1}]`);
console.log();

// 範例 2
let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
console.log(`範例 2:`);
console.log(`輸入: nums = [${nums2}], val = ${val2}`);
let k2 = removeElement(nums2, val2);
console.log(`輸出: k = ${k2}, nums = [${nums2.slice(0, k2)}]`);
console.log(`完整陣列: [${nums2}]`);
console.log();

// 邊界情況測試
console.log("=== 邊界情況測試 ===");

// 空陣列
let nums3 = [];
let val3 = 1;
console.log(`空陣列: nums = [], val = ${val3}`);
let k3 = removeElement(nums3, val3);
console.log(`結果: k = ${k3}`);
console.log();

// 所有元素都等於 val
let nums4 = [2, 2, 2, 2];
let val4 = 2;
console.log(`所有元素都等於 val: nums = [${nums4}], val = ${val4}`);
let k4 = removeElement(nums4, val4);
console.log(`結果: k = ${k4}, nums = [${nums4.slice(0, k4)}]`);
console.log();

// 沒有元素等於 val
let nums5 = [1, 3, 5, 7];
let val5 = 2;
console.log(`沒有元素等於 val: nums = [${nums5}], val = ${val5}`);
let k5 = removeElement(nums5, val5);
console.log(`結果: k = ${k5}, nums = [${nums5.slice(0, k5)}]`);