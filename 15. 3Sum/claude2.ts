function threeSumHashMap(nums: number[]): number[][] {
    const result: number[][] = [];
    const resultSet = new Set<string>(); // 用于去重
    
    // 外层循环：选择第一个数字
    for (let i = 0; i < nums.length - 2; i++) {
        const target = -nums[i]; // 我们需要找到两个数字的和等于这个target
        const hashMap = new Map<number, number>(); // 每次循环都需要新的hash map
        
        // 内层循环：在剩余元素中找 Two Sum
        for (let j = i + 1; j < nums.length; j++) {
            const needed = target - nums[j];
            
            if (hashMap.has(needed)) {
                // 找到了一个三元组
                const triplet = [nums[i], needed, nums[j]].sort((a, b) => a - b);
                const tripletKey = triplet.join(',');
                
                // 使用Set去重
                if (!resultSet.has(tripletKey)) {
                    resultSet.add(tripletKey);
                    result.push(triplet);
                }
            }
            
            hashMap.set(nums[j], j);
        }
    }
    
    return result;
}

// 比较两种方法的复杂度
function complexityComparison() {
    console.log("=== 复杂度比较 ===\n");
    
    console.log("方法1: Hash Map 方法");
    console.log("时间复杂度: O(n²)");
    console.log("- 外层循环: O(n)");
    console.log("- 内层循环: O(n) × hash map操作O(1) = O(n)");
    console.log("- 总计: O(n) × O(n) = O(n²)");
    console.log("空间复杂度: O(n) - 每次需要一个新的hash map");
    console.log("");
    
    console.log("方法2: 双指针方法");
    console.log("时间复杂度: O(n²)");
    console.log("- 排序: O(n log n)");
    console.log("- 外层循环: O(n)");
    console.log("- 内层双指针: O(n)");
    console.log("- 总计: O(n log n) + O(n²) = O(n²)");
    console.log("空间复杂度: O(1) - 只用常数额外空间");
    console.log("");
    
    console.log("=== 实际测试 ===");
}

// 测试两种方法
function testBothMethods() {
    const testCases = [
        [-1,0,1,2,-1,-4],
        [0,1,1],
        [0,0,0],
        [0,0,0,0],
        [-2,0,1,1,2]
    ];
    
    testCases.forEach((nums, index) => {
        console.log(`\nTest Case ${index + 1}: [${nums.join(',')}]`);
        
        // Hash Map 方法
        const result1 = threeSumHashMap([...nums]);
        console.log("Hash Map方法:", result1);
        
        // 双指针方法（之前的解法）
        const result2 = threeSum([...nums]);
        console.log("双指针方法: ", result2);
    });
}

// 原来的双指针方法
function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
}

// 运行比较
complexityComparison();
testBothMethods();