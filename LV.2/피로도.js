function solution(k, dungeons) {
  let answer = 0;
  const DFS = (k, dungeons, count) => {
    for (let i = 0; i < dungeons.length; i++) {
      const [req, use] = dungeons[i];
      if (!req || req > k) continue;
      const newDungeons = dungeons.map((v, index) => (index === i ? [] : v));
      DFS(k - use, newDungeons, count + 1);
    }
    if (answer < count) answer = count;
  };
  DFS(k, dungeons, 0);
  return answer;
}
