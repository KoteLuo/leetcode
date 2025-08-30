// TypeScript 类型推断详解

function typeInferenceExamples() {
    console.log("=== TypeScript 类型推断示例 ===\n");
    
    // === 1. 基本类型推断 ===
    console.log("1. 基本类型推断：");
    
    let left = 5;           // TypeScript 推断为 number
    let right = 10;         // TypeScript 推断为 number
    let name = "Alice";     // TypeScript 推断为 string
    let isValid = true;     // TypeScript 推断为 boolean
    
    console.log("let left = 5;           // 推断为: number");
    console.log("let right = 10;         // 推断为: number");
    console.log("let name = 'Alice';     // 推断为: string");
    console.log("let isValid = true;     // 推断为: boolean");
    console.log("");
    
    // === 2. 表达式推断 ===
    console.log("2. 表达式推断：");
    
    const nums = [1, 2, 3, 4, 5];  // 推断为 number[]
    let i = 0;                      // 推断为 number
    
    let leftCalc = i + 1;           // i(number) + 1(number) = number
    let rightCalc = nums.length - 1; // nums.length(number) - 1(number) = number
    
    console.log("let leftCalc = i + 1;           // 推断为: number");
    console.log("let rightCalc = nums.length - 1; // 推断为: number"); 
    console.log("因为 i 是 number，nums.length 也是 number");
    console.log("");
    
    // === 3. 何时需要显式类型声明 ===
    console.log("3. 何时需要显式类型声明：");
    
    // ❌ 推断为 any（危险）
    let unclearVar;                 // any 类型
    console.log("let unclearVar;                 // 推断为: any ❌");
    
    // ✅ 显式声明
    let clearVar: number;           // number 类型
    console.log("let clearVar: number;           // 显式声明: number ✅");
    
    // ❌ 可能推断错误
    let mixedArray = [];            // any[]
    console.log("let mixedArray = [];            // 推断为: any[] ❌");
    
    // ✅ 显式声明
    let numberArray: number[] = []; // number[]
    console.log("let numberArray: number[] = []; // 显式声明: number[] ✅");
    console.log("");
}

function detailedSortExample() {
    console.log("=== 3Sum 中的类型推断详解 ===\n");
    
    function threeSum(nums: number[]): number[][] {
        //              ^^^^^^^^ 参数类型声明
        //                       ^^^^^^^^^^^ 返回值类型声明
        
        const result: number[][] = [];
        //            ^^^^^^^^^^^ 显式声明（虽然可以推断，但更清晰）
        
        nums.sort((a, b) => a - b);
        //         ^  ^ 推断为 number，因为 nums 是 number[]
        
        for (let i = 0; i < nums.length - 2; i++) {
            //   ^^^^^^^^^ 推断为 number
            
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            
            let left = i + 1;           // 推断为 number
            let right = nums.length - 1; // 推断为 number
            //  ^^^^ ^^^^^ 这里不需要类型声明！
            
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];
                //    ^^^ 推断为 number
                
                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    //           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 推断为 number[]
                    
                    // 移动指针逻辑...
                    left++;  // left 已知是 number，++ 操作返回 number
                    right--; // right 已知是 number，-- 操作返回 number
                }
                // ...
            }
        }
        
        return result;
    }
    
    console.log("在 3Sum 函数中：");
    console.log("• nums: number[] (参数声明)");
    console.log("• i: number (for循环推断)");  
    console.log("• left = i + 1: number (表达式推断)");
    console.log("• right = nums.length - 1: number (表达式推断)");
    console.log("• sum: number (算术表达式推断)");
    console.log("");
}

function typeInferenceRules() {
    console.log("=== TypeScript 类型推断规则 ===\n");
    
    console.log("✅ 何时可以依赖推断：");
    console.log("1. 变量初始化时有明确值");
    console.log("2. 表达式的操作数类型明确");
    console.log("3. 函数调用的返回值类型明确");
    console.log("4. 数组/对象的元素类型一致");
    console.log("");
    
    console.log("⚠️ 何时应该显式声明：");
    console.log("1. 函数参数（总是需要）");
    console.log("2. 函数返回值（建议声明）");
    console.log("3. 变量声明但暂时不初始化");
    console.log("4. 复杂的联合类型或泛型");
    console.log("5. 为了代码可读性");
    console.log("");
    
    // 实际例子
    console.log("📝 实际例子：");
    
    // 可以推断的情况
    console.log("// ✅ 可以推断");
    console.log("let count = 0;                    // number");
    console.log("let message = 'Hello';            // string");  
    console.log("let items = [1, 2, 3];            // number[]");
    console.log("let sum = a + b;                  // number (如果a,b是number)");
    console.log("");
    
    // 建议显式声明的情况
    console.log("// 💡 建议显式声明");
    console.log("function process(data: unknown): string[] {  // 参数和返回值");
    console.log("    let result: string[];                    // 未初始化变量");
    console.log("    let cache: Map<string, number> = new Map(); // 复杂类型");
    console.log("    return result;");
    console.log("}");
}

function bestPractices() {
    console.log("=== 最佳实践建议 ===\n");
    
    console.log("🎯 推荐做法：");
    console.log("1. 函数签名总是显式声明类型");
    console.log("2. 简单的局部变量依赖推断");
    console.log("3. 复杂类型显式声明");
    console.log("4. 在团队项目中保持一致性");
    console.log("");
    
    console.log("📚 学习建议：");
    console.log("• 开始时多写显式类型，理解后逐渐依赖推断");
    console.log("• 使用 IDE 的类型提示查看推断结果");
    console.log("• 当不确定推断结果时，hover 查看或显式声明");
    console.log("");
    
    console.log("🔧 IDE 提示：");
    console.log("在 VS Code 中，hover 到变量上就能看到推断的类型！");
}

// 运行所有示例
typeInferenceExamples();
detailedSortExample();
typeInferenceRules();
bestPractices();