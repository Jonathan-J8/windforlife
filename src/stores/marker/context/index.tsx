import { useContext, createContext, useReducer, PropsWithChildren, Dispatch } from 'react';
import { MarkerDetailState, MarkerDetailAction, MarkerAction, initialState } from './constants';
import reducer from './reducer';

const ContextState = createContext<MarkerDetailState>({ ...initialState });
const ContextAction = createContext<Dispatch<MarkerDetailAction>>(() => {
  return;
});

export { MarkerAction };

export const useMarkerState = () => useContext(ContextState);
export const useMarkerAction = () => useContext(ContextAction);

export const MarkerProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  return (
    // provide state and dispatch separatly to prevent rerender from state change.
    // info : dispatch does not rerender if state change
    <ContextAction.Provider value={dispatch}>
      <ContextState.Provider value={state}>{children}</ContextState.Provider>
    </ContextAction.Provider>
  );
};
