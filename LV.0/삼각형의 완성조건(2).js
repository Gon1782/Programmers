function solution(sides) {
    let otherSides = []
    let sortSides = sides.sort((a, b) => a - b);
    let sumSides = sides.reduce((a, b) => a + b)
    for (let i = 1; i < sumSides; i++) {
        if (sortSides[1] < sortSides[0] + i) {
            otherSides.push(i)
        } else if (sortSides[1] < i && i < sumSides) {
            otherSides.push(i)
        }
    }
    return otherSides.length
}