const stringLength = require('./stringLength');

test('Return the string lenght', () => {
  expect(stringLength('ismail')).toBe(6);
});

test('Throw error if the string is less then 1 characters', () => {
  expect(() => {
    stringLength('ismailcourr');
  }).toThrow('The string is less then 1 char or more then 10 characters');
});

test('Throw error if the string is More then 10 characters', () => {
  expect(() => {
    stringLength('ismailcourr');
  }).toThrow('The string is less then 1 char or more then 10 characters');
});
