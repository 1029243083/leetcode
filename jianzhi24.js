/**
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 * 输入: 1->2->3->4->5->NULL
 */


/**
 * @param {ListNode} head
 * @return {ListNode}
 * 递归写法
 * 
 * 
 */
var reverseList = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    const p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p
};

/**
 * 
 * @param {*} head
 * 迭代写法
 * 1. 定义两个指针
 * 2. 依次往后移动
 * 3. 在赋值的时候，使用一个临时变量保持引用防止找不到 
 */
var reverseList = function (head){
    let prev = null;
    let curr = head;
    while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
}