/**
 * 格式化时间为yyyy/MM/dd HH:mm:dd
 * @param {Date} date
 */
export function toDefaultLocalString(date) {
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
export function toDefaultLocalDateString(date) {
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
export function toDefaultLocalTimeString(date) {
    return new Intl.DateTimeFormat('cn', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(date)
}