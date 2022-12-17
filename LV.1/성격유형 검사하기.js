function solution(survey, choices) {
  let character = { RT: 0, TR: 0, CF: 0, FC: 0, JM: 0, MJ: 0, AN: 0, NA: 0 };
  let choice = { 1: 3, 2: 2, 3: 1, 4: 0, 5: -1, 6: -2, 7: -3 };
  let answer = "";
  for (let i = 0; i < survey.length; i++) {
    character[survey[i]] += choice[choices[i]];
  }
  character["RT"] >= character["TR"] ? (answer += "R") : (answer += "T");
  character["CF"] >= character["FC"] ? (answer += "C") : (answer += "F");
  character["JM"] >= character["MJ"] ? (answer += "J") : (answer += "M");
  character["AN"] >= character["NA"] ? (answer += "A") : (answer += "N");
  return answer;
}
