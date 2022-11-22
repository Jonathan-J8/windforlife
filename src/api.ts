const endpoint = '/public/data/anemometers';
export const allAnemometer = () => `${endpoint}/list.json`;
export const anemometerById = (id: number) => `${endpoint}/detail/${id}.json`;
