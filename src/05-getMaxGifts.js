function getMaxGiftsOther(giftsCities, maxGifts, maxCities) {
  return Math.max(
    ...giftsCities
      .reduce(
        (acc, item) => acc.concat(acc.map((acc) => [item].concat(acc))),
        [[]]
      )
      .filter((item) => item.length <= maxCities)
      .map((item) => item.reduce((acc, value) => acc + value, 0))
      .filter((item) => item <= maxGifts)
  );
}

const giftsCities = [12];
const maxGifts = 20;
const maxCities = 3;

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

console.log(getMaxGifts(giftsCities, maxGifts, maxCities)); // 20
