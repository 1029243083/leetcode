/**
 * 
 * @param {*} head 
 * @returns 
 * 
 * 目标： 复制一个链表，但是链表中有一个random属性随机指向一个节点或null
 */
//  使用map，空间复杂度O(n)
var copyRandomList = function (head) {
    if (!head) return head;
    let node = head;
    let map = new Map(); // 利用map来缓存所有节点

    // 复制节点，将新节点放入map中
    while (node) {
        map.set(node, new Node(node.val));  // 用当的节点做key，新建一个节点当value
        //{ 
        //  {val: 1,next:{val:2...},random:null}: {val:1,next:{val:2,...}} 
        //}
        node = node.next;
    }
    node = head;

    //对map里的新节点进行遍历操作 ，建立关系
    //循环原来的那个链表 map.get(node)就是拿出对应node的value值也是一个节点
    //对他的next进行赋值，看看原来的之前的那个node有没有next，如果有的话就赋值，没有就是null
    //map中key和value的值是一样的
    //map.get(node.next)因为一开始所有的链表都在map中存储了，node.next得到的时key，通过这个key可以找到跟key长得一样的value
    //最后复制random
    while (node) {
        map.get(node).next = map.get(node.next) === undefined ? null : map.get(node.next);
        map.get(node).random = map.get(node.random);
        node = node.next;
    }
    // 经过循环新的链表已经建立好联系了
    // 通过在map中找到那个头返回
    return map.get(head);
};