// Approach 1: Using Set (Most Efficient)
// Time: O(n), Space: O(n)
function removeDuplicatesWithSet(nums) {
    if (nums.length === 0) return 0;
    
    const seen = new Set();
    let writeIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (!seen.has(nums[i])) {
            seen.add(nums[i]);
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    
    return writeIndex;
}

// Approach 2: Using Map to track indices (preserves first occurrence)
// Time: O(n), Space: O(n)
function removeDuplicatesWithMap(nums) {
    if (nums.length === 0) return 0;
    
    const firstOccurrence = new Map();
    let writeIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (!firstOccurrence.has(nums[i])) {
            firstOccurrence.set(nums[i], i);
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    
    return writeIndex;
}

// Approach 3: Sort first, then use two-pointer (modifies order)
// Time: O(n log n), Space: O(1) or O(n) depending on sort implementation
function removeDuplicatesSortFirst(nums) {
    if (nums.length === 0) return 0;
    
    // Sort the array first
    nums.sort((a, b) => a - b);
    
    // Now use the original two-pointer approach
    let slow = 0;
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    
    return slow + 1;
}

// Approach 4: Brute Force (No extra space, preserves order, but slow)
// Time: O(n²), Space: O(1)
function removeDuplicatesBruteForce(nums) {
    if (nums.length === 0) return 0;
    
    let writeIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // Check if this element appeared before
        let isDuplicate = false;
        for (let j = 0; j < writeIndex; j++) {
            if (nums[j] === nums[i]) {
                isDuplicate = true;
                break;
            }
        }
        
        if (!isDuplicate) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    
    return writeIndex;
}

// Test function to compare all approaches
function testAllApproaches() {
    console.log("=== Remove Duplicates from Unsorted Array ===\n");
    
    const testCases = [
        [3, 1, 4, 1, 5, 9, 2, 6, 5, 3],
        [1, 2, 3, 4, 5], // no duplicates
        [1, 1, 1, 1, 1], // all duplicates
        [5, 3, 5, 3, 5], // alternating
        [42], // single element
        [] // empty array
    ];
    
    testCases.forEach((originalArray, index) => {
        console.log(`Test Case ${index + 1}: [${originalArray.join(', ')}]`);
        
        // Test Set approach
        let nums1 = [...originalArray];
        let k1 = removeDuplicatesWithSet(nums1);
        console.log(`  Set approach:        k=${k1}, result=[${nums1.slice(0, k1).join(', ')}]`);
        
        // Test Map approach
        let nums2 = [...originalArray];
        let k2 = removeDuplicatesWithMap(nums2);
        console.log(`  Map approach:        k=${k2}, result=[${nums2.slice(0, k2).join(', ')}]`);
        
        // Test Sort-first approach
        let nums3 = [...originalArray];
        let k3 = removeDuplicatesSortFirst(nums3);
        console.log(`  Sort-first approach: k=${k3}, result=[${nums3.slice(0, k3).join(', ')}] (sorted)`);
        
        // Test Brute force (only for small arrays to avoid slow execution)
        if (originalArray.length <= 10) {
            let nums4 = [...originalArray];
            let k4 = removeDuplicatesBruteForce(nums4);
            console.log(`  Brute force:         k=${k4}, result=[${nums4.slice(0, k4).join(', ')}]`);
        }
        
        console.log();
    });
    
    // Performance comparison
    console.log("=== Time & Space Complexity Comparison ===");
    console.log("1. Set approach:        Time O(n), Space O(n) - RECOMMENDED");
    console.log("2. Map approach:        Time O(n), Space O(n) - Similar to Set");
    console.log("3. Sort-first approach: Time O(n log n), Space O(1) - Changes order");
    console.log("4. Brute force:         Time O(n²), Space O(1) - Slow but preserves order");
}

// Run tests
testAllApproaches();