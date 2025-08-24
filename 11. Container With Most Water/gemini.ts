function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        // 计算当前容器的面积
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        
        // 更新最大面积
        maxArea = Math.max(maxArea, currentArea);

        // 移动指针
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}