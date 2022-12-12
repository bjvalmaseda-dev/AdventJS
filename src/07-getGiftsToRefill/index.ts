function getGiftsToRefill(a1: string[], a2: string[], a3: string[]): string[] {
  const allGift = [...new Set([...a1, ...a2, ...a3])].filter(
    (gift) =>
      Number(a1.includes(gift)) +
        Number(a2.includes(gift)) +
        Number(a3.includes(gift)) ===
      1
  );
  return allGift;
}

export default getGiftsToRefill;
