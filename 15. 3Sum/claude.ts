function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    
    // 首先排序数组，这样可以更容易处理重复元素和使用双指针
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // 跳过重复的元素（对于第一个数）
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                // 找到一个有效的三元组
                result.push([nums[i], nums[left], nums[right]]);
                
                // 跳过重复的元素
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                
                left++;
                right--;
            } else if (sum < 0) {
                // 和太小，移动左指针
                left++;
            } else {
                // 和太大，移动右指针
                right--;
            }
        }
    }
    
    return result;
}

// 测试函数
function testThreeSum() {
    console.log("Example 1:");
    console.log(threeSum([-1,0,1,2,-1,-4])); 
    // 输出: [[-1,-1,2],[-1,0,1]]
    
    console.log("\nExample 2:");
    console.log(threeSum([0,1,1])); 
    // 输出: []
    
    console.log("\nExample 3:");
    console.log(threeSum([0,0,0])); 
    // 输出: [[0,0,0]]
    
    console.log("\nAdditional test - multiple zeros:");
    console.log(threeSum([0,0,0,0])); 
    // 输出: [[0,0,0]] (只会返回一个，因为我们去重了)
}

// 运行测试
testThreeSum();