/**
 * Two Sum - Find two numbers that add up to target
 * Using Hash Map for O(n) time complexity
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @return {number[]} - Indices of the two numbers
 */
function twoSum(nums, target) {
    // Create a hash map to store: value -> index
    let numMap = new Map();
    
    // Loop through the array once
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let complement = target - currentNum;
        
        // Check if the complement exists in our hash map
        if (numMap.has(complement)) {
            // Found the pair! Return the indices
            return [numMap.get(complement), i];
        }
        
        // Store current number and its index for future lookups
        numMap.set(currentNum, i);
    }
    
    // If no solution found (shouldn't happen per problem constraints)
    return [];
}

// Alternative using JavaScript Object instead of Map
function twoSumWithObject(nums, target) {
    let numObj = {}; // Object to store value -> index
    
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let complement = target - currentNum;
        
        // Check if complement exists in object
        if (complement in numObj) {
            return [numObj[complement], i];
        }
        
        // Store current number and its index
        numObj[currentNum] = i;
    }
    
    return [];
}

// Step-by-step demonstration
function twoSumDemo(nums, target) {
    console.log(`\n=== Finding Two Sum for target ${target} ===`);
    console.log("Array:", nums);
    
    let numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let complement = target - currentNum;
        
        console.log(`\nStep ${i + 1}:`);
        console.log(`  Current number: ${currentNum} at index ${i}`);
        console.log(`  Need to find: ${complement} (because ${currentNum} + ${complement} = ${target})`);
        console.log(`  Hash map so far:`, Object.fromEntries(numMap));
        
        if (numMap.has(complement)) {
            let complementIndex = numMap.get(complement);
            console.log(`  ✓ Found ${complement} at index ${complementIndex}!`);
            console.log(`  Answer: [${complementIndex}, ${i}]`);
            console.log(`  Verification: ${nums[complementIndex]} + ${nums[i]} = ${nums[complementIndex] + nums[i]}`);
            return [complementIndex, i];
        } else {
            console.log(`  ✗ ${complement} not found in hash map yet`);
            console.log(`  Adding ${currentNum} -> ${i} to hash map`);
        }
        
        numMap.set(currentNum, i);
    }
    
    console.log("No solution found!");
    return [];
}

// ====================================
// WHY HASH MAP MAKES IT O(n)
// ====================================

console.log("=== WHY HASH MAP IS O(n) ===");
console.log("Without hash map (Brute Force - O(n²)):");
console.log("  - For each number, check ALL other numbers");
console.log("  - If array has 1000 numbers, we do 1000 × 1000 = 1,000,000 operations");
console.log("");
console.log("With hash map (O(n)):");
console.log("  - For each number, do ONE lookup in hash map");
console.log("  - If array has 1000 numbers, we do only 1000 operations");
console.log("  - Hash map lookup is O(1) - instant!");

// ====================================
// TEST CASES
// ====================================

console.log("\n=== TEST CASES ===");

// Test case 1: Basic example
console.log("Test 1: nums = [2,7,11,15], target = 9");
console.log("Result:", twoSum([2,7,11,15], 9)); // Expected: [0,1]

// Test case 2: Numbers in middle
console.log("\nTest 2: nums = [3,2,4], target = 6");  
console.log("Result:", twoSum([3,2,4], 6)); // Expected: [1,2]

// Test case 3: Same number twice
console.log("\nTest 3: nums = [3,3], target = 6");
console.log("Result:", twoSum([3,3], 6)); // Expected: [0,1]

// Test case 4: Negative numbers
console.log("\nTest 4: nums = [-1,-2,-3,-4,-5], target = -8");
console.log("Result:", twoSum([-1,-2,-3,-4,-5], -8)); // Expected: [2,4]

// Test case 5: Zero in array
console.log("\nTest 5: nums = [0,4,3,0], target = 0");
console.log("Result:", twoSum([0,4,3,0], 0)); // Expected: [0,3]

// ====================================
// DETAILED WALKTHROUGH
// ====================================

// Demonstrate step by step
twoSumDemo([2,7,11,15], 9);
twoSumDemo([3,2,4], 6);

// ====================================
// COMPARISON OF APPROACHES
// ====================================

console.log("\n=== COMPARISON: Map vs Object ===");

let testNums = [2,7,11,15];
let testTarget = 9;

console.log("Using Map:", twoSum(testNums, testTarget));
console.log("Using Object:", twoSumWithObject(testNums, testTarget));

// ====================================
// COMPLEXITY ANALYSIS
// ====================================

console.log("\n=== COMPLEXITY ANALYSIS ===");
console.log("Time Complexity: O(n)");
console.log("  - We traverse the array exactly once");
console.log("  - Each hash map operation (get/set/has) is O(1)");
console.log("  - Total: O(n) × O(1) = O(n)");
console.log("");
console.log("Space Complexity: O(n)");
console.log("  - In worst case, we store all n elements in hash map");
console.log("  - Before finding the answer on last element");

// ====================================
// THE KEY INSIGHT
// ====================================

console.log("\n=== THE KEY INSIGHT ===");
console.log("Instead of asking: 'Does this number + any other number = target?'");
console.log("We ask: 'Does the complement of this number exist?'");
console.log("");
console.log("For target = 9 and current number = 2:");
console.log("  Don't search for: 'What adds to 2 to make 9?'");
console.log("  Instead ask: 'Have I seen 7 before?' (because 9 - 2 = 7)");
console.log("");
console.log("This transforms O(n) search into O(1) lookup!");