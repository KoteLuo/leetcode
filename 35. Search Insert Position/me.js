/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var nums=[1,2,3];
var target=6;

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    console.log(right);
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
};
console.log(searchInsert(nums, target));