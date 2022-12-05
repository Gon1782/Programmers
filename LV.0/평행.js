function solution(dots) {
    let slope = []
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            slope.push((dots[j][0] - dots[i][0]) / (dots[j][1] - dots[i][1]))
        }
    }
    return slope.length !== [...new Set(slope)].length ? 1 : 0
}