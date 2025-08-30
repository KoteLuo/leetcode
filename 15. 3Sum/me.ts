function threeSum(nums: number[]): number[][] {
    //選一個數字，X + 此數字=0的話，剩下兩個數字相加也會等於0，就能改成Two Sum的寫法
    //Two Sum只有一張hash map，但這裡需要n張，這樣寫的話應該會是n＊n複雜度？先試看看
    //250830,看了雙指針後改用雙指針，精簡優美
    //但是太過於優美且針對了，泛用性可能有限，最初想到的人花了多久才想到呢？
    //AI會把運算符用空格隔開，增加可讀性，很棒的設計，我也要效法
    const result: number[][] = [];
    nums.sort((a,b) => a - b);

    for(let i = 0; i < nums.length - 2; i++){
        if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while(left < right){
            const sum = nums[left] + nums[i] + nums[right];
            if(sum === 0){
                result.push([nums[i], nums[left], nums[right]]);
                //skip same number
                while(left < right && nums[left] === nums[left + 1]){
                    left++;
                }
                while(left < right && nums[right] === nums[right - 1]){
                    right--;
                }
                left++;
                right--;
            }else if(sum < 0){
                left++;
            }else{
                right--;
            }
        }
    }
    return result;
};