import curry from '../src/curry';

test('Currying test', () => {
  const sum = (a, b) => a + b;
  const a = 1;
  const b = 2;

  expect(curry(sum)(a)(b)).toEqual(sum(a, b));
  expect(curry(sum, a)(b)).toEqual(sum(a, b));
  expect(curry(sum, a, b)).toEqual(sum(a, b));
});
