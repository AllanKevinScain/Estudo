const opacity: Record<number, number> = {};

for (let index = 0; index <= 100; index++) {
  opacity[index] = index / 100;
}

export default opacity;
