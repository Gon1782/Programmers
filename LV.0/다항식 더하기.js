function solution(polynomial) {
  let a = polynomial.match(/\S+/g);
  let x = 0;
  let number = 0;
  if (Number.isInteger(Number(a[0]))) number += Number(a[0]);
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "x") x += 1;
    if (a[i].includes("x") && a[i] !== "x") x += Number(a[i].match(/\d+/g)[0]);
    if (a[i] === "+" && Number.isInteger(Number(a[i + 1]))) number += Number(a[i + 1]);
  }
  if (x === 0) return `${number}`;
  if (x !== 1 && number !== 0) return `${x}x + ${number}`;
  if (x === 1 && number !== 0) return `x + ${number}`;
  if (x !== 1 && number === 0) return `${x}x`;
  if (x === 1 && number === 0) return "x";
}
