// 选择排序
function sortArray(nums: number[]): number[] {
    const len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            // 易错：注意边界
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const t = nums[i];
            nums[i] = nums[minIndex];
            nums[minIndex] = t;
        }
    }
    return nums;
}
