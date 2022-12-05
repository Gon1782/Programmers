function solution(strings, n) {
    let sortedWord = []
    let answer = []
    let sortedStrings = strings.sort()
    for (let i of sortedStrings) {
        sortedWord.push(i.substr(n, 1))
        sortedWord.sort()
    }
    for (let i of sortedWord) {
        for (let j of sortedStrings) {
            if (i === j.substr(n, 1)) answer.push(j)
        }
    }
    return [...new Set(answer)]
}