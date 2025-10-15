// 原始解法：會覆蓋元素
function removeElement(nums: number[], val: number): number {
    let k = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    
    return k;
}

// 新解法：保持所有元素，只是移到後方
function removeElementKeepAll(nums: number[], val: number): number {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        if (nums[left] === val) {
            // 找到要移除的元素，和右邊交換
            [nums[left], nums[right]] = [nums[right], nums[left]];
            right--; // 右指針左移
        } else {
            // 不是要移除的元素，左指針右移
            left++;
        }
    }
    
    return left; // left 就是非 val 元素的數量
}

// Test cases
console.log("=== 原始解法（會覆蓋） ===");
const test1 = [3, 2, 2, 3];
const val1 = 3;
console.log("Input:", [...test1], "Val:", val1);
const k1 = removeElement([...test1], val1);
const arr1 = [...test1];
removeElement(arr1, val1);
console.log("Output:", k1, "完整陣列:", arr1);

console.log("\n=== 新解法（保持完整） ===");
const test2 = [3, 2, 2, 3];
const val2 = 3;
console.log("Input:", [...test2], "Val:", val2);
const k2 = removeElementKeepAll(test2, val2);
console.log("Output:", k2, "完整陣列:", test2);
console.log("前", k2, "個元素（有效）:", test2.slice(0, k2));
console.log("後面元素（被移除）:", test2.slice(k2));

console.log("\n=== 測試案例 2 ===");
const test3 = [0, 1, 2, 2, 3, 0, 4, 2];
const val3 = 2;
console.log("Input:", [...test3], "Val:", val3);
const k3 = removeElementKeepAll(test3, val3);
console.log("Output:", k3, "完整陣列:", test3);
console.log("前", k3, "個元素（有效）:", test3.slice(0, k3));
console.log("後面元素（被移除）:", test3.slice(k3));