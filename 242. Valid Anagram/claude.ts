function isAnagram(s: string, t: string): boolean {
    // If lengths differ, they can't be anagrams
    if (s.length !== t.length) return false;
    
    // Count frequency of each character
    const charCount: Record<string, number> = {};
    
    // Increment count for characters in s
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Decrement count for characters in t
    for (const char of t) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }
    
    return true;
}

// Alternative solution using sorting
function isAnagramSort(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));          // false
console.log(isAnagram("listen", "silent"));    // true
console.log(isAnagram("hello", "world"));      // false