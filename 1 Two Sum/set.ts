// Map set() 方法的完整功能展示

// 1. 建立 Map
const userMap = new Map<string, number>();

// 2. 使用 set() 新增資料
console.log("=== 新增資料 ===");
userMap.set("Alice", 25);
userMap.set("Bob", 30);
userMap.set("Charlie", 35);
console.log("新增後的 Map:", userMap);
// 輸出: Map(3) { 'Alice' => 25, 'Bob' => 30, 'Charlie' => 35 }

// 3. 更新已存在的資料
console.log("\n=== 更新資料 ===");
userMap.set("Alice", 26); // Alice 的年齡從 25 更新為 26
console.log("更新 Alice 後:", userMap);
// 輸出: Map(3) { 'Alice' => 26, 'Bob' => 30, 'Charlie' => 35 }

// 4. set() 回傳 Map 本身，支援鏈式呼叫
console.log("\n=== 鏈式呼叫 ===");
const newMap = new Map<string, string>()
    .set("name", "John")
    .set("city", "New York")
    .set("country", "USA");
console.log("鏈式呼叫結果:", newMap);

// 5. 不同型別的 key
console.log("\n=== 不同型別的 key ===");
const mixedMap = new Map<any, string>();
mixedMap.set("string_key", "字串鍵");
mixedMap.set(42, "數字鍵");
mixedMap.set(true, "布林鍵");
mixedMap.set({id: 1}, "物件鍵");
console.log("混合型別 Map:", mixedMap);

// 6. 在 Two Sum 問題中的應用
console.log("\n=== Two Sum 中的應用 ===");
const nums = [2, 7, 11, 15];
const target = 9;
const numMap = new Map<number, number>();

for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log(`i=${i}, nums[i]=${nums[i]}, complement=${complement}`);
    
    if (numMap.has(complement)) {
        console.log(`找到解答: [${numMap.get(complement)}, ${i}]`);
        break;
    }
    
    // 這裡就是 set() 的關鍵用法
    numMap.set(nums[i], i);
    console.log(`儲存: ${nums[i]} => ${i}`);
    console.log("當前 Map 狀態:", numMap);
}

// 7. set() vs 物件屬性設定的比較
console.log("\n=== Map vs Object ===");

// 使用物件
const obj: {[key: string]: number} = {};
obj["key1"] = 1;
obj.key2 = 2;

// 使用 Map
const map = new Map<string, number>();
map.set("key1", 1);
map.set("key2", 2);

console.log("物件:", obj);
console.log("Map:", map);

// Map 的優勢：
// 1. key 可以是任何型別
// 2. 有 size 屬性
// 3. 迭代順序有保證
console.log("Map 大小:", map.size);
console.log("物件大小:", Object.keys(obj).length);