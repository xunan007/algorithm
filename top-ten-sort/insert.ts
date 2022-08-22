// 插入排序
function sortArray(nums: number[]): number[] {
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        // 注意边界，易错
        let prevIndex = i - 1;
        const current = nums[i];
        while (prevIndex >= 0 && current < nums[prevIndex]) {
            nums[prevIndex + 1] = nums[prevIndex];
            prevIndex--;
        }
        // 注意边界，易错
        nums[prevIndex + 1] = current;
    }
    return nums;
}
