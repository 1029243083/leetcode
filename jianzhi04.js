/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

示例:

现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。

给定 target = 20，返回 false。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var findNumberIn2DArray = function (matrix, target) {
    let f = false;
    for (let i = 0; i < matrix.length; i++) {
        const temp = matrix[i];
        if (temp[0] <= target && temp[temp.length - 1] >= target) {
            if (findTarget(temp, target) != null) {
                f = true;
                break;
            }
        }
    }
    return f;
};

function findTarget(arr, n) {
    let l = 0;
    let r = arr.length - 1;
    let target = null;
    while (l <= r) {
        let mid = Math.floor((r + l) / 2);
        if (arr[mid] === n) {
            target = mid;
            break;
        } else if (arr[mid] > n) {
            r = mid - 1;
        } else if (arr[mid] < n) {
            l = mid + 1;
        }
    }
    return target;
}