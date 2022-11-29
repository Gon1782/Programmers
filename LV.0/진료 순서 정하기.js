function solution(emergency) {
    let a = [...emergency].sort((a, b) => b - a)
    return emergency.map((x) => a.indexOf(x) + 1)
}