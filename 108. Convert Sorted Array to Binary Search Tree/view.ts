// ===== TreeNode 是什麼？ =====

// TreeNode 是「樹節點」的意思
// Tree = 樹，Node = 節點
// 它是用來表示「二元樹」中每一個節點的資料結構

class TreeNode {
    val: number;           // 這個節點儲存的數值
    left: TreeNode | null; // 指向左邊子節點的指標
    right: TreeNode | null;// 指向右邊子節點的指標
    
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

// ===== 什麼是樹（Tree）？ =====

console.log("=== 什麼是樹？ ===");
console.log("樹是一種資料結構，就像現實中的樹一樣：");
console.log("📁 有一個根部（根節點）");
console.log("🌿 從根部分出枝幹（子節點）");
console.log("🍃 每個枝幹可以再分出更多小枝（子節點的子節點）");
console.log("");

// ===== 建立一個簡單的樹 =====

console.log("=== 建立一個簡單的樹 ===");

// 建立葉子節點（沒有子節點的節點）
const leaf1 = new TreeNode(1);  // 只有數值 1，沒有左右子節點
const leaf2 = new TreeNode(3);  // 只有數值 3，沒有左右子節點

// 建立有子節點的節點
const root = new TreeNode(2, leaf1, leaf2);  // 數值是 2，左子節點是 leaf1，右子節點是 leaf2

console.log("建立了一棵樹：");
console.log("根節點值:", root.val);
console.log("左子節點值:", root.left?.val);
console.log("右子節點值:", root.right?.val);

// ===== 視覺化這棵樹 =====

console.log("\n=== 視覺化樹的結構 ===");
console.log("     2     ← 根節點");
console.log("   /   \\   ");
console.log("  1     3  ← 葉子節點");
console.log("");

// ===== 更複雜的樹範例 =====

console.log("=== 建立更複雜的樹 ===");

// 建立一棵更大的樹
//       10
//      /  \
//     5    15
//    / \   / \
//   3   7 12  20

const node3 = new TreeNode(3);
const node7 = new TreeNode(7);
const node5 = new TreeNode(5, node3, node7);

const node12 = new TreeNode(12);
const node20 = new TreeNode(20);
const node15 = new TreeNode(15, node12, node20);

const bigTree = new TreeNode(10, node5, node15);

console.log("建立了一棵大樹：");
console.log("       10      ");
console.log("      /  \\     ");
console.log("     5    15   ");
console.log("    / \\   / \\  ");
console.log("   3   7 12  20");

// ===== TreeNode 的重要概念 =====

console.log("\n=== TreeNode 重要概念 ===");

// 1. 根節點（Root）
console.log("1. 根節點：樹的最頂端，沒有父節點");
console.log("   例如：上面樹中的 10");

// 2. 葉子節點（Leaf）
console.log("2. 葉子節點：沒有子節點的節點");
console.log("   例如：3, 7, 12, 20");

// 3. 父節點（Parent）與子節點（Child）
console.log("3. 父子關係：");
console.log("   - 10 是 5 和 15 的父節點");
console.log("   - 5 和 15 是 10 的子節點");

// 4. 兄弟節點（Sibling）
console.log("4. 兄弟節點：有相同父節點的節點");
console.log("   - 5 和 15 是兄弟節點");
console.log("   - 3 和 7 是兄弟節點");

// ===== 為什麼要用 TreeNode？ =====

console.log("\n=== 為什麼要用 TreeNode？ ===");
console.log("1. 🔍 快速搜尋：二元搜尋樹可以快速找到資料");
console.log("2. 📊 有序儲存：可以保持資料的排序");
console.log("3. 🔄 動態操作：可以方便地新增、刪除節點");
console.log("4. 🎯 解決問題：很多演算法問題都用樹來解決");

// ===== TreeNode 的操作範例 =====

console.log("\n=== TreeNode 操作範例 ===");

// 遍歷樹（訪問每個節點）
function printInOrder(node: TreeNode | null): void {
    if (node === null) return;
    
    printInOrder(node.left);   // 先訪問左子樹
    console.log(node.val);     // 再訪問當前節點
    printInOrder(node.right);  // 最後訪問右子樹
}

console.log("中序遍歷大樹的結果：");
printInOrder(bigTree);
console.log("（注意：結果是有序的！）");

// 計算樹的高度
function getHeight(node: TreeNode | null): number {
    if (node === null) return 0;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

console.log(`\n這棵樹的高度是：${getHeight(bigTree)} 層`);

// 搜尋特定值
function search(node: TreeNode | null, target: number): boolean {
    if (node === null) return false;
    if (node.val === target) return true;
    
    // 在二元搜尋樹中，可以根據大小關係決定往哪邊找
    if (target < node.val) {
        return search(node.left, target);
    } else {
        return search(node.right, target);
    }
}

console.log(`\n在樹中搜尋 7：${search(bigTree, 7) ? '找到了！' : '沒找到'}`);
console.log(`在樹中搜尋 100：${search(bigTree, 100) ? '找到了！' : '沒找到'}`);

// ===== 實際應用場景 =====

console.log("\n=== TreeNode 的實際應用 ===");
console.log("1. 🗂️  檔案系統：資料夾和檔案的階層結構");
console.log("2. 🌐  網頁 DOM：HTML 元素的巢狀結構");
console.log("3. 🔍  搜尋引擎：快速查找資料");
console.log("4. 🎮  遊戲開發：決策樹、場景管理");
console.log("5. 💾  資料庫：索引結構");
console.log("6. 🧮  表達式解析：數學公式的運算順序");

console.log("\n=== 總結 ===");
console.log("TreeNode 就是樹這種資料結構中的基本單位");
console.log("每個 TreeNode 包含：");
console.log("- 一個數值 (val)");
console.log("- 兩個指標，指向左右子節點 (left, right)");
console.log("透過這種簡單的結構，可以建立複雜而強大的樹狀資料結構！");