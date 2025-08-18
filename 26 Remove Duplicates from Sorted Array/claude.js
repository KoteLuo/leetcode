/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // Handle edge case
    if (nums.length === 0) {
        return 0;
    }
    
    // Two pointer approach
    let slow = 0; // Points to the position where next unique element should go
    
    for (let fast = 1; fast < nums.length; fast++) {
        // If current element is different from the previous unique element
        if (nums[fast] !== nums[slow]) {
            slow++; // Move slow pointer to next position
            nums[slow] = nums[fast]; // Place the unique element
        }
        // If nums[fast] === nums[slow], it's a duplicate, so we skip it
    }
    
    // Return the count of unique elements (slow + 1 since slow is 0-indexed)
    return slow + 1;
};

// Test function to demonstrate the solution
function testSolution() {
    // Test case 1
    let nums1 = [1, 1, 2];
    let k1 = removeDuplicates(nums1);
    console.log("Test case 1:");
    console.log("k =", k1);
    console.log("nums =", nums1.map((val, i) => i < k1 ? val : "_"));
    console.log();
    
    // Test case 2
    let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    let k2 = removeDuplicates(nums2);
    console.log("Test case 2:");
    console.log("k =", k2);
    console.log("nums =", nums2.map((val, i) => i < k2 ? val : "_"));
    console.log();
    
    // Test case 3: Single element
    let nums3 = [1];
    let k3 = removeDuplicates(nums3);
    console.log("Test case 3:");
    console.log("k =", k3);
    console.log("nums =", nums3.map((val, i) => i < k3 ? val : "_"));
    console.log();
    
    // Test case 4: No duplicates
    let nums4 = [1, 2, 3, 4, 5];
    let k4 = removeDuplicates(nums4);
    console.log("Test case 4:");
    console.log("k =", k4);
    console.log("nums =", nums4.map((val, i) => i < k4 ? val : "_"));
}

// Run tests
testSolution();