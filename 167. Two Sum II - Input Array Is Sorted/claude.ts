function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            // Return 1-indexed positions
            return [left + 1, right + 1];
        } else if (sum < target) {
            // Sum is too small, move left pointer right to increase sum
            left++;
        } else {
            // Sum is too large, move right pointer left to decrease sum
            right--;
        }
    }
    
    // Should never reach here given problem constraints
    return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9));  // [1, 2]
console.log(twoSum([2, 3, 4], 6));        // [1, 3]
console.log(twoSum([-1, 0], -1));         // [1, 2]