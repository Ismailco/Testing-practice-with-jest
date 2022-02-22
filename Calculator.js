class Calculator {
  constructor() {
    this.numOne;
    this.numTwo;
  }
  add(numOne, numTwo) {
    this.numOne = numOne;
    this.numTwo = numTwo;
    return this.numOne + this.numTwo;
  }
  subtract(numOne, numTwo) {
    this.numOne = numOne;
    this.numTwo = numTwo;
    return this.numOne - this.numTwo;
  }
  divide(numOne, numTwo) {
    this.numOne = numOne;
    this.numTwo = numTwo;
    return this.numOne / this.numTwo;
  }
  multiply(numOne, numTwo) {
    this.numOne = numOne;
    this.numTwo = numTwo;
    return this.numOne * this.numTwo;
  }
}

module.exports = Calculator;
