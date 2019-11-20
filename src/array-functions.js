const def = (x) => typeof x !== 'undefined';

const undef = (x) => !def(x);

const reduce = ([x, ...xs], fn, memo, i = 0) => {
  if (undef(x)) {
    return memo;
  }

  return reduce(xs, fn, fn(memo, x, i), i + 1);
};

const filter = ([x, ...xs], fn) => {
  if (undef(x)) {
    return [];
  }

  if (fn(x)) {
    return [x, ...filter(xs, fn)];
  }

  return [...filter(xs, fn)];
};

const map = ([x, ...xs], fn) => {
  if (undef(x)) {
    return [];
  }

  return [fn(x), ...map(xs, fn)];
};

export { reduce, filter, map };
