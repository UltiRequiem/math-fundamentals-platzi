function mathIsCool(base, firstExpo, secondExpo) {
  return base ** firstExpo * base ** secondExpo;
}

const test = mathIsCool(2, 3, 4);
console.log(test); // 128

/*
 * The good old trick:
 * (2 ** 3) * (2 ** 4) = 8 * 16 = 80 + 40 + 8 = 128
 * (2 ** 3) * (2 ** 4) = (2 ** 7)
 */
