const typeOf = (val: unknown) => {
  if (Array.isArray(val)) return 'array';
  return typeof val;
  // return {}.toString
  //   .call(obj)
  //   .match(/\s([a-zA-Z]+)/)[1]
  //   .toLowerCase();
};

export default typeOf;
