// 希尔排序
function sortArray(nums: number[]): number[] {
    const len = nums.length;
    let gap = Math.floor(len / 2);
    for (; gap >= 1; gap = Math.floor(gap / 2)) {
        for (let i = 0; i < len - gap; i++) {
            let prevIndex = i;
            const current = nums[i + gap];
            while (prevIndex >= 0 && current < nums[prevIndex]) {
                nums[prevIndex + gap] = nums[prevIndex];
                prevIndex -= gap;
            }
            nums[prevIndex + gap] = current;
        }
    }
    return nums;
}
