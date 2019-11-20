const partialApplication = (fn, ...args) => (...more) => fn(...args, ...more);

export default partialApplication;
