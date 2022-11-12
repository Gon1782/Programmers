function solution(my_string) {
    let a = my_string.match(/\d/g);
    let b = a.map(x => Number(x));
    let c = b.sort((a, b) => (a - b));
    return c
}