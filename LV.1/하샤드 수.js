function solution(x) {
    return x % [...(''+x)].reduce((a,b) => Number(a) + Number(b)) === 0 ? true : false
}