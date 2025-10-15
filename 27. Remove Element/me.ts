function removeElement(nums: number[], val: number): number {
    let left=0;
    let right=nums.length-1;
    while(left<=right){
        if(nums[left]===val){
            [nums[left], nums[right]] = [nums[right], nums[left]];
            right--;
        }else{
            left++;
        }
    }
    return nums.length-right;
};