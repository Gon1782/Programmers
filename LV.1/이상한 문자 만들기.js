function solution(s) {
  let a = s.match(/\s|\w+/g);
  let b = s.match(/\S+/g);
  let c = [];
  for (let i = 0; i < b.length; i++) {
    c.push([...b[i]].map((x, idx) => (idx % 2 === 0 ? x.toUpperCase() : x.toLowerCase())).join(""));
  }
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== " ") {
      a.splice(i, 1, c[d]);
      d++;
    }
  }
  return a.join("");
}
