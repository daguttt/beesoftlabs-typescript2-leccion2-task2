function makePartOfPlant(part: string, times: number) {
  return [...new Array(times).fill(part)].join("");
}

function diePlant(seed, water, fert) {
  let plant = "";
  for (let i = 0; i < water; i++) {
    plant += makePartOfPlant("-", water);
  }
  plant += seed;
  return plant;
}

function plant(seed: string, water: number, fert: number, temp: number) {
  const hasBadTemperature = temp < 20 || temp > 30;
  if (hasBadTemperature) return diePlant(seed, water, fert);

  let plant = "";
  for (let i = 0; i < water; i++) {
    plant += makePartOfPlant("-", water);
    plant += makePartOfPlant(seed, fert);
  }
  return plant;
}
plant("@", 3, 3, 25);
