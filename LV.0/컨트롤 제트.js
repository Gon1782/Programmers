function solution(s) {
    let array = s.match(/\S+/g);
    let cal = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== "Z") {
            cal += Number(array[i]);
        } else {
            cal -= Number(array[i - 1])
        }
    }
    return cal
}