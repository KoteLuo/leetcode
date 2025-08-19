// 展開運算符 (Spread Operator) 語法解釋

// 1. 基本概念：三個點 (...) 
// 用來「展開」或「散布」可迭代對象（如陣列）的元素

// 範例：原始陣列
let digits = [0, 0, 0];
console.log("原始 digits:", digits); // [0, 0, 0]

// 2. 展開運算符的使用
console.log("使用展開運算符:");
console.log("...digits 的效果:", ...digits); // 0 0 0 (不是陣列，是個別元素)

// 3. 在陣列中使用展開運算符
let newArray = [1, ...digits];
console.log("new array [1, ...digits]:", newArray); // [1, 0, 0, 0]

// 4. 步驟分解說明
console.log("\n步驟分解:");
console.log("步驟 1: digits =", digits);
console.log("步驟 2: ...digits 展開成個別元素:", "0, 0, 0");
console.log("步驟 3: [1, ...digits] 等同於 [1, 0, 0, 0]");

// 5. 更多範例
console.log("\n更多範例:");

// 範例 1: 在開頭加元素
let arr1 = [2, 3, 4];
let result1 = [1, ...arr1];
console.log("[1, ...arr1]:", result1); // [1, 2, 3, 4]

// 範例 2: 在結尾加元素
let arr2 = [1, 2, 3];
let result2 = [...arr2, 4];
console.log("[...arr2, 4]:", result2); // [1, 2, 3, 4]

// 範例 3: 在中間加元素
let arr3 = [1, 2];
let arr4 = [4, 5];
let result3 = [...arr3, 3, ...arr4];
console.log("[...arr3, 3, ...arr4]:", result3); // [1, 2, 3, 4, 5]

// 6. 與其他方法的比較
console.log("\n與其他方法的比較:");

// 方法 1: 使用展開運算符 (推薦)
let method1 = [1, ...digits];
console.log("方法 1 (展開運算符):", method1);

// 方法 2: 使用 unshift() (會修改原陣列)
let digitsCopy = [...digits]; // 先複製避免修改原陣列
digitsCopy.unshift(1);
console.log("方法 2 (unshift):", digitsCopy);

// 方法 3: 使用 concat()
let method3 = [1].concat(digits);
console.log("方法 3 (concat):", method3);

// 7. Plus One 問題中的應用
function demonstratePlusOneCase() {
    console.log("\nPlus One 問題中的應用:");
    let allNines = [9, 9, 9];
    console.log("當所有數字都是 9:", allNines);
    
    // 所有數字變成 0
    for (let i = 0; i < allNines.length; i++) {
        allNines[i] = 0;
    }
    console.log("處理後的陣列:", allNines); // [0, 0, 0]
    
    // 在前面加上 1
    let result = [1, ...allNines];
    console.log("最終結果 [1, ...allNines]:", result); // [1, 0, 0, 0]
    console.log("代表數字: 999 + 1 = 1000");
}

demonstratePlusOneCase();

// 8. 常見錯誤
console.log("\n常見錯誤示範:");
let testArray = [1, 2, 3];

// 錯誤：這樣不會創建新陣列
// console.log(1, ...testArray); // 這會輸出: 1 1 2 3 (四個分離的值)

// 正確：用方括號包圍創建新陣列
console.log("正確:", [1, ...testArray]); // [1, 1, 2, 3]

// 9. 性能注意事項
console.log("\n性能注意事項:");
console.log("展開運算符創建新陣列，時間複雜度 O(n)");
console.log("空間複雜度也是 O(n)，因為創建了新陣列");