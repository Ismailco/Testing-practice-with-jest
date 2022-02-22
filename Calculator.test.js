const Calculator = require('./Calculator');

const calc = new Calculator();

describe('is add', () => {
  test('add positive numbers', () => {
    expect(calc.add(1, 1)).toBe(2);
  });
  test('add nigative numbers', () => {
    expect(calc.add(-1, 1)).toBe(0);
  });
  test('add numbers more then 10', () => {
    expect(calc.add(3, 10)).toBe(13);
  });
});

describe('is subtract', () => {
  test('subtract positive numbers', () => {
    expect(calc.subtract(1, 1)).toBe(0);
  });
  test('subtract nigative numbers', () => {
    expect(calc.subtract(-5, -4)).toBe(-1);
  });
  test('subtract numbers more then 10', () => {
    expect(calc.subtract(10, 3)).toBe(7);
  });
});

describe('is divide', () => {
  test('divide positive numbers', () => {
    expect(calc.divide(4, 2)).toBe(2);
  });
  test('divide nigative numbers', () => {
    expect(calc.divide(-4, 2)).toBe(-2);
  });
  test('divide numbers more then 10', () => {
    expect(calc.divide(20, 10)).toBe(2);
  });
});

describe('is multiplay', () => {
  test('multiply positive numbers', () => {
    expect(calc.multiply(5, 2)).toBe(10);
  });
  test('amultiplynigative numbers', () => {
    expect(calc.multiply(-10, 10)).toBe(-100);
  });
  test('multiply numbers more then 10', () => {
    expect(calc.multiply(3, 10)).toBe(30);
  });
});
