const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

export default compose;
