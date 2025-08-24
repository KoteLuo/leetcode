function maxArea(height: number[]): number {
    let left: number = 0;
    let right: number = height.length-1;
    let maxArea: number = 0;

    while(left<right){
        const currentArea=Math.min(height[left],height[right])*(right-left);
        maxArea=Math.max(maxArea,currentArea);
        if(height[left]<height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxArea;
};