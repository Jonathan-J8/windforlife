import { MarkerDetailState, MarkerAction, MarkerDetailAction, initialtMarker } from './constants';

const reducer = (state: MarkerDetailState, action: MarkerDetailAction): MarkerDetailState => {
  switch (action.type) {
    case MarkerAction.SHOW:
      return {
        ...state,
        show: true,
      };
    case MarkerAction.HIDE:
      return {
        ...state,
        show: false,
      };
    case MarkerAction.ADD:
      return {
        ...state,
        prev: { ...state.current },
        ...action.payload,
      };
    case MarkerAction.REMOVE:
      return {
        ...state,
        default: true,
        prev: { ...state.current },
        current: { ...initialtMarker },
      };
    default:
      return state;
  }
};

export default reducer;
