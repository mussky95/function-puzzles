import { foldl, foldr } from '../src/fold';

test('Fold Fold test', () => {
  const obj = {
    a: 1, b: 2, c: 3, d: 4, e: 5,
  };

  const picker = function (acc, key) {
    return [...acc, { [key]: this[key] }];
  };

  expect(foldl(picker, [], ['b', 'd', 'e'], obj)).toEqual([{ b: 2 }, { d: 4 }, { e: 5 }]);
  expect(foldr(picker, [], ['b', 'd', 'e'], obj)).toEqual([{ e: 5 }, { d: 4 }, { b: 2 }]);
});
