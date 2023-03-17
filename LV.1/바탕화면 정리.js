function solution(wallpaper) {
  let x = wallpaper.length;
  let y = wallpaper[0].length;
  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].includes("#") && x > i) x = i;
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#" && y > j) {
        y = j;
      }
    }
  }
  let x2 = 0;
  let y2 = 0;
  for (let i = wallpaper.length - 1; i >= 0; i--) {
    if (wallpaper[i].includes("#") && x2 <= i) x2 = i + 1;
    for (let j = wallpaper[i].length - 1; j >= 0; j--) {
      if (wallpaper[i][j] === "#" && y2 <= j) {
        y2 = j + 1;
      }
    }
  }
  return [x, y, x2, y2];
}
