const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sumOfArray = array.reduce((total, current) => {
    return total + current;
  }, 0);
  return sumOfArray;
};

const multiply = function(array) {
  let productOfArray = array.reduce((total, current) => {
    return total * current;
  }, 1);
  return productOfArray;
};

const power = function(base, exponent) {
	let total = 1;
  for (let i = 0; i < exponent; i++) {
    total *= base;
  }
  return total;
};

const factorial = function(int) {
	let total = 1;
  for (let i = int; i != 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
