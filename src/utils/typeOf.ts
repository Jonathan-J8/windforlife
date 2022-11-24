const typeOf = (val: unknown) => {
  if (Array.isArray(val)) return 'array';
  return typeof val;
};

export default typeOf;
