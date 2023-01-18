function solution(cacheSize, cities) {
  let cache = [];
  let time = 0;
  if (cacheSize === 0) return cities.length * 5;
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    if (!cache.includes(city)) {
      cache.push(city);
      time += 5;
    } else if (cache.length === cacheSize) {
      cache.push(city);
      time += 1;
      cache.splice(cache.indexOf(city), 1);
    } else {
      cache.push(city);
      time += 1;
    }
    if (cache.length > cacheSize) cache.shift();
  }
  return time;
}
