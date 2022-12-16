function solution(new_id) {
  let first = new_id.toLowerCase();
  let second = first.match(/[a-z]|\d|[.]|-|_/g).join("");
  let third = second.replaceAll(/[.]+/g, ".");

  let fourth = third;
  if (fourth[0] === ".") fourth = fourth.slice(1);
  if (fourth[fourth.length - 1] === ".") fourth = fourth.slice(0, -1);

  let fifth = fourth;
  if (fifth === "") fifth += "a";

  let sixth = fifth.slice(0, 15);
  if (sixth[sixth.length - 1] === ".") sixth = sixth.slice(0, -1);

  let seventh = sixth;
  if (seventh.length < 3) seventh += seventh[seventh.length - 1].repeat(3 - seventh.length);
  return seventh;
}
