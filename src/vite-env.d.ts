/// <reference types="vite/client" />

declare interface Anemometer {
  id: number;
  name: string;
  loc: {
    lat: number;
    long: number;
  };
}

type AnemometerReading = {
  timestamp: Date;
  force: number;
  dir: number;
};

declare interface AnemometerDetail extends Anemometer {
  statistics: {
    average: {
      daily: { force: number };
      weekly: { force: number };
    };
  };
  readings: AnemometerReading[];
}
