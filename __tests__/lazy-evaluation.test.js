import lazy from '../src/lazy-evaluation';

test('', () => {
  const add = (a, b) => a + b;
  const addLazy = lazy(add, 1, 2);

  expect(addLazy()).toEqual(3);
});
