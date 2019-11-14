import { reduce, filter } from './array-functions';
import { compose, pipe } from './functions-composition';

/*const add = (a, b) => a + b;

const sum = (array) => reduce(array, add, 0);

const isEven = (n) => n % 2 === 0;

const getEvenNums = (array) => filter(array, isEven);*/

//const getEvenNumsAverage = compose(sum, getEvenNums);
//const getEvenNumsAverage = pipe(getEvenNums, sum);

const getEvenNumsAverage = (array) => {
  const items = filter(array, (n) => n % 2 === 0);
  const sum = reduce(items, (a, b) => a + b, 0);

  return sum / items.length;
};

export default getEvenNumsAverage;
