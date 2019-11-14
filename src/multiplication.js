import { reduce } from './array-functions';

const multiplication = (...args) => reduce(args, (a, b) => a * b, 1);

export default multiplication;
