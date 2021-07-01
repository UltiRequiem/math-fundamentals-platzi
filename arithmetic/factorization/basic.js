function factors(number) {
  return [...Array(number + 1).keys()].filter((i) => number % i === 0);
}

console.log(factors(24));
