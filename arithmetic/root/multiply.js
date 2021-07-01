function root(number, root) {
  return Math.pow(number, 1 / root);
}

const firstForm = root(9, 2) * root(6, 2);
console.log(firstForm);

const secondForm = root(9 * 6, 2);
console.log(secondForm);
