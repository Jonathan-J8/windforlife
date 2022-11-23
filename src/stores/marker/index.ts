export { MarkerProvider, useMarkerAction, useMarkerState } from './context';
import { Action } from './constants';
import * as endpoints from './endpoints';
import * as utils from './utils';

export const marker = { endpoints, utils, actions: Action };
