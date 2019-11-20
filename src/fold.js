const foldl = (f, acc, xs, context = null, i = 0) => (i >= xs.length
  ? acc
  : foldl(f,
    f.call(context, acc, xs[i], i, xs),
    xs,
    context,
    i + 1));

const foldr = (f, acc, xs, context = null, i = 0) => (i >= xs.length
  ? acc
  : f.call(context,
    foldr(f, acc, xs, context, i + 1),
    xs[i],
    i,
    xs));

export { foldl, foldr };
