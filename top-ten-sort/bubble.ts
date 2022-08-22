// 冒泡排序
function sortArray(nums: number[]): number[] {
    const len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) { // 易错：注意边界
            if (nums[j] > nums[j + 1]) {
                const t = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = t;
            }
        }
    }
    return nums;
}
