function root(number, root) {
  return Math.pow(number, 1 / root);
}

const numberOne = root(9, 2);
const numberTwo = root(6, 2);

const result = numberTwo * numberOne;
const secondForm = root(9*6, 2)

console.log(result)
console.log(secondForm)
