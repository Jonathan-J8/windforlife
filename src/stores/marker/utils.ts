import { initialtMarker } from './constants';

export const parse = (obj?: MarkerDetailData) => ({
  id: obj?.id || 0,
  name: obj?.name || '',
  lat: `${obj?.loc?.lat}` || '',
  long: `${obj?.loc?.long}` || '',
  weeklyForce: `${obj?.statistics?.average?.weekly?.force}` || '',
  dailyForce: `${obj?.statistics?.average?.daily?.force}` || '',
  readings: obj?.readings || [],
});

export const getLastDirection = (readings: MarkerReadingData[]) => {
  if (readings.length === 0) return 0;
  const last = readings.length - 1;
  const lastDir = readings[last].dir;
  return lastDir;
};

interface MergedReadingsProps {
  current: MarkerReadingData[];
  previous: MarkerReadingData[];
}
export const mergeReadings = ({ current, previous }: MergedReadingsProps) => {
  const mergedReadings = current.map((obj: MarkerReadingData, i: number) => {
    return {
      timestamp: { current: obj.timestamp, previous: previous[i]?.timestamp || 0 },
      force: { current: obj.force, previous: previous[i]?.force || 0 },
      dir: { current: obj.dir, previous: previous[i]?.dir || 0 },
    };
  });
  return mergedReadings;
};

export const sortReadingsByDate = (list: MarkerReadingData[]) => {
  const listSorted = [...list].sort((a, b) => {
    return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
  });
  return listSorted;
};

export const getDefaultData = () => ({ ...initialtMarker });
