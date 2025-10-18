解釋hashmap的ts語法，看不懂，好像跟two sum的const numMap: Map<number, number> = new Map();又不同好問題！讓我解釋這兩種在 TypeScript 中表示 hash map 的不同語法：TypeScript HashMap 語法比較Code // ========================================
// 方法 1: Record (物件字面量)
// ========================================
const charCount: Record<string, number> = {};

// 新增/更新
charCount['a'] = 1;
charCount['b'] = 2;

// 讀取
console.log(charCount['a']); // 1

兩種語法的核心差異
1. Record<string, number> (物件字面量)
typescriptconst charCount: Record<string, number> = {};

這是 TypeScript 的型別定義，實際上是個普通 JavaScript 物件
Record<K, V> 表示：key 是 K 類型，value 是 V 類型
操作方式：obj['key'] 或 obj.key
限制：key 只能是 string 或 number

2. Map<number, number> (ES6 Map)
typescriptconst numMap: Map<number, number> = new Map();

這是 JavaScript 的 Map 類別（ES6 引入）
需要用 new Map() 建立實例
操作方式：.set(), .get(), .has(), .delete()
優勢：key 可以是任何類型（物件、陣列、函數等）

為什麼用不同的？
Valid Anagram 用 Record

Key 是字元（string），完全符合 Record 的限制
語法更簡單：charCount[char]++
效能稍快（物件存取通常比 Map 快一點點）

Two Sum 用 Map

可以用 Record 也可以，但 Map 有更清楚的 API
.has() 比 if (obj[key]) 更明確
習慣問題，兩者都可以

我的建議

字串作為 key：用 Record 比較簡潔
需要物件/陣列作為 key：必須用 Map
需要明確的存在檢查：Map.has() 比 obj[key] 清楚

兩種方式都正確，選你覺得舒服的就好！
// ========================================
// 方法 1: Record (物件字面量)
// ========================================
const charCount: Record<string, number> = {};

// 新增/更新
charCount['a'] = 1;
charCount['b'] = 2;

// 讀取
console.log(charCount['a']); // 1

// 檢查是否存在
if (charCount['a']) {
    console.log('exists');
}

// 刪除
delete charCount['a'];

console.log("Record:", charCount); // { b: 2 }


// ========================================
// 方法 2: Map (ES6 Map 物件)
// ========================================
const numMap: Map<number, number> = new Map();

// 新增/更新 - 使用 .set()
numMap.set(1, 10);
numMap.set(2, 20);

// 讀取 - 使用 .get()
console.log(numMap.get(1)); // 10

// 檢查是否存在 - 使用 .has()
if (numMap.has(1)) {
    console.log('exists');
}

// 刪除 - 使用 .delete()
numMap.delete(1);

console.log("Map:", numMap); // Map(1) { 2 => 20 }


// ========================================
// 主要差異比較
// ========================================

// 1. 宣告方式
const obj: Record<string, number> = {};        // 物件字面量
const map: Map<number, number> = new Map();    // 需要 new

// 2. 操作方式
obj['key'] = 123;           // 用方括號
map.set('key', 123);        // 用 .set() 方法

// 3. Key 的類型
const objMap: Record<string, number> = {};     // Key 只能是 string
const realMap: Map<any, number> = new Map();   // Key 可以是任何類型
realMap.set(1, 100);        // 數字 key ✓
realMap.set({x: 1}, 200);   // 物件 key ✓
realMap.set([1,2], 300);    // 陣列 key ✓

// 4. 實際使用範例
function twoSum(nums: number[], target: number): number[] {
    const numMap: Map<number, number> = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i];
        }
        
        numMap.set(nums[i], i);
    }
    
    return [];
}

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    const charCount: Record<string, number> = {};
    
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (const char of t) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }
    
    return true;
}

// 測試
console.log("\nTwo Sum:", twoSum([2, 7, 11, 15], 9));     // [0, 1]
console.log("Is Anagram:", isAnagram("anagram", "nagaram")); // true