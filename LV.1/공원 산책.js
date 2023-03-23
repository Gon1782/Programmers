const location = (park) => {
  let currentX = 0;
  let currentY = 0;
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes("S")) {
      currentX = park[i].indexOf("S");
      currentY = i;
      break;
    }
  }
  return [currentX, currentY];
};

function solution(park, routes) {
  let [currentX, currentY] = location(park);
  const maxX = park[0].length - 1;
  const maxY = park.length - 1;
  for (const route of routes) {
    const direction = route.split(" ")[0];
    const distance = Number(route.split(" ")[1]);
    if (direction === "E" && currentX + distance <= maxX) {
      for (let j = 1; j <= distance; j++) {
        if (park[currentY][currentX + j] === "X") break;
        if (j === distance) currentX += distance;
      }
    } else if (direction === "W" && currentX - distance >= 0) {
      for (let j = 1; j <= distance; j++) {
        if (park[currentY][currentX - j] === "X") break;
        if (j === distance) currentX -= distance;
      }
    } else if (direction === "S" && currentY + distance <= maxY) {
      for (let j = 1; j <= distance; j++) {
        if (park[currentY + j][currentX] === "X") break;
        if (j === distance) currentY += distance;
      }
    } else if (direction === "N" && currentY - distance >= 0) {
      for (let j = 1; j <= distance; j++) {
        if (park[currentY - j][currentX] === "X") break;
        if (j === distance) currentY -= distance;
      }
    }
  }
  return [currentY, currentX];
}
