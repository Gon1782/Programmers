function solution(numlist, n) {
    let sortNum = numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n)).map(x => x - n)
    for (let j = 0; j < sortNum.length; j++) {
        if (sortNum[j] < 0 && Math.abs(sortNum[j]) === Math.abs(sortNum[j + 1])) {
            sortNum.splice(j, 2, sortNum[j + 1], sortNum[j])
        }
    }
    return sortNum.map(x => x + n)
}
