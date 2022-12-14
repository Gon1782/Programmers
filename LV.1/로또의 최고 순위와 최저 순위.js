function solution(lottos, win_nums) {
  const rank = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
  let lotto = lottos.filter((x) => x !== 0);
  let zero = lottos.filter((x) => x === 0).length;
  let count = 0;
  for (let i of lotto) {
    if (win_nums.includes(i)) count++;
  }
  return [rank[count + zero], rank[count]];
}
