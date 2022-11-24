export const parse = (obj?: MarkerDetailData) => ({
  id: obj?.id || 0,
  name: obj?.name || '',
  lat: `${obj?.loc?.lat}` || '',
  long: `${obj?.loc?.long}` || '',
  weeklyForce: `${obj?.statistics?.average?.weekly?.force}` || '',
  dailyForce: `${obj?.statistics?.average?.daily?.force}` || '',
  readings: obj?.readings || [],
});

export const getLastDir = (readings: MarkerReadingData[]) => {
  const last = readings.length - 1;
  const lastDir = readings[last].dir;
  return lastDir;
};

interface MergedReadingsProps {
  id: number;
  current: MarkerReadingData[];
  previous: MarkerReadingData[];
}
export const mergeReadings = ({ id, current, previous }: MergedReadingsProps) => {
  const mergedReadings = current.map((obj: MarkerReadingData, i: number) => {
    return {
      id: id + obj.timestamp.toString(),
      timestamp: { current: obj.timestamp, previous: previous[i]?.timestamp || 0 },
      force: { current: obj.force, previous: previous[i]?.force || 0 },
      dir: { current: obj.dir, previous: previous[i]?.dir || 0 },
    };
  });
  return mergedReadings;
};
