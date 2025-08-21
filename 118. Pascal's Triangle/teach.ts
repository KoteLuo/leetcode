// 讓我們一步步看建造 Pascal Triangle 的過程

// 已經有的結果
// result = [
//   [1],        // Row 0
//   [1, 1],     // Row 1
//   [1, 2, 1],  // Row 2
// ]

// 現在要建造 Row 3: [1, 3, 3, 1]

console.log("建造 Row 3 的過程：");
console.log("目前已有：");
console.log("Row 0: [1]");
console.log("Row 1: [1, 1]");
console.log("Row 2: [1, 2, 1]");
console.log("\n開始建造 Row 3:");

// i = 3 (當前行)
// j = 0: 第一個元素永遠是 1
console.log("j=0: 第一個位置 = 1 (邊界)");

// j = 1: 第二個元素
// leftAbove = result[i-1][j-1] = result[2][0] = 1
// rightAbove = result[i-1][j] = result[2][1] = 2
console.log("j=1: leftAbove = result[2][0] = 1");
console.log("      rightAbove = result[2][1] = 2");
console.log("      相加 = 1 + 2 = 3");

// j = 2: 第三個元素  
// leftAbove = result[i-1][j-1] = result[2][1] = 2
// rightAbove = result[i-1][j] = result[2][2] = 1
console.log("j=2: leftAbove = result[2][1] = 2");
console.log("      rightAbove = result[2][2] = 1");  
console.log("      相加 = 2 + 1 = 3");

// j = 3: 最後一個元素永遠是 1
console.log("j=3: 最後一個位置 = 1 (邊界)");

console.log("\n最終 Row 3 = [1, 3, 3, 1]");

// 用圖形方式表示相加過程
console.log("\n圖形化表示：");
console.log("    1 2 1    <- Row 2");
console.log("   / | | \\");  
console.log("  1  3 3  1   <- Row 3");
console.log("     ^ ^");
console.log("     | |");
console.log("  1+2=3  2+1=3");

// 實際執行程式碼
function demonstrateAddition() {
    const result = [
        [1],        // Row 0
        [1, 1],     // Row 1  
        [1, 2, 1]   // Row 2
    ];
    
    console.log("\n=== 實際執行 ===");
    const i = 3; // 建造第3行
    const row: number[] = [];
    
    for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
            row.push(1);
            console.log(`位置 ${j}: 邊界 = 1`);
        } else {
            const leftAbove = result[i - 1][j - 1];
            const rightAbove = result[i - 1][j];
            const sum = leftAbove + rightAbove;
            row.push(sum);
            console.log(`位置 ${j}: ${leftAbove} + ${rightAbove} = ${sum}`);
        }
    }
    
    console.log(`Row ${i}: [${row.join(', ')}]`);
    return row;
}

demonstrateAddition();