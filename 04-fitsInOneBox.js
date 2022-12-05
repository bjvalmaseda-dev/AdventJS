function fitsInOneBox(boxes) {
  const orderBoxes = boxes.sort((a, b) => {
    return a.l + a.w + a.h - (b.l + b.w + b.h);
  });

  return orderBoxes.every((box, i) => {
    if (i === 0) return true;
    const prevBox = orderBoxes[i - 1];
    return prevBox.l < box.l && prevBox.w < box.w && prevBox.h < box.h;
  });
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];

console.log(fitsInOneBox(boxes)); // true
