import { reduce, filter as filterBase } from './array-functions';
import { pipe } from './functions-composition';

const isEven = (n) => n % 2 === 0;

const filter = (fn) => (array) => filterBase(array, fn);

const add = (acc, item) => ({ sum: acc.sum + item, count: acc.count + 1 });

const aggregate = (fn, acc) => (array) => reduce(array, fn, acc);

const average = ({ sum: test, count }) => test / count;

const getEvenNumsAverage = pipe(filter(isEven), aggregate(add, { sum: 0, count: 0 }), average);

export default getEvenNumsAverage;
