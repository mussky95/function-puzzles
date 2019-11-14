import getEvenNumsAverage from '../src/even-numbers-average';

describe('Even numbers average value', () => {
  test('getEvenNumsAverage test', () => {
    const array = [1, 2, 3, 4, 5, 6];

    expect(getEvenNumsAverage(array)).toEqual(4);
  });
});
