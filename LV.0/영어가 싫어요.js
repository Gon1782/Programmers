function solution(numbers) {
    let a = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let b = []
    let c = 0;
    while (numbers.length > c) {
        for (let i = 3; i <= 5; i++) {
            if (a.includes(numbers.substr(c, i))) {
                b.push(numbers.substr(c, i))
                c += i
            }
        }
    }
    const num = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    }
    return Number(b.map(x => num[x]).join(''))
}