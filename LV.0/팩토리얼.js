function solution(n) {
    let count = 1;
    for(let i = 1; i < 12; i++){
        count *= i;
        if(count > n){
            return i - 1
        } 
    }
}