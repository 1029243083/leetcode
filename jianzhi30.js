/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
 * 调用 min、push 及 pop 的时间复杂度都是 O(1)。
 * MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.min();   --> 返回 -3.
    minStack.pop();
    minStack.top();      --> 返回 0.
    minStack.min();   --> 返回 -2.

    用一个辅助栈帮助
    在push的时候，看看当前元素是否小于辅助栈的元素，如果小就压入栈中，不小就使用栈中那个小的元素占位
    pop方法，原始栈和辅助栈分别出栈一个
    top方法，原始栈出栈数组最后一个
    min方法，返回辅助栈中最后一个，因为在push的时候，最后一个就是最小的
 */

var MinStack = function () {
    this.stack = [];
    this.min_stack = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);
    const len = this.min_stack.length;
    if (this.min_stack[len - 1] != undefined) {
        this.min_stack.push(Math.min(this.min_stack[len - 1], x)) // 找出最小的那个
    } else {
        this.min_stack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
    this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.min_stack[this.min_stack.length - 1]
};
