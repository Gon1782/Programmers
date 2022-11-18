function solution(before, after) {
    if ([...before].sort().join() === [...after].sort().join()) {
        return 1
    } else{
        return 0
    }
}