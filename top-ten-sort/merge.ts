// 归并排序
function sortArray(nums: number[]): number[] {
    if (nums.length < 2) return nums;
    const index = Math.floor(nums.length / 2);
    return merge(sortArray(nums.slice(0, index)), sortArray(nums.slice(index)));
}

function merge(left: number[], right: number[]): number[] {
    const result = [];
    let l = 0;
    let r = 0;
    while (l < left.length && r < right.length) {
        if (left[l] <= right[r]) {
            result.push(left[l]);
            l++;
        } else {
            result.push(right[r]);
            r++;
        }
    }
    if (l < left.length) {
        result.push(...left.slice(l));
    }
    if (r < right.length) {
        result.push(...right.slice(r));
    }
    return result;
}
