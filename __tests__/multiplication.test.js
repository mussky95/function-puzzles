import multiplicate from '../src/multiplication';

test('multiplication test', () => {
  expect(multiplicate(1, 2, 3, 4, 5)).toEqual(120);
});
