function solution(board, moves) {
  let basket = [];
  for (let i = 0; i < moves.length; i++) {
    let a = 0;
    while (a < board.length) {
      if (board[a][moves[i] - 1] !== 0) {
        basket.push(board[a][moves[i] - 1]);
        board[a].splice(moves[i] - 1, 1, 0);
        break;
      }
      a++;
    }
  }
  let answer = 0;
  for (let i = 0; i < basket.length; i++) {
    if (basket[i] === basket[i + 1]) {
      basket.splice(i, 2);
      answer += 2;
      i = -1;
    }
  }
  return answer;
}
