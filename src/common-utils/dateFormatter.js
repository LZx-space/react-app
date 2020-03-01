/**
 * 格式化时间为yyyy/MM/dd HH:mm:dd
 * @param {Date} date
 */
export function ToDefaultLocalString(date) {
    return new Intl.DateTimeFormat('cn', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(date)
}

/**
 * 格式化时间为yyyy/MM/dd
 * @param {Date} date
 */
export function ToDefaultLocalDateString(date) {
    return new Intl.DateTimeFormat('cn', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(date)
}

/**
 * 格式化时间为HH:mm:ss
 * @param {Date} date
 */
export function ToDefaultLocalTimeString(date) {
    return new Intl.DateTimeFormat('cn', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(date)
}