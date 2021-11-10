/**
 * 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:

     3
    / \
   4   5
  / \
 1   2
给定的树 B：

   4 
  /
 1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

示例 1：

输入：A = [1,2,3], B = [3,1]
输出：false
示例 2：

输入：A = [3,4,5,1,2], B = [4,1]
输出：true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 
 * @param {*} A 
 * @param {*} B 
 * @returns 
 * 大概思路
 * 判断两棵树是否相等
 * 但是会出现A的子树跟B树相同
 * 
 * 所以要循环A的子树跟B树比较
 * 
 * 不太懂这题
 */
var isSubStructure = function(A, B) {
    if(!A || !B) return false;
    return isSubTrun(A,B) || isSubStructure(A.left,B) || isSubStructure(A.right,B);
};

function isSubTrun(R1,R2){
    if(!R2) return true;
    if(!R1) return false;
    if(R1.val !== R2.val)  return false
    return isSubTrun(R1.left,R2.left) && isSubTrun(R1.right,R2.right)
}