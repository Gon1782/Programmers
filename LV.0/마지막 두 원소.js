function solution(num_list) {
  const answer = [...num_list];
  const end = num_list.length - 1;
  num_list[end] > num_list[end - 1] ? answer.push(num_list[end] - num_list[end - 1]) : answer.push(num_list[end] * 2);
  return answer;
}
