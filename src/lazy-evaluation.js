const lazy = (fn, ...args) => () => fn(...args);

export default lazy;
