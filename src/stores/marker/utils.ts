export const parse = (obj?: MarkerDetailData) => ({
  id: obj?.id || 0,
  name: obj?.name || '',
  lat: `${obj?.loc?.lat}` || '',
  long: `${obj?.loc?.long}` || '',
  weeklyForce: `${obj?.statistics?.average?.weekly?.force}` || '',
  dailyForce: `${obj?.statistics?.average?.daily?.force}` || '',
  readings: obj?.readings || [],
});

export default parse;
