/**
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例 1:

输入：s = "abaccdeff"
输出：'b'
示例 2:

输入：s = "" 
输出：' '

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    if (s === "") return ' ';
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] != undefined) {
            // 表示已经出现过了
            obj[s[i]] = obj[s[i]] += 1;
        } else {
            obj[s[i]] = 0;
        }
    }
    console.log(obj)
    for (key in obj) {
        if (obj[key] === 0) {
            return key
        }
    }
    return ' ';
};

console.log(firstUniqChar("cc"))