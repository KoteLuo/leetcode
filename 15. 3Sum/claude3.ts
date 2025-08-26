// 性能分析和测试

function threeSumHashMap(nums: number[]): number[][] {
    const result: number[][] = [];
    const resultSet = new Set<string>();
    
    for (let i = 0; i < nums.length - 2; i++) {
        const target = -nums[i];
        const hashMap = new Map<number, number>();
        
        for (let j = i + 1; j < nums.length; j++) {
            const needed = target - nums[j];
            
            if (hashMap.has(needed)) {
                const triplet = [nums[i], needed, nums[j]].sort((a, b) => a - b);
                const tripletKey = triplet.join(',');
                
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

function threeSumTwoPointer(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b); // O(n log n)
    
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

// 详细的复杂度分析
function complexityBreakdown() {
    console.log("=== 详细复杂度分析 ===\n");
    
    console.log("Hash Map 方法:");
    console.log("┌─────────────────────────────────────────┐");
    console.log("│ 外层循环: n 次                          │");
    console.log("│ └─ 内层循环: 平均 n/2 次               │");
    console.log("│    └─ HashMap.has(): O(1) 平均         │");
    console.log("│    └─ HashMap.set(): O(1) 平均         │");
    console.log("│    └─ 去重排序: O(3 log 3) = O(1)      │");
    console.log("│    └─ Set操作: O(1) 平均               │");
    console.log("└─────────────────────────────────────────┘");
    console.log("总时间: O(n²) + 去重开销");
    console.log("空间: O(n) 每次新建HashMap + O(n) 去重Set\n");
    
    console.log("双指针方法:");
    console.log("┌─────────────────────────────────────────┐");
    console.log("│ 排序: O(n log n)                        │");
    console.log("│ 外层循环: n 次                          │");
    console.log("│ └─ 双指针: 最多 n 次移动                │");
    console.log("│    └─ 数组访问: O(1)                    │");
    console.log("│    └─ 跳过重复: 平均很少               │");
    console.log("└─────────────────────────────────────────┘");
    console.log("总时间: O(n log n) + O(n²) = O(n²)");
    console.log("空间: O(1) 原地操作\n");
}

// 实际性能测试
function performanceTest() {
    console.log("=== 实际性能测试 ===\n");
    
    // 生成测试数据
    function generateTestData(size: number): number[] {
        const nums: number[] = [];
        for (let i = 0; i < size; i++) {
            nums.push(Math.floor(Math.random() * 200) - 100); // -100 到 100
        }
        return nums;
    }
    
    const testSizes = [100, 500, 1000];
    
    testSizes.forEach(size => {
        console.log(`测试规模: n = ${size}`);
        const testData = generateTestData(size);
        
        // 测试 HashMap 方法
        const start1 = performance.now();
        const result1 = threeSumHashMap([...testData]);
        const end1 = performance.now();
        const time1 = end1 - start1;
        
        // 测试双指针方法  
        const start2 = performance.now();
        const result2 = threeSumTwoPointer([...testData]);
        const end2 = performance.now();
        const time2 = end2 - start2;
        
        console.log(`  HashMap方法:  ${time1.toFixed(2)}ms (找到 ${result1.length} 个三元组)`);
        console.log(`  双指针方法:   ${time2.toFixed(2)}ms (找到 ${result2.length} 个三元组)`);
        console.log(`  速度比较: ${time1 < time2 ? 'HashMap更快' : '双指针更快'} (${Math.abs(time1 - time2).toFixed(2)}ms差距)`);
        console.log("");
    });
}

// 理论分析
function theoreticalAnalysis() {
    console.log("=== 理论分析 ===\n");
    
    console.log("❓ 为什么HashMap方法可能更慢？");
    console.log("1. 去重开销: 需要对每个找到的三元组排序并用Set去重");
    console.log("2. Hash碰撞: 在最坏情况下HashMap操作可能退化到O(n)");
    console.log("3. 内存分配: 每次外层循环都要创建新的HashMap");
    console.log("4. 缓存局部性: HashMap的随机访问对CPU缓存不友好");
    console.log("");
    
    console.log("❓ 为什么双指针方法可能更快？");
    console.log("1. 缓存友好: 顺序访问已排序的数组，CPU缓存命中率高");
    console.log("2. 分支预测: 简单的if-else分支，CPU容易预测");
    console.log("3. 内建去重: 排序后天然避免重复，无需额外去重操作");
    console.log("4. 内存效率: 原地操作，内存访问模式规律");
    console.log("");
    
    console.log("🔍 关键洞察:");
    console.log("虽然排序是O(n log n)，但对于3Sum这种O(n²)的问题，");
    console.log("排序的一次性开销往往能被后续更高效的双指针操作抵消。");
    console.log("特别是当n较大时，排序+双指针通常比HashMap方法更快。");
}

// 运行所有分析
complexityBreakdown();
theoreticalAnalysis();
performanceTest();