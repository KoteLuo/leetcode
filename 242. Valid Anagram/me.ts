function isAnagram(s: string, t: string): boolean {
    const wordRecord: Record<string, number>={};

    for(const char of s){
        wordRecord[char] = (wordRecord[char] || 0) + 1;
        // (wordRecord[char] || 0) 的意思：
        // - 如果 wordRecord[char] 存在，用它的值
        // - 如果不存在（undefined），用 0 ，＋1表示遇見此char的次數多1
    }
    for(const char of t){
        if (!wordRecord[char]) return false;
        wordRecord[char]--;
    }
return true;
}