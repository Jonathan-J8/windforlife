export type MarkerDetailState = { show: boolean; default: boolean; prev: MarkerDetailData; current: MarkerDetailData };

export enum MarkerAction {
  ADD = 'add',
  REMOVE = 'remove',
  SHOW = 'show',
  HIDE = 'hide',
}

export type MarkerDetailAction =
  | { type: MarkerAction.ADD; payload: { show: boolean; current: MarkerDetailData } }
  | { type: MarkerAction.REMOVE }
  | { type: MarkerAction.SHOW }
  | { type: MarkerAction.HIDE };

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

export const initialState: MarkerDetailState = {
  show: false,
  default: true,
  prev: { ...initialtMarker },
  current: {
    ...initialtMarker,
  },
};
