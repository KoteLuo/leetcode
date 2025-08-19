function plusOne(digits: number[]): number[] {
    // Start from the rightmost digit and work backwards
    for (let i = digits.length - 1; i >= 0; i--) {
        // If current digit is less than 9, we can simply increment it
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        
        // If current digit is 9, it becomes 0 and we need to carry over
        digits[i] = 0;
    }
    
    // If we reach here, all digits were 9 (e.g., [9,9,9] -> [1,0,0,0])
    // We need to add a new digit 1 at the beginning
    return [1, ...digits];
}

// Test cases
console.log("Test Case 1:");
console.log("Input: [1,2,3]");
console.log("Output:", plusOne([1,2,3]));
console.log("Expected: [1,2,4]");
console.log();

console.log("Test Case 2:");
console.log("Input: [4,3,2,1]");
console.log("Output:", plusOne([4,3,2,1]));
console.log("Expected: [4,3,2,2]");
console.log();

console.log("Test Case 3:");
console.log("Input: [9]");
console.log("Output:", plusOne([9]));
console.log("Expected: [1,0]");
console.log();

console.log("Additional Test Case:");
console.log("Input: [9,9,9]");
console.log("Output:", plusOne([9,9,9]));
console.log("Expected: [1,0,0,0]");
console.log();

console.log("Edge Case:");
console.log("Input: [0]");
console.log("Output:", plusOne([0]));
console.log("Expected: [1]");