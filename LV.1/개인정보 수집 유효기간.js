function solution(today, terms, privacies) {
  let typeOfTerm = terms.map((x) => x[0]);
  let period = terms.map((x) => +x.slice(2));
  let day = today.split(".").map((x) => +x);
  let date = (day[0] * 12 + day[1]) * 28 + day[2];
  let answer = privacies.map((x) =>
    [
      x
        .split(" ")[0]
        .split(".")
        .map((x) => +x),
      x.split(" ")[1],
    ].flat()
  );
  return answer
    .map((x) => {
      let i = typeOfTerm.indexOf(x[3]);
      return (x[0] * 12 + x[1] + period[i]) * 28 + x[2];
    })
    .map((x, i) => {
      if (x <= date) return i + 1;
    })
    .filter((x) => x > 0);
}
