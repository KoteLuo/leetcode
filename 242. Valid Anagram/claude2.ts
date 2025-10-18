// 範例：s = "tea", t = "eat"

function isAnagramDetailed(s: string, t: string): boolean {
    console.log(`\n比較: s="${s}", t="${t}"\n`);
    
    // 步驟 0: 長度檢查
    if (s.length !== t.length) {
        console.log("長度不同，不是 anagram");
        return false;
    }
    
    const charCount: Record<string, number> = {};
    console.log("初始 charCount:", charCount); // {}
    
    
    // ==========================================
    // 第一個 for: 計算 s 中每個字元出現次數
    // ==========================================
    console.log("\n【第一個 for 迴圈】統計 s 的字元：");
    for (const char of s) {
        // (charCount[char] || 0) 的意思：
        // - 如果 charCount[char] 存在，用它的值
        // - 如果不存在（undefined），用 0
        
        const oldCount = charCount[char] || 0;
        charCount[char] = oldCount + 1;
        
        console.log(`  處理 '${char}': ${oldCount} + 1 = ${charCount[char]}`);
        console.log(`  目前 charCount:`, JSON.stringify(charCount));
    }
    
    console.log("\n第一個 for 結束後的 charCount:", charCount);
    // 結果: { t: 1, e: 1, a: 1 }
    
    
    // ==========================================
    // 第二個 for: 檢查 t 是否有相同的字元組成
    // ==========================================
    console.log("\n【第二個 for 迴圈】檢查並扣除 t 的字元：");
    for (const char of t) {
        console.log(`  處理 '${char}':`);
        
        // 檢查：這個字元在 charCount 中存在嗎？計數 > 0 嗎？
        if (!charCount[char]) {
            console.log(`    ❌ '${char}' 不存在或已用完！不是 anagram`);
            return false;
        }
        
        // 存在的話，扣掉 1
        charCount[char]--;
        console.log(`    ✓ 扣掉 1，剩餘: ${charCount[char]}`);
        console.log(`    目前 charCount:`, JSON.stringify(charCount));
    }
    
    console.log("\n第二個 for 結束後的 charCount:", charCount);
    // 結果: { t: 0, e: 0, a: 0 }
    
    console.log("\n✅ 是 anagram！");
    return true;
}


// ==========================================
// 測試案例
// ==========================================

// 案例 1: true - 是 anagram
isAnagramDetailed("tea", "eat");

console.log("\n" + "=".repeat(60));

// 案例 2: false - 不是 anagram
isAnagramDetailed("rat", "car");


// ==========================================
// 為什麼不用排序？
// ==========================================
console.log("\n" + "=".repeat(60));
console.log("\n【為什麼這個方法不用排序？】\n");

console.log("排序方法:");
console.log('  "tea" 排序 → "aet"');
console.log('  "eat" 排序 → "aet"');
console.log('  比較: "aet" === "aet" ✓');
console.log('  時間複雜度: O(n log n) - 因為排序很慢\n');

console.log("計數方法 (我們用的):");
console.log('  統計 "tea": {t:1, e:1, a:1}');
console.log('  檢查 "eat": 每個字元都能對應上，扣完剛好全是 0');
console.log('  時間複雜度: O(n) - 只掃兩次，更快！\n');

console.log("核心概念:");
console.log("  如果兩個字串是 anagram，");
console.log("  它們的【每個字元出現次數】一定完全相同！");
console.log("  我們不需要知道字元的順序，只需要知道數量。");