export const base = '/data/anemometers';
export const getAll = () => `${base}/list.json`;
export const getById = (id: number) => `${base}/detail/${id}.json`;
