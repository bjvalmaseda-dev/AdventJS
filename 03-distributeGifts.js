function distributeGifts(packOfGifts, reindeers) {
  const weightOfBox = packOfGifts.reduce((acc, item) => {
    return (acc += item.length);
  }, 0);

  const maxWeightPerReno = reindeers.reduce(
    (acc, item) => (acc += item.length * 2),
    0
  );

  return Math.floor(maxWeightPerReno / weightOfBox);
}

console.log(distributeGifts(packOfGifts, reindeers));
