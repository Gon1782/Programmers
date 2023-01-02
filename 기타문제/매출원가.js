const FIFO = (record) => {
  let buy = record.filter((x) => x[0] === "P");
  let sell = record.filter((x) => x[0] === "S");
  let price = buy
    .join("")
    .match(/\d+/g)
    .filter((x) => Number(x) >= 100);
  let buyNum = buy.map((x) => Number(x[x.length - 1]));
  let sellNum = sell.map((x) => Number(x[x.length - 1])).reduce((a, b) => a + b);

  let fifo = 0;
  for (let i = 0; i < buyNum.length; i++) {
    if (buyNum[i] >= sellNum) {
      fifo += price[i] * sellNum;
      break;
    } else {
      fifo += price[i] * buyNum[i];
      sellNum -= buyNum[i];
    }
  }

  return fifo;
};

const LIFO = (record) => {
  let a = record.map((x) => x.match(/\d+/g).map((y) => Number(y)));
  let b = [];
  let lifo = 0;
  for (let i = 0; i < record.length; i++) {
    if (record[i][0] === "P") b.push(a[i]);
    if (record[i][0] === "S") {
      let d = Number(record[i][record[i].length - 1]);
      while (d >= 0) {
        let c = b.pop();
        if (c[1] > d) {
          lifo += c[0] * d;
          b.push([c[0], c[1] - d]);
          break;
        } else if (c[1] === d) {
          lifo += c[0] * d;
          break;
        } else {
          lifo += c[0] * c[1];
          d -= c[1];
        }
      }
    }
  }

  return [FIFO(record), lifo];
};
