function twoSum(nums: number[], target: number): number[] {
    const numMap: Map<number, number> = new Map();
    for(let i=0;i<nums.length;i++){
        const diffNum=target-nums[i];
        if(numMap.has(diffNum)){
            return [numMap.get(diffNum)!,i];
        }
        
        numMap.set(nums[i],i);
    }
    return [];
};