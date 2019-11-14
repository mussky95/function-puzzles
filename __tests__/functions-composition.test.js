import compose from '../src/functions-composition';

describe('Functions composition test', () => {
  test('compose test', () => {
    const triple = (x) => x * 3;
    const plusOne = (x) => x + 1;

    const composed = compose(triple, triple, plusOne);

    expect(composed(1)).toEqual(10);
  });
});
