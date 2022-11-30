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

export const getReadingsLastDirectionByDate = (readings: MarkerReadingData[]) => {
  let lastDate = 0;
  let lastDir = 0;
  for (let i = 0, len = readings.length; i < len; ++i) {
    const item = readings[i];
    const date = new Date(item.timestamp).getTime();
    if (date > lastDate) {
      lastDate = date;
      lastDir = item.dir;
    }
  }
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
