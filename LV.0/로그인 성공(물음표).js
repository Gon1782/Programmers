function solution(id_pw, db) {
    let id = db.map(x => x[0]);
    let pw = db.map(x => x[1]);
    let a = []
    for (let i = 0; i < db.length; i++) {
        a.push([id[i], pw[i]].join())
    }
    if (a.includes('' + id_pw)) {
        return 'login'
    } else if (id.includes(id_pw[0])) {
        return 'wrong pw'
    } else {
        return 'fail'
    }
}