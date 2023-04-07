function solution(players, callings) {
  const rank = {};
  const index = {};
  for (let i = 0; i < players.length; i++) {
    rank[i + 1] = players[i];
    index[players[i]] = i + 1;
  }
  for (const player of callings) {
    const rankNow = index[player];
    const frontRunner = rank[rankNow - 1];
    rank[rankNow] = frontRunner;
    rank[rankNow - 1] = player;
    index[player] = rankNow - 1;
    index[frontRunner] = rankNow;
  }
  return Object.values(rank);
}
