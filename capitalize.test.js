const capitalize = require('./capitalize');

test('The first letter is Capital', () => {
  expect(capitalize('morocco')).toBe('Morocco');
});
