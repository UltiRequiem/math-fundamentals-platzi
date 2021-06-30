function root(number, root) {
  return Math.pow(number, 1 / root);
}

const myNumber = 4 ** 2; // 16
const test = root(myNumber, 4);
console.log(test);
