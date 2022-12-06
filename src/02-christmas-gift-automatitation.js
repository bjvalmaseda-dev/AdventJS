function wrapping(gifts) {
  const result = gifts.map((gift) => {
    const wrap = new Array(gift.length + 1).fill("*").join("");
    return `${wrap}\\n*${gift}*\\n${wrap}`;
  });

  return result;
}

const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);

console.log(wrapped);
/* [
  "*****\\n*cat*\\n*****",
  "******\\n*game*\\n******",
  "*******\\n*socks*\\n*******"
] */
