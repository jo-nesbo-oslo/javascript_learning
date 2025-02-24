const cache = new WeakMap();

function computeResult(arg) {
  if (cache.has(arg)) {
    console.log('Using cached result');
    return cache.get(arg);
  }

  console.log('Computing result');
  const result = ""; /* perform time-consuming computation */;
  cache.set(arg, result);
  return result;
}