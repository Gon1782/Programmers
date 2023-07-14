function solution(records) {
  const result = [];
  const users = {};

  for (const record of records) {
    const [flag, uid, name] = record.split(" ");
    if (flag === "Enter" || flag === "Change") {
      users[uid] = name;
    }
  }

  for (const record of records) {
    const [flag, uid, name] = record.split(" ");
    if (flag === "Enter") {
      result.push(`${users[uid]}님이 들어왔습니다.`);
    } else if (flag === "Leave") {
      result.push(`${users[uid]}님이 나갔습니다.`);
    }
  }

  return result;
}
