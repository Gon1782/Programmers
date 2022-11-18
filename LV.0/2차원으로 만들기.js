function solution(num_list, n) {
  let a = [];
  for (let i = 0; i < num_list.length; i += n) {
    a.push(num_list.slice(i, i + n));
  }
  return a;
}