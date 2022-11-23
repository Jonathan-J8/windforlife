const markerEndpoint = '/data/anemometers';

export const marker = {
  base: markerEndpoint,
  getAll: () => `${markerEndpoint}/list.json`,
  getById: (id: number) => `${markerEndpoint}/detail/${id}.json`,
};
