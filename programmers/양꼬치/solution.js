// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120830

function solution(n, k) {
    return n * 12000 + 2000 * (k - (n-n%10) / 10) 
}