const isObject = (obj: unknown) => Object.getPrototypeOf(obj) === Object.prototype;

export default isObject;
