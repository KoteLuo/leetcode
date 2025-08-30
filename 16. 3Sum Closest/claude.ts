function threeSumClosest(nums: number[], target: number): number {
    // Sort the array to enable two-pointer technique
    nums.sort((a, b) => a - b);
    
    let closestSum = nums[0] + nums[1] + nums[2];
    
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            
            // If we found exact match, return immediately
            if (currentSum === target) {
                return currentSum;
            }
            
            // Update closest sum if current sum is closer to target
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }
            
            // Move pointers based on comparison with target
            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return closestSum;
}

// Test cases
console.log("Test Case 1:");
console.log(`Input: nums = [-1,2,1,-4], target = 1`);
console.log(`Output: ${threeSumClosest([-1, 2, 1, -4], 1)}`);
console.log(`Expected: 2\n`);

console.log("Test Case 2:");
console.log(`Input: nums = [0,0,0], target = 1`);
console.log(`Output: ${threeSumClosest([0, 0, 0], 1)}`);
console.log(`Expected: 0\n`);

// Additional test cases
console.log("Additional Test Cases:");
console.log(`threeSumClosest([1,1,1,0], -100): ${threeSumClosest([1, 1, 1, 0], -100)}`);
console.log(`threeSumClosest([1,1,-1,-1,3], -1): ${threeSumClosest([1, 1, -1, -1, 3], -1)}`);
console.log(`threeSumClosest([1,0,1,1], 100): ${threeSumClosest([1, 0, 1, 1], 100)}`);

// Time complexity analysis
console.log(`
Time Complexity: O(n²)
- Sorting: O(n log n)
- Outer loop: O(n)
- Inner two-pointer search: O(n)
- Overall: O(n log n) + O(n²) = O(n²)

Space Complexity: O(1)
- Only using constant extra space (excluding input array)
`);