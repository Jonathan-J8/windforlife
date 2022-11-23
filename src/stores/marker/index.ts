export { MarkerAction, MarkerProvider, useMarkerAction, useMarkerState } from './context';
import * as endpoints from './endpoints';
import parse from './parse';

export const marker = { ...endpoints, parse };
