export const mapRange = (current: number, minIn: number, maxIn: number, minOut: number, maxOut: number) => {
  const mapped: number = ((current - minIn) * (maxOut - minOut)) / (maxIn - minIn) + minOut;
  return mapped;
  // return clamp(mapped, minOut, maxOut);
};
