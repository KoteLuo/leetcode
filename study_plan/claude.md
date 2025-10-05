# LeetCode 按模式分類學習計畫（3個月）

## 使用說明
- ⭐ = 必做經典題
- 📝 = 例題（先看詳解學習）
- 🔄 = 變化題（練習應用）
- 每個模式花 3-5 天集中練習
- 每天做 1-2 題，週末複習

---

## 第1-2週：陣列基礎 + 雙指針

### 模式1：雙指針 - 相向指針（5題）
**核心概念**：左右兩個指針向中間移動

📝 **例題：Valid Palindrome (#125)** - Easy
- 判斷是否為回文字串
- 學習：左右指針相向而行

⭐ **Two Sum II (#167)** - Medium
- 在有序陣列中找兩數之和
- 學習：利用排序特性移動指針

🔄 **練習題：**
1. Reverse String (#344) - Easy
2. Remove Element (#27) - Easy
3. Container With Most Water (#11) - Medium

**模式總結**：什麼時候用相向指針？
- 陣列已排序
- 需要找配對/組合
- 回文相關問題

---

### 模式2：雙指針 - 快慢指針（5題）
**核心概念**：一個指針走得快，一個走得慢

📝 **例題：Remove Duplicates from Sorted Array (#26)** - Easy
- 刪除重複元素
- 學習：慢指針記錄結果，快指針探索

⭐ **Move Zeroes (#283)** - Easy
- 將 0 移到最後
- 學習：快指針找非零，慢指針記位置

🔄 **練習題：**
1. Remove Element (#27) - Easy
2. Merge Sorted Array (#88) - Easy
3. Sort Colors (#75) - Medium

**模式總結**：什麼時候用快慢指針？
- 原地修改陣列
- 分類/過濾元素
- 連結串列問題

---

## 第3-4週：哈希表（Hash Table）

### 模式3：哈希表 - 計數/查找（6題）
**核心概念**：用 Map/Dict 記錄出現次數或索引

📝 **例題：Two Sum (#1)** - Easy ⭐⭐⭐
- 找兩數之和等於目標值
- 學習：用 HashMap 記錄數字和索引

📝 **例題：Valid Anagram (#242)** - Easy
- 判斷是否為變位詞
- 學習：用 HashMap 計數字母出現次數

🔄 **練習題：**
1. Contains Duplicate (#217) - Easy
2. Contains Duplicate II (#219) - Easy
3. Intersection of Two Arrays II (#350) - Easy
4. Majority Element (#169) - Easy

**模式總結**：什麼時候用哈希表？
- 需要 O(1) 查找
- 計數問題
- 檢查重複/存在性

---

### 模式4：哈希表 - 分組（3題）
**核心概念**：用 HashMap 將相似元素分組

📝 **例題：Group Anagrams (#49)** - Medium
- 將變位詞分組
- 學習：用排序後的字串當 key

🔄 **練習題：**
1. Happy Number (#202) - Easy
2. Isomorphic Strings (#205) - Easy

**模式總結**：用 HashMap 的 key 做分類

---

## 第5-6週：滑動窗口（Sliding Window）

### 模式5：固定大小窗口（4題）
**核心概念**：窗口大小固定，整體移動

📝 **例題：Maximum Average Subarray I (#643)** - Easy
- 找長度為 k 的最大平均值子陣列
- 學習：窗口滑動，減去左邊加上右邊

🔄 **練習題：**
1. Contains Duplicate II (#219) - Easy
2. Defanging an IP Address (#1108) - Easy
3. Find All Anagrams in a String (#438) - Medium

**模式總結**：固定窗口大小 k，逐步滑動

---

### 模式6：可變大小窗口（5題）
**核心概念**：窗口大小動態調整

📝 **例題：Longest Substring Without Repeating Characters (#3)** - Medium ⭐
- 找最長無重複字元子串
- 學習：右指針擴展，左指針收縮

🔄 **練習題：**
1. Minimum Size Subarray Sum (#209) - Medium
2. Longest Repeating Character Replacement (#424) - Medium
3. Permutation in String (#567) - Medium
4. Fruit Into Baskets (#904) - Medium

**模式總結**：
- 右指針擴展窗口
- 不滿足條件時左指針收縮
- 記錄最優解

---

## 第7-8週：陣列操作 + 前綴和

### 模式7：前綴和（Prefix Sum）（5題）
**核心概念**：預處理累加和，快速查詢區間和

📝 **例題：Range Sum Query - Immutable (#303)** - Easy
- 查詢區間和
- 學習：prefix[i] = nums[0] + ... + nums[i-1]

📝 **例題：Subarray Sum Equals K (#560)** - Medium
- 找和為 K 的子陣列個數
- 學習：前綴和 + HashMap

🔄 **練習題：**
1. Running Sum of 1d Array (#1480) - Easy
2. Find Pivot Index (#724) - Easy
3. Product of Array Except Self (#238) - Medium

**模式總結**：什麼時候用前綴和？
- 頻繁查詢區間和
- 子陣列和問題
- 時間複雜度從 O(n) → O(1)

---

### 模式8：陣列操作技巧（5題）
**核心概念**：排序、原地修改、數學技巧

📝 **例題：Merge Intervals (#56)** - Medium
- 合併重疊區間
- 學習：先排序再合併

🔄 **練習題：**
1. Missing Number (#268) - Easy
2. First Missing Positive (#41) - Hard（挑戰）
3. Rotate Array (#189) - Medium
4. Set Matrix Zeroes (#73) - Medium

---

## 第9-10週：字串專題

### 模式9：字串操作（6題）

📝 **例題：Reverse Words in a String (#151)** - Medium
- 反轉字串中的單詞
- 學習：分割 → 反轉 → 合併

🔄 **練習題：**
1. Valid Palindrome (#125) - Easy
2. Longest Common Prefix (#14) - Easy
3. Implement strStr() (#28) - Easy
4. Length of Last Word (#58) - Easy
5. Add Binary (#67) - Easy

---

## 第11-12週：進階綜合

### 模式10：貪心算法（5題）

📝 **例題：Best Time to Buy and Sell Stock (#121)** - Easy ⭐
- 買賣股票最佳時機
- 學習：記錄最小值，更新最大利潤

🔄 **練習題：**
1. Best Time to Buy and Sell Stock II (#122) - Medium
2. Jump Game (#55) - Medium
3. Jump Game II (#45) - Medium
4. Gas Station (#134) - Medium

---

### 模式11：二分搜尋（Binary Search）（6題）

📝 **例題：Binary Search (#704)** - Easy
- 標準二分搜尋
- 學習：left, right, mid 的使用

📝 **例題：First Bad Version (#278)** - Easy
- 找第一個壞版本
- 學習：二分搜尋的變體

🔄 **練習題：**
1. Search Insert Position (#35) - Easy
2. Find First and Last Position (#34) - Medium
3. Search in Rotated Sorted Array (#33) - Medium
4. Find Minimum in Rotated Sorted Array (#153) - Medium

**模式總結**：什麼時候用二分搜尋？
- 陣列已排序
- 查找特定值或位置
- 時間複雜度 O(log n)

---

## 每週複習清單

### 第4週末：複習週
- 重做前3週的⭐題目
- 總結雙指針和哈希表模式

### 第8週末：複習週
- 重做前7週的⭐題目
- 總結滑動窗口和前綴和模式

### 第12週末：總複習
- 做 5-10 題混合模式題
- 準備面試模擬

---

## 學習建議

### 每天的流程
1. **看例題詳解（15分鐘）**：理解模式
2. **自己做例題（30分鐘）**：不看答案重做
3. **做練習題（30分鐘）**：應用剛學的模式
4. **總結筆記（10分鐘）**：記錄模式特徵

### 遇到困難時
- **卡住15分鐘** → 看提示
- **卡住30分鐘** → 看完整解答
- **看懂後** → 第二天重做一次
- **第7天** → 再做一次鞏固

### 進度追蹤
```
□ 第1週：雙指針 - 相向指針 ✓
□ 第2週：雙指針 - 快慢指針 ✓
□ 第3週：哈希表 - 計數/查找 ✓
...
```

---

## 額外資源

### 推薦影片（中文）
- 花花酱 LeetCode 講解
- 代碼隨想錄
- Back To Back SWE

### 模式學習網站
- neetcode.io - 按模式分類
- leetcode-patterns.github.io

### 記住
✅ **質量 > 數量**：理解一個模式比做100題更重要  
✅ **重複練習**：同一題做3次才算真正掌握  
✅ **做筆記**：記錄每個模式的特徵和應用場景  
✅ **不要焦慮**：3個月後你會看到巨大進步！

---

## 完成這個計畫後你會

✅ 掌握 11 種核心算法模式  
✅ 完成 60-70 道題目  
✅ 能識別題目屬於哪種模式  
✅ 具備面試基本算法能力  
✅ 準備好投履歷！

**開始日期：________**  
**目標完成日期：________**

加油！每天進步一點點，3個月後你會感謝現在努力的自己！💪