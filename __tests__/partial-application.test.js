import partialApplication from '../src/partial-application';

test('Partial Application test', () => {
  const sum = (a, b) => a + b;
  const a = 1;
  const b = 2;

  expect(partialApplication(sum, a)(b)).toEqual(sum(a, b));
  expect(partialApplication(sum, a, b)()).toEqual(sum(a, b));
});
