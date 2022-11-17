function solution(numbers) {
    let a = numbers.sort((a,b) => a-b)
    let b = a[a.length-1] * a[a.length-2]
    let c = a[0] * a[1]
    return (c > 0 && c > b) ? c : b
}