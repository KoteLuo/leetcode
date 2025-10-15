/**
 * Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Swap elements at left and right pointers
        [s[left], s[right]] = [s[right], s[left]];
        
        left++;
        right--;
    }
}

// Test cases
const test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Output: ["o","l","l","e","h"]

const test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Output: ["h","a","n","n","a","H"]

const test3 = ["A"];
reverseString(test3);
console.log(test3); // Output: ["A"]