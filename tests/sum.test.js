const {sum, minus }
= require('../src/sum');

test('adds 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('minus 5 - 3 = 2', () => {
  expect(minus(5, 3)).toBe(2);
});
