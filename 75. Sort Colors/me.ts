/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let low=0;
    let mid=0;
    let high=nums.length-1;
    for(let right=0; right<nums.length; right++){
     if(nums[mid]===0){
        [nums[low], nums[mid]] = [nums[mid], nums[low]];
        low++;
        mid++;
     }else if(nums[mid]===1){
        mid++;
     }else{
        [nums[high], nums[mid]] = [nums[mid], nums[high]];
        high--;
     }
    }
};