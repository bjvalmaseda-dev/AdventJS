function getMaxGifts(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number
): number {
  return Math.max(
    ...giftsCities
      .reduce(
        (acc: number[][], item: number) =>
          acc.concat(acc.map((acc) => [item].concat(acc))),
        [[]]
      )
      .filter((item) => item.length <= maxCities)
      .map((item) => item.reduce((acc, value) => acc + value, 0))
      .filter((item) => item <= maxGifts)
  );
}

export default getMaxGifts;
