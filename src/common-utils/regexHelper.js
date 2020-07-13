
/**
 * 判断是否为身份证
 * 
 * @param {String} input 输入
 */
export function isIdNo(input) {
    return idNo18.test(input) || idNo15.test(input)
}

/**
 * 判断是否18位身份证
 * 
 * @param {String} input 输入
 */
export function isIdNo18(input) {
    return idNo18.test(input)
}

/**
 * 判断是否为15位身份证
 * 
 * @param {String} input 输入
 */
export function idIdNo15(input) {
    return idNo15.test(input)
}