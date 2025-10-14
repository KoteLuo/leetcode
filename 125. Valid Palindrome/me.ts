function isPalindrome(s: string): boolean {
    let left=0;
    let right=s.length-1;
    while(left < right){
       while(left<right && !isAlphanumeric(s[left])){
        left++;
       } 
       while(left<right && !isAlphanumeric(s[right])){
        right--;
       }
       if(s[left].toLowerCase() !== s[right].toLowerCase()){
        return false;
       }
       right--;
       left++;
    }
    return true;
};

function isAlphanumeric(char: string): boolean {
    return (char >= '0' && char <= '9') || (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}