/**
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * 输入：head = [1,3,2]
 * 输出：[2,3,1]
 * 思路
 * 1. 使用一个数组当栈结构
 * 2. 循环链表把每一个元素压入栈中
 * 3. 使用数组的api反转数组，或一个个反着拿出来
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    const arr = [];
    while(head != null){
        arr.push(head.val);
        head = head.next;
    }

    return arr.reverse();
};