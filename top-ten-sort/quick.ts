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
    let i = low + 1;
    let j = high;
    const pivot = nums[low];
    while (true) {
        while (nums[i] < pivot) {
            if (i === high) break;
            else i++;
        }
        while (nums[j] > pivot) {
            if (j === low) break;
            else j--;
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
