function solution(my_string, queries) {
  for (const query of queries) {
    const [s, e] = query;
    const string1 = my_string.slice(0, s);
    const string2 = [...my_string.slice(s, e + 1)].reverse().join("");
    const string3 = my_string.slice(e + 1);
    my_string = string1 + string2 + string3;
  }
  return my_string;
}
