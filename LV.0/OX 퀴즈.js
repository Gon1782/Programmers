function solution(quiz) {
    let answer = []
    for (let i = 0; i < quiz.length; i++) {
        let solve = quiz[i].match(/\S+/g);
        for (let j = 0; j < solve.length; j++) {
            if (solve[j] === "+") {
                let cal = Number(solve[j - 1]) + Number(solve[j + 1])
                cal === Number(solve[4]) ? answer.push("O") : answer.push("X")
            } else if (solve[j] === "-") {
                let cal = Number(solve[j - 1]) - Number(solve[j + 1])
                cal === Number(solve[4]) ? answer.push("O") : answer.push("X")
            }
        }
    }
    return answer
}