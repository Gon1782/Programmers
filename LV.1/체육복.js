function solution(n, lost, reserve) {
  let realLost = lost.filter((x) => !reserve.includes(x)).sort((a, b) => a - b);
  let realReserve = reserve.filter((x) => !lost.includes(x)).sort((a, b) => a - b);
  let answer = n - realLost.length;
  for (let i = 0; i < realLost.length; i++) {
    if (realReserve.includes(realLost[i] - 1)) {
      answer++;
      realReserve.splice(realReserve.indexOf(realLost[i] - 1), 1);
    } else if (realReserve.includes(realLost[i] + 1)) {
      answer++;
      realReserve.splice(realReserve.indexOf(realLost[i] + 1), 1);
    }
  }
  return answer;
}
