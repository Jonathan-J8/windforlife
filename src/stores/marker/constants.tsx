export enum Action {
  ADD = 'add',
  REMOVE = 'remove',
  SHOW = 'show',
  HIDE = 'hide',
}

export type MarkerAction =
  | { type: Action.ADD; payload: { show: boolean; current: MarkerDetailData } }
  | { type: Action.REMOVE }
  | { type: Action.SHOW }
  | { type: Action.HIDE };

export type MarkerState = { show: boolean; default: boolean; prev: MarkerDetailData; current: MarkerDetailData };

export const initialtMarker: MarkerDetailData = {
  id: 0,
  name: '',
  loc: {
    lat: 0,
    long: 0,
  },
  statistics: {
    average: {
      daily: { force: 0 },
      weekly: { force: 0 },
    },
  },
  readings: [],
};

export const initialState: MarkerState = {
  show: false,
  default: true,
  prev: { ...initialtMarker },
  current: {
    ...initialtMarker,
  },
};
