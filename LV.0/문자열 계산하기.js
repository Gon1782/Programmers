function solution(my_string) {
    let a = my_string.match(/\S+/g)
    let count = Number(a[0]);
    for (let i = 1; i < a.length; i++) {
        if (a[i] === "+") {
            count += Number(a[i+1]);
        } else if (a[i] === "-") {
            count -= Number(a[i+1]);
        }
    }
    return count
}