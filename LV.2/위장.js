function solution(clothes) {
  const numberOfTypes = [];
  const uniqueTypes = clothes
    .filter((x, i, arr) => {
      return arr.findIndex((y) => y[1] === x[1]) === i;
    })
    .map((x) => x[1]);

  for (let i = 0; i < uniqueTypes.length; i++) {
    numberOfTypes.push(clothes.map((x) => x[1]).filter((x) => x === uniqueTypes[i]).length);
  }
  return numberOfTypes.reduce((x, y) => x * (y + 1), 1) - 1;
}
