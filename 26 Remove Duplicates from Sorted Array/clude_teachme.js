// 你提到的方法：使用額外的 Array X
function removeDuplicatesWithArray(nums) {
    if (nums.length === 0) return 0;
    
    let X = []; // 額外的陣列來存放唯一元素
    let writeIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // 檢查當前元素是否已經在 X 中
        if (!X.includes(nums[i])) {
            X.push(nums[i]); // 加入到 X 中
            nums[writeIndex] = nums[i]; // 同時更新原陣列
            writeIndex++;
        }
    }
    
    return writeIndex;
}

// 改進版本 1：只用額外陣列，不修改原陣列
function removeDuplicatesArrayOnly(nums) {
    if (nums.length === 0) return [];
    
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (!result.includes(nums[i])) {
            result.push(nums[i]);
        }
    }
    
    return result; // 直接返回新陣列
}

// 改進版本 2：使用 indexOf 而不是 includes（功能相同但更明確）
function removeDuplicatesWithIndexOf(nums) {
    if (nums.length === 0) return 0;
    
    let unique = [];
    let writeIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (unique.indexOf(nums[i]) === -1) { // 沒找到 = -1
            unique.push(nums[i]);
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    
    return writeIndex;
}

// 比較用的 Set 方法
function removeDuplicatesWithSet(nums) {
    if (nums.length === 0) return 0;
    
    const seen = new Set();
    let writeIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (!seen.has(nums[i])) {
            seen.add(nums[i]);
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    
    return writeIndex;
}

// 性能測試函數
function performanceTest() {
    console.log("=== 你的方法 vs 其他方法比較 ===\n");
    
    const testCases = [
        {
            name: "小陣列",
            data: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
        },
        {
            name: "中等陣列", 
            data: Array.from({length: 1000}, () => Math.floor(Math.random() * 100))
        }
    ];
    
    testCases.forEach(testCase => {
        console.log(`=== ${testCase.name}: ${testCase.data.length} 個元素 ===`);
        
        // 測試你的方法
        let nums1 = [...testCase.data];
        console.time("你的方法 (Array + includes)");
        let k1 = removeDuplicatesWithArray(nums1);
        console.timeEnd("你的方法 (Array + includes)");
        console.log(`結果: k=${k1}, 前5個: [${nums1.slice(0, Math.min(5, k1)).join(', ')}]`);
        
        // 測試 Set 方法
        let nums2 = [...testCase.data];
        console.time("Set 方法");
        let k2 = removeDuplicatesWithSet(nums2);
        console.timeEnd("Set 方法");
        console.log(`結果: k=${k2}, 前5個: [${nums2.slice(0, Math.min(5, k2)).join(', ')}]`);
        
        console.log();
    });
    
    console.log("=== 複雜度分析 ===");
    console.log("你的方法 (Array + includes):");
    console.log("  時間複雜度: O(n²) - 每次 includes() 都要掃描整個陣列");
    console.log("  空間複雜度: O(k) - k 是唯一元素的數量");
    console.log();
    console.log("Set 方法:");
    console.log("  時間複雜度: O(n) - Set 的 has() 是 O(1)");
    console.log("  空間複雜度: O(k) - k 是唯一元素的數量");
    console.log();
    
    console.log("=== 改進建議 ===");
    console.log("1. 主要問題：Array.includes() 是 O(n) 操作");
    console.log("   - 每次都要線性搜尋整個陣列");
    console.log("   - 導致整體變成 O(n²) 複雜度");
    console.log();
    console.log("2. 改進方案：");
    console.log("   - 用 Set 取代 Array：has() 是 O(1)");
    console.log("   - 用 Object 當作 hash map：obj[key] 是 O(1)");
    console.log("   - 用 Map：has() 是 O(1)");
    console.log();
    console.log("3. 你的方法優點：");
    console.log("   - 邏輯清晰易懂");
    console.log("   - 保持原始順序");
    console.log("   - 概念上直觀");
}

// 示範物件當作 hash map 的改進版本
function removeDuplicatesWithObject(nums) {
    if (nums.length === 0) return 0;
    
    const seen = {}; // 用物件當作 hash map
    let writeIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] in seen)) {
            seen[nums[i]] = true;
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    
    return writeIndex;
}

// 執行測試
performanceTest();

// 簡單功能測試
console.log("=== 功能驗證 ===");
const testArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
console.log("原始陣列:", testArray);

let nums = [...testArray];
let k = removeDuplicatesWithArray(nums);
console.log("你的方法結果:", `k=${k}, array=[${nums.slice(0, k).join(', ')}]`);

// 展示用物件的改進版本
nums = [...testArray];
k = removeDuplicatesWithObject(nums);
console.log("物件改進版:", `k=${k}, array=[${nums.slice(0, k).join(', ')}]`);


console.log("=== Set 是什麼？ ===");
console.log("Set 是一個只存放「唯一值」的集合，不允許重複");
console.log();

// 1. Set 基本用法
const mySet = new Set();

// 添加元素
mySet.add(1);
mySet.add(2);
mySet.add(2); // 重複的不會被加入
mySet.add("hello");
mySet.add(true);

console.log("Set 內容:", mySet); // Set(4) {1, 2, "hello", true}
console.log("Set 大小:", mySet.size); // 4

// 檢查元素是否存在 - O(1) 時間複雜度！
console.log("mySet.has(2):", mySet.has(2)); // true
console.log("mySet.has(3):", mySet.has(3)); // false

// 刪除元素
mySet.delete(2);
console.log("刪除 2 後:", mySet);

console.log("\n" + "=".repeat(50) + "\n");

console.log("=== Map 是什麼？ ===");
console.log("Map 是存放「鍵值對 (key-value)」的資料結構");
console.log();

// 2. Map 基本用法
const myMap = new Map();

// 設定鍵值對
myMap.set("name", "Alice");
myMap.set("age", 25);
myMap.set(1, "數字鍵");
myMap.set(true, "布林鍵");

console.log("Map 內容:", myMap);
console.log("Map 大小:", myMap.size);

// 取得值 - O(1) 時間複雜度！
console.log("myMap.get('name'):", myMap.get("name")); // "Alice"
console.log("myMap.get('age'):", myMap.get("age"));   // 25

// 檢查鍵是否存在
console.log("myMap.has('name'):", myMap.has("name")); // true
console.log("myMap.has('height'):", myMap.has("height")); // false

console.log("\n" + "=".repeat(50) + "\n");

console.log("=== Object 當作 Hash Map ===");
console.log("JavaScript 物件本質上就是一個 hash map！");
console.log();

// 3. Object 當作 hash map
const myObj = {};

// 設定屬性（就像設定 key-value）
myObj["apple"] = true;
myObj["banana"] = true;
myObj[123] = "數字當鍵";
// 注意：物件的鍵會被轉成字串

console.log("物件內容:", myObj);

// 檢查屬性是否存在 - O(1) 時間複雜度！
console.log("'apple' in myObj:", "apple" in myObj); // true
console.log("'orange' in myObj:", "orange" in myObj); // false

// 或者用這種方式檢查
console.log("myObj.hasOwnProperty('apple'):", myObj.hasOwnProperty("apple")); // true
console.log("myObj['apple'] !== undefined:", myObj["apple"] !== undefined); // true

console.log("\n" + "=".repeat(50) + "\n");

console.log("=== 為什麼是 O(1)？Hash Table 原理 ===");
console.log("這三種資料結構內部都使用 Hash Table（雜湊表）");
console.log();
console.log("Hash Table 工作原理：");
console.log("1. 把 key 透過 hash function 轉換成數字 (hash code)");
console.log("2. 用這個數字當作陣列的 index");
console.log("3. 直接存取該位置，不用搜尋");
console.log();
console.log("範例：");
console.log("  key 'apple' → hash function → 42 → 存在 table[42]");
console.log("  要找 'apple' → hash function → 42 → 直接查 table[42]");
console.log("  不用一個一個找，所以是 O(1)！");

console.log("\n" + "=".repeat(50) + "\n");

console.log("=== 實際比較：解決重複元素問題 ===");

const testArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
console.log("測試陣列:", testArray);
console.log();

// 方法 1：Array + includes (你原本的方法) - O(n²)
console.log("方法 1：Array + includes (你原本的方法)");
function useArray() {
    const seen = [];
    const result = [];
    
    for (let num of testArray) {
        console.log(`  檢查 ${num} 是否在 [${seen.join(', ')}] 中...`);
        if (!seen.includes(num)) { // includes 要掃描整個陣列！
            seen.push(num);
            result.push(num);
            console.log(`    沒有，加入！現在 seen = [${seen.join(', ')}]`);
        } else {
            console.log(`    有了，跳過`);
        }
    }
    return result;
}
const result1 = useArray();
console.log("結果:", result1);
console.log();

// 方法 2：Set - O(n)
console.log("方法 2：Set");
function useSet() {
    const seen = new Set();
    const result = [];
    
    for (let num of testArray) {
        console.log(`  檢查 ${num} 是否在 Set 中... (O(1) 操作)`);
        if (!seen.has(num)) { // has 是 O(1)！
            seen.add(num);
            result.push(num);
            console.log(`    沒有，加入！`);
        } else {
            console.log(`    有了，跳過`);
        }
    }
    return result;
}
const result2 = useSet();
console.log("結果:", result2);
console.log();

// 方法 3：Object 當 hash map - O(n)
console.log("方法 3：Object 當 hash map");
function useObject() {
    const seen = {}; // 空物件當作 hash map
    const result = [];
    
    for (let num of testArray) {
        console.log(`  檢查 ${num} 是否是 seen 的屬性... (O(1) 操作)`);
        if (!(num in seen)) { // 'in' 操作是 O(1)！
            seen[num] = true; // 設定屬性
            result.push(num);
            console.log(`    沒有，加入！seen = {${Object.keys(seen).join(', ')}}`);
        } else {
            console.log(`    有了，跳過`);
        }
    }
    return result;
}
const result3 = useObject();
console.log("結果:", result3);
console.log();

console.log("=== Set vs Map vs Object 比較表 ===");
console.log("┌─────────────┬─────────────┬─────────────┬─────────────┐");
console.log("│   特性      │    Set      │    Map      │   Object    │");
console.log("├─────────────┼─────────────┼─────────────┼─────────────┤");
console.log("│ 存放什麼    │   唯一值    │   鍵值對    │   鍵值對    │");
console.log("│ 主要用途    │ 去重、集合  │ 任意映射    │ 屬性存取    │");
console.log("│ 鍵的類型    │     -       │   任意      │ 字串/Symbol │");
console.log("│ 檢查存在    │   has()     │   has()     │  in / []    │");
console.log("│ 時間複雜度  │   O(1)      │   O(1)      │   O(1)      │");
console.log("│ 可迭代      │    是       │    是       │ 需Object.keys│");
console.log("│ 大小        │   size      │   size      │ 需計算      │");
console.log("└─────────────┴─────────────┴─────────────┴─────────────┘");

console.log("\n=== 什麼時候用哪個？ ===");
console.log("• Set：只關心「有沒有」，不需要額外資訊");
console.log("  - 去除重複元素 ✓");
console.log("  - 檢查會員資格 ✓");
console.log();
console.log("• Map：需要「鍵對應到值」的關係");
console.log("  - 計算每個元素出現次數");
console.log("  - 任意類型的鍵值映射");
console.log();
console.log("• Object：傳統的屬性存取，鍵是字串");
console.log("  - 簡單的字串到值的映射");
console.log("  - 相容性好，語法簡潔");

console.log("\n=== 去重問題的最佳選擇 ===");
console.log("對於去除重複元素，Set 是最佳選擇：");
console.log("• 語意清晰：專門用來存放唯一值");
console.log("• 性能優秀：O(1) 的 has() 操作");
console.log("• 程式碼簡潔：不需要設定值，只要 add()");

console.log("\n=== 一行解決去重問題 ===");
const uniqueArray = [...new Set(testArray)];
console.log("原陣列:", testArray);
console.log("去重後:", uniqueArray);
console.log("程式碼: [...new Set(testArray)]");