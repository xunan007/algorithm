// 快速排序
function sortArray(nums: number[]): number[] {
    quick(nums, 0, nums.length - 1);
    return nums;
}

function quick(nums: number[], low: number, high: number) {
    if (low >= high) return;
    // 切分
    const p = partition(nums, low, high);
    quick(nums, low, p - 1);
    quick(nums, p + 1, high);
}

function partition(nums: number[], low: number, high: number): number {
    // 为了让 i 和 j 能够正常的自增，这里要先让 i 和 j 外移
    let i = low;
    let j = high + 1;
    const pivot = nums[low];
    while (true) {
        while (nums[++i] < pivot) {
            if (i === high) break;
        }
        while (nums[--j] > pivot) {
            if (j === low) break;
        }
        if (i < j) swap(nums, i, j);
        else break; // 有可能会溢位，但无法避免
    }
    swap(nums, low, j); // 这里用的是 j，而不是 i， 是考虑到有自交换的情况
    return j;
}

function swap(nums: number[], i: number, j: number) {
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
}
