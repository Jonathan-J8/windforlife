import { useContext, createContext, useReducer, PropsWithChildren, Dispatch } from 'react';
import { MarkerState, MarkerAction, Action, initialState, initialtMarker } from './constants';

const reducer = (state: MarkerState, action: MarkerAction): MarkerState => {
  switch (action.type) {
    case Action.SHOW:
      return {
        ...state,
        show: true,
      };
    case Action.HIDE:
      return {
        ...state,
        show: false,
      };
    case Action.ADD:
      return {
        ...state,
        prev: { ...state.current },
        ...action.payload,
      };
    case Action.REMOVE:
      return {
        ...state,
        isDefault: true,
        prev: { ...state.current },
        current: { ...initialtMarker },
      };
    default:
      return state;
  }
};

const ContextState = createContext<MarkerState>({ ...initialState });
const ContextAction = createContext<Dispatch<MarkerAction>>(() => {
  return;
});

export const useMarkerState = () => useContext(ContextState);
export const useMarkerAction = () => useContext(ContextAction);

// provide state and dispatch separatly to prevent rerender from state change.
// info : dispatch does not rerender if state change
export const MarkerProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });
  return (
    <ContextAction.Provider value={dispatch}>
      <ContextState.Provider value={state}>{children}</ContextState.Provider>
    </ContextAction.Provider>
  );
};
