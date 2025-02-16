Function.prototype.describe = function () {
  console.log(`Function name is ${this.name}`); // This return name of the function
};

function greet(name) {
  // Here name is parameter.
  return `Hello ${name}`;
}
greet.describe("Ishan"); // Here Ishan is argument.

function add(a, b) {
  // Function expression
  return a + b;
}

const substract = function (a, b) {
  // Function linearity
  return a - b;
};

const multiply = (a, b) => a * b;

// function apply0peration(a, b,

const result = applyOperation(5, 4, (x, y) => x / y);

// Tiffin Concept :
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter());

// Imideatly Invoked Function (IIFY)

(function () {
  console.log("hitesh");
})()()()(function () {})();
