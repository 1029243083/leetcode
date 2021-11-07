/**统计一个数字在排序数组中出现的次数。
 * 输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums.length === 0) return 0;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        if (nums[left] != target) {
            left++;
        } else {
            break;
        }
    }
    console.log(left)
    while (right >= left) {
        if (nums[right] != target) {
            right--;
        } else {
            break;
        }
    }
    console.log(right)

    return right - left + 1;
};


console.log(search([5, 7, 7, 8, 8, 10], 8))


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            index++;
        }
    }
    return index;
};