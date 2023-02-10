function solution(s) {
  const num = s.replace(/{/g, "").replace(/}/g, "").split(",");
  const uniqueNum = [...new Set(num)];
  const answer = [];
  for (let i = 0; i < uniqueNum.length; i++) {
    answer.push([Number(uniqueNum[i]), num.filter((x) => x === uniqueNum[i]).length]);
  }
  return [...answer].sort((a, b) => b[1] - a[1]).map((x) => x[0]);
}
