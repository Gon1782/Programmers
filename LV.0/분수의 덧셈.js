function solution(denum1, num1, denum2, num2) {
    let i = 0
    while(1) {
        i++
        if (i % num1 === 0 && i % num2 === 0) {
            break
        }
    }
    let j = i
    let numerator = denum1*i/num1+denum2*i/num2
    let denominator = i
    while(1) {
        if (numerator % j === 0 && denominator % j === 0) {
            break
        }
        j--
    }
    return [numerator/j,denominator/j]
}