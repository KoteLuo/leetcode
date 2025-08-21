function generate(numRows: number): number[][] {
    const result: number[][] = [];
    
    for (let i = 0; i < numRows; i++) {
        const row: number[] = [];
        
        for (let j = 0; j <= i; j++) {
            // First and last elements of each row are always 1
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                // Each element is sum of two elements above it
                const leftAbove = result[i - 1][j - 1];
                const rightAbove = result[i - 1][j];
                row.push(leftAbove + rightAbove);
            }
        }
        
        result.push(row);
    }
    
    return result;
}

// Alternative more concise approach
function generateConcise(numRows: number): number[][] {
    const triangle: number[][] = [];
    
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        
        triangle.push(row);
    }
    
    return triangle;
}

// Test cases
console.log("Example 1 (numRows = 5):");
console.log(generate(5));
// Expected: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

console.log("\nExample 2 (numRows = 1):");
console.log(generate(1));
// Expected: [[1]]

console.log("\nAdditional test (numRows = 3):");
console.log(generate(3));
// Expected: [[1],[1,1],[1,2,1]]

// Test the concise version
console.log("\nConcise version (numRows = 5):");
console.log(generateConcise(5));