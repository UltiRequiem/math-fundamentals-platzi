function potencyDivision(base, firstExpo, secondExpo) {
  return base ** (firstExpo - secondExpo);
}

const test = potencyDivision(2, 4, 3);
console.log(test); // 2

/*
 * ((a ** n) / (a ** m)) = a ** (n - m)
 */
