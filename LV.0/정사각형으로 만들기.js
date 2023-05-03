function solution(arr) {
  const width = arr[0].length;
  const height = arr.length;
  if (width < height) {
    for (let i = 0; i < arr.length; i++) {
      const newArr = new Array(height - width).fill(0);
      arr[i] = [...arr[i]].concat(newArr);
    }
  } else {
    for (let i = 0; i < width - height; i++) {
      const newArr = new Array(width).fill(0);
      arr.push(newArr);
    }
  }
  return arr;
}
