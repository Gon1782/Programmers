function solution(n, arr1, arr2) {
    let array1 = []
    let array2 = []
    let answer = []
    for (let i of arr1) {
        array1.push("0".repeat(n - i.toString(2).length) + i.toString(2))
    }
    for (let i of arr2) {
        array2.push("0".repeat(n - i.toString(2).length) + i.toString(2))
    }
    for (let i = 0; i < n; i++) {
        let section = []
        for (let j = 0; j < n; j++) {
            if (Number(array1[i].substr(j, 1)) + Number(array2[i].substr(j, 1)) !== 0) {
                section.push("#")
            } else {
                section.push(" ")
            }
        }
        answer.push(section.join(""))
    }
    return answer
}