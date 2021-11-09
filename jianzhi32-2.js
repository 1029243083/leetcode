/**
 * 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

 

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
  [9,20],
  [15,7]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof
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
    const queue = [root]; //第一层
    while (queue.length) {
        const tempArr = []
        const len = queue.length; //防止queue的长度发生变化
        for (let i = 0; i < len; i++) { // 一层有一个或多个元素
            const n = queue.shift();    // 每次从前面取一个，循环结束后当前层的节点会在queue中移除掉
            tempArr.push(n.val);
            n.left && queue.push(n.left);    // 查看当前节点的子节点
            n.right && queue.push(n.right);
        }

        arr.push(tempArr);

    }
    return arr
};