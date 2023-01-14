function solution(citations) {
  for (let h = citations.length; h > 0; h--) {
    if (citations.filter((x) => x >= h).length >= h) return h;
  }
  return 0;
}
