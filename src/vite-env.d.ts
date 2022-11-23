/// <reference types="vite/client" />

declare interface MarkerData {
  id: number;
  name: string;
  loc: {
    lat: number;
    long: number;
  };
}

type MarkerReadingData = {
  timestamp: Date;
  force: number;
  dir: number;
};

declare interface MarkerDetailData extends MarkerData {
  statistics: {
    average: {
      daily: { force: number };
      weekly: { force: number };
    };
  };
  readings: MarkerReadingData[];
}
