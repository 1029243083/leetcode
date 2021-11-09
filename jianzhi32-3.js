/**
 * 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

 

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [20,9],
  [15,7]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    const arr = [];
    let j = 1;
    let queue = [root];
    while (queue.length) {
        const tempArr = [];
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            if (j % 2 === 0) {
                // 从左到右
                const n = queue.pop(); // 从后面取
                tempArr.push(n.val);
                n.right && queue.unshift(n.right); // 往前面存
                n.left && queue.unshift(n.left);
            } else {
                // 从右到左
                const n = queue.shift(); //从前面取
                tempArr.push(n.val);
                n.left && queue.push(n.left); //往后面存
                n.right && queue.push(n.right);
            }
        }
        j++;
        arr.push(tempArr)
    }
    return arr;

};