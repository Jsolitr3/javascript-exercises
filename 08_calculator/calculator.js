const add = function(x, y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(x) {
	x.push(0);
  let z = 0;
  for (number of x){
    z += number;
  }
  return z;
};

const multiply = function(x) {
  let z =  1;
  for (number of x){
    z *= number;
  }
  return z;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
	let z = 1;
  for (let i = x; i>0; i--){
    z *= i;
  }
  return z;
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
