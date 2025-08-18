/**
 * Find the longest common prefix string amongst an array of strings
 * @param {string[]} strs - Array of strings
 * @return {string} - Longest common prefix
 */
function longestCommonPrefix(strs) {
    // Edge case: if array is empty, return empty string
    if (!strs || strs.length === 0) {
        return "";
    }
    
    // Edge case: if there's only one string, return it
    if (strs.length === 1) {
        return strs[0];
    }
    
    // Start with the first string as our reference
    let prefix = strs[0];
    
    // Compare with each subsequent string
    for (let i = 1; i < strs.length; i++) {
        // Keep shortening the prefix until it matches the start of current string
        while (strs[i].indexOf(prefix) !== 0) {
            // Remove the last character from prefix
            prefix = prefix.slice(0, -1);
            
            // If prefix becomes empty, no common prefix exists
            if (prefix === "") {
                return "";
            }
        }
    }
    
    return prefix;
}

// Alternative approach - character by character comparison
function longestCommonPrefixV2(strs) {
    if (!strs || strs.length === 0) return "";
    
    // Use the first string as reference for length
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];
        
        // Check if this character matches in all other strings
        for (let j = 1; j < strs.length; j++) {
            // If we've reached end of current string or character doesn't match
            if (i >= strs[j].length || strs[j][i] !== char) {
                return strs[0].slice(0, i);
            }
        }
    }
    
    // If we get here, the entire first string is the common prefix
    return strs[0];
}

// Test cases
console.log("=== Test Cases ===");

// Test case 1: Normal case with common prefix
console.log('Test 1: ["flower","flow","flight"]');
console.log("Result:", longestCommonPrefix(["flower","flow","flight"])); // Expected: "fl"

// Test case 2: No common prefix
console.log('\nTest 2: ["dog","racecar","car"]');
console.log("Result:", longestCommonPrefix(["dog","racecar","car"])); // Expected: ""

// Test case 3: All strings are the same
console.log('\nTest 3: ["test","test","test"]');
console.log("Result:", longestCommonPrefix(["test","test","test"])); // Expected: "test"

// Test case 4: One string is prefix of others
console.log('\nTest 4: ["ab","abc","abcd"]');
console.log("Result:", longestCommonPrefix(["ab","abc","abcd"])); // Expected: "ab"

// Test case 5: Empty array
console.log('\nTest 5: []');
console.log("Result:", longestCommonPrefix([])); // Expected: ""

// Test case 6: Single string
console.log('\nTest 6: ["single"]');
console.log("Result:", longestCommonPrefix(["single"])); // Expected: "single"

// Test alternative approach
console.log("\n=== Alternative Approach Results ===");
console.log('["flower","flow","flight"]:', longestCommonPrefixV2(["flower","flow","flight"]));
console.log('["dog","racecar","car"]:', longestCommonPrefixV2(["dog","racecar","car"]));





//  If not preflx but find the same part. What whould you do?
//EX: Test Caseinput:strs = ["reflower","flow","flight"]output : "fl"




/**
 * Find the longest common substring that appears in ALL strings
 * @param {string[]} strs - Array of strings
 * @return {string} - Longest common substring
 */
function longestCommonSubstring(strs) {
    // Edge cases
    if (!strs || strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    
    let longestSubstring = "";
    
    // Use the first string as reference (try all its substrings)
    let firstString = strs[0];
    
    // Try all possible substrings of the first string
    for (let i = 0; i < firstString.length; i++) {
        for (let j = i + 1; j <= firstString.length; j++) {
            // Get substring from position i to j
            let currentSubstring = firstString.substring(i, j);
            
            // Check if this substring exists in ALL other strings
            let foundInAll = true;
            for (let k = 1; k < strs.length; k++) {
                if (strs[k].indexOf(currentSubstring) === -1) {
                    foundInAll = false;
                    break; // No need to check remaining strings
                }
            }
            
            // If found in all strings and longer than current longest
            if (foundInAll && currentSubstring.length > longestSubstring.length) {
                longestSubstring = currentSubstring;
            }
        }
    }
    
    return longestSubstring;
}

// More efficient approach - start with longer substrings first
function longestCommonSubstringOptimized(strs) {
    if (!strs || strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    
    // Find the shortest string (no point checking longer substrings)
    let shortestString = strs[0];
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < shortestString.length) {
            shortestString = strs[i];
        }
    }
    
    // Try substrings from longest to shortest
    for (let length = shortestString.length; length > 0; length--) {
        for (let start = 0; start <= shortestString.length - length; start++) {
            let substring = shortestString.substring(start, start + length);
            
            // Check if this substring exists in ALL strings
            let foundInAll = true;
            for (let i = 0; i < strs.length; i++) {
                if (strs[i].indexOf(substring) === -1) {
                    foundInAll = false;
                    break;
                }
            }
            
            if (foundInAll) {
                return substring; // Return first (longest) match found
            }
        }
    }
    
    return ""; // No common substring found
}

// Step-by-step demonstration function
function demonstrateProcess(strs) {
    console.log("=== Step by Step Process ===");
    console.log("Input strings:", strs);
    
    if (!strs || strs.length === 0) return "";
    
    let firstString = strs[0];
    console.log("Using first string as reference:", firstString);
    
    let longestSubstring = "";
    
    console.log("\nTrying all substrings:");
    
    // Try all possible substrings
    for (let i = 0; i < firstString.length; i++) {
        for (let j = i + 1; j <= firstString.length; j++) {
            let currentSubstring = firstString.substring(i, j);
            
            console.log(`\nChecking substring: "${currentSubstring}"`);
            
            // Check if exists in all strings
            let foundInAll = true;
            for (let k = 1; k < strs.length; k++) {
                let position = strs[k].indexOf(currentSubstring);
                console.log(`  In "${strs[k]}": position ${position} ${position >= 0 ? '✓' : '✗'}`);
                
                if (position === -1) {
                    foundInAll = false;
                    break;
                }
            }
            
            if (foundInAll) {
                console.log(`  → Found in all strings! Length: ${currentSubstring.length}`);
                if (currentSubstring.length > longestSubstring.length) {
                    longestSubstring = currentSubstring;
                    console.log(`  → New longest substring: "${longestSubstring}"`);
                }
            } else {
                console.log(`  → Not found in all strings`);
            }
        }
    }
    
    console.log(`\nFinal result: "${longestSubstring}"`);
    return longestSubstring;
}

// ====================================
// TEST CASES
// ====================================

console.log("=== Test Cases ===");

// Your example
console.log('\n1. ["reflower","flow","flight"]');
console.log("Result:", longestCommonSubstring(["reflower","flow","flight"]));

// More test cases
console.log('\n2. ["testing","test","west"]');
console.log("Result:", longestCommonSubstring(["testing","test","west"]));

console.log('\n3. ["abcdef","defabc","cdefab"]');
console.log("Result:", longestCommonSubstring(["abcdef","defabc","cdefab"]));

console.log('\n4. ["hello","world","help"]');
console.log("Result:", longestCommonSubstring(["hello","world","help"]));

console.log('\n5. ["same","same","same"]');
console.log("Result:", longestCommonSubstring(["same","same","same"]));

// Demonstrate with your example
console.log('\n=== Detailed Process for ["reflower","flow","flight"] ===');
demonstrateProcess(["reflower","flow","flight"]);

// Compare optimized version
console.log('\n=== Optimized Version Results ===');
console.log('["reflower","flow","flight"]:', longestCommonSubstringOptimized(["reflower","flow","flight"]));
console.log('["testing","test","west"]:', longestCommonSubstringOptimized(["testing","test","west"]));

// ====================================
// SIMPLE EXPLANATION OF THE DIFFERENCE
// ====================================

console.log('\n=== Difference: Prefix vs Substring ===');

let example = ["reflower","flow","flight"];
console.log("Input:", example);

// Prefix approach (original problem)
function longestCommonPrefix(strs) {
    if (!strs || strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}

console.log("Longest Common PREFIX:", longestCommonPrefix(example));      // "" (nothing at start)
console.log("Longest Common SUBSTRING:", longestCommonSubstring(example)); // "fl" (anywhere in string)
