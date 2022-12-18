function solution(id_list, report, k) {
  let reportCount = {};
  let getMail = {};
  id_list.forEach((x) => {
    reportCount[x] = 0;
    getMail[x] = 0;
  });
  // 객체 생성

  let checkReportOnce = [...new Set(report)];
  // 중복 제거

  for (let i = 0; i < checkReportOnce.length; i++) {
    reportCount[checkReportOnce[i].split(" ")[1]] += 1;
  }
  // 신고 당한 횟수 추가

  let b = Object.keys(reportCount).filter((x) => reportCount[x] >= k);
  // 정지당한 유저 필터링

  for (let i = 0; i < checkReportOnce.length; i++) {
    if (b.includes(checkReportOnce[i].split(" ")[1])) {
      getMail[checkReportOnce[i].split(" ")[0]] += 1;
    }
  }
  // 결과 메일 받은 횟수 추가

  return Object.values(getMail);
}
