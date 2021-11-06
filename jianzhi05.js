// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
//输入：s = "We are happy."
//输出："We%20are%20happy."
/**
 * 把字符串按照空分割成数组，循环数组，见到空格，就替换，最后合并字符串
 */

/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    const strArr = s.split("");
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] === " "){
            strArr[i] = "%20";
        }
    }
    return strArr.join('');
};