/**
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 */

/**
 * 思路
 * 1. 入栈一直添加到stack1中
 * 2. 出栈，他是要删除入栈的第一个，
 * 3. 我们先判断statck2中是否有数据，如果有直接pop
 * 4. 如果没有，先把stack1的数据全部转移到statck2中
 * 5. 如果转换后stack2里面没有值的话直接返回-1
 * 6. 里面有值的话stack2.pop
 */

var CQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    // 保持stack1一直是入栈
    this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    // 每次出栈的时候，看看stack2里面有没有值，有值的话先pop
    if(this.stack2.length){
        return this.stack2.pop();
    }else{
        // 没有值的话把stack1的数据转移到stack2中
        while(this.stack1.length){
            this.stack2.push(this.stack1.pop());
        }

        // 转移后看看stack2中是否有值
        if(!this.stack2.length){
            return -1;
        }else{
            // 经过转移stack1的那个数组的最底一项，变成stack2的最顶一项
            return this.stack2.pop();
        }
    }
};
