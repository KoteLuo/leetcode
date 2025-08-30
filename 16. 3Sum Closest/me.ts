function threeSumClosest(nums: number[], target: number): number {
    //可以用threeSum的方法，但把sum===0改成遍歷target、target-1、target+1、target-2、target+2...看哪個最先找到答案
    //但這個方法很笨，感覺也很難寫，從之前的幾題學到能用while比較，如果有更接近的就存起來，這樣就跑一次就好了
    nums.sort((a,b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2];

    for(let i = 0; i < nums.length - 2; i++){
        if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while(left < right){
            const currentSum = nums[i] + nums[left] + nums[right];
            if(currentSum === target){
                return currentSum;
            }
            
            if(Math.abs(currentSum - target) < Math.abs(closestSum - target)){
                closestSum = currentSum;
                
            }
            if(currentSum < target){
                left++;
            }
            else{
                right--;
            }
        }
    }
    return closestSum;
};