function solution(board) {
    if (board.join().includes(1) === false) return board.length * board.length
    if (board.join().includes(0) === false) return 0
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1 && j !== 0 && j !== board[i].length - 1 && i !== 0 && i !== board.length - 1) {
                if (board[i - 1][j - 1] !== 1) board[i - 1].splice(j - 1, 1, 2)
                if (board[i - 1][j] !== 1) board[i - 1].splice(j, 1, 2)
                if (board[i - 1][j + 1] !== 1) board[i - 1].splice(j + 1, 1, 2)
                if (board[i][j - 1] !== 1) board[i].splice(j - 1, 1, 2)
                if (board[i][j + 1] !== 1) board[i].splice(j + 1, 1, 2)
                if (board[i + 1][j - 1] !== 1) board[i + 1].splice(j - 1, 1, 2)
                if (board[i + 1][j] !== 1) board[i + 1].splice(j, 1, 2)
                if (board[i + 1][j + 1] !== 1) board[i + 1].splice(j + 1, 1, 2)
            } else if (board[i][j] === 1 && j === 0 && i === 0) {
                if (board[i][j + 1] !== 1) board[i].splice(j + 1, 1, 2)
                if (board[i + 1][j] !== 1) board[i + 1].splice(j, 1, 2)
                if (board[i + 1][j + 1] !== 1) board[i + 1].splice(j + 1, 1, 2)
            } else if (board[i][j] === 1 && j === 0 && i === board.length - 1) {
                if (board[i][j + 1] !== 1) board[i].splice(j + 1, 1, 2)
                if (board[i - 1][j] !== 1) board[i - 1].splice(j, 1, 2)
                if (board[i - 1][j + 1] !== 1) board[i - 1].splice(j + 1, 1, 2)
            } else if (board[i][j] === 1 && j === board[i].length - 1 && i === 0) {
                if (board[i][j - 1] !== 1) board[i].splice(j - 1, 1, 2)
                if (board[i + 1][j] !== 1) board[i + 1].splice(j, 1, 2)
                if (board[i + 1][j - 1] !== 1) board[i + 1].splice(j - 1, 1, 2)
            } else if (board[i][j] === 1 && j === board[i].length - 1 && i === board.length - 1) {
                if (board[i][j - 1] !== 1) board[i].splice(j - 1, 1, 2)
                if (board[i - 1][j] !== 1) board[i - 1].splice(j, 1, 2)
                if (board[i - 1][j - 1] !== 1) board[i - 1].splice(j - 1, 1, 2)
            } else if (board[i][j] === 1 && i === 0 && j !== 0 && j !== board[i].length - 1) {
                if (board[i][j - 1] !== 1) board[i].splice(j - 1, 1, 2)
                if (board[i][j + 1] !== 1) board[i].splice(j + 1, 1, 2)
                if (board[i + 1][j - 1] !== 1) board[i + 1].splice(j - 1, 1, 2)
                if (board[i + 1][j] !== 1) board[i + 1].splice(j, 1, 2)
                if (board[i + 1][j + 1] !== 1) board[i + 1].splice(j + 1, 1, 2)
            } else if (board[i][j] === 1 && i === board.length - 1 && j !== 0 && j !== board[i].length - 1) {
                if (board[i - 1][j - 1] !== 1) board[i - 1].splice(j - 1, 1, 2)
                if (board[i - 1][j] !== 1) board[i - 1].splice(j, 1, 2)
                if (board[i - 1][j + 1] !== 1) board[i - 1].splice(j + 1, 1, 2)
                if (board[i][j - 1] !== 1) board[i].splice(j - 1, 1, 2)
                if (board[i][j + 1] !== 1) board[i].splice(j + 1, 1, 2)
            } else if (board[i][j] === 1 && j === 0 && i !== 0 && i !== board.length - 1) {
                if (board[i - 1][j] !== 1) board[i - 1].splice(j, 1, 2)
                if (board[i - 1][j + 1] !== 1) board[i - 1].splice(j + 1, 1, 2)
                if (board[i][j + 1] !== 1) board[i].splice(j + 1, 1, 2)
                if (board[i + 1][j] !== 1) board[i + 1].splice(j, 1, 2)
                if (board[i + 1][j + 1] !== 1) board[i + 1].splice(j + 1, 1, 2)
            } else if (board[i][j] === 1 && j === board[i].length - 1 && i !== 0 && i !== board.length - 1) {
                if (board[i - 1][j] !== 1) board[i - 1].splice(j, 1, 2)
                if (board[i - 1][j - 1] !== 1) board[i - 1].splice(j - 1, 1, 2)
                if (board[i][j - 1] !== 1) board[i].splice(j - 1, 1, 2)
                if (board[i + 1][j] !== 1) board[i + 1].splice(j, 1, 2)
                if (board[i + 1][j - 1] !== 1) board[i + 1].splice(j - 1, 1, 2)
            }
        }
    }
    let answer = 0
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) answer += 1
        }
    }
    return answer
}