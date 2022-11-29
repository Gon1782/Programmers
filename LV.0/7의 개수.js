function solution(array) {
    let a = array.join('')
    return a.replace(/[^7]/g, '').length
}