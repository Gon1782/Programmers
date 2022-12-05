function solution(lines) {
    let length = [];
    for (let i = 0; i < lines.length; i++) {
        for (let j = i + 1; j < lines.length; j++) {
            if (lines[i][0] >= lines[j][0] && lines[i][1] <= lines[j][1]) {
                length.push(lines[i][0], lines[i][1])
            } else if (lines[i][0] <= lines[j][0] && lines[i][1] >= lines[j][1]) {
                length.push(lines[j][0], lines[j][1])
            } else if (lines[i][1] >= lines[j][0] && lines[i][0] <= lines[j][0]) {
                length.push(lines[j][0], lines[i][1])
            } else if (lines[i][0] >= lines[j][0] && lines[i][0] <= lines[j][1]) {
                length.push(lines[i][0], lines[j][1])
            }
        }
    }
    let sortedLength = length.sort((a, b) => a - b)
    let count = 0
    for (let i = 0; i < sortedLength.length; i += 2) {
        count += sortedLength[i + 1] - sortedLength[i]
    }
    return count
}