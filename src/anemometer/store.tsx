import { useContext, createContext, useReducer, PropsWithChildren, Dispatch } from 'react';

type State = AnemometerDetail | undefined;
const ContextState = createContext<State>(undefined);
export const useAnemometerState = () => useContext(ContextState);

export enum AnemometerAction {
  ADD = 'add',
  REMOVE = 'remove',
}
type Action = { type: string; payload?: State };
const ContextAction = createContext<Dispatch<Action>>(() => {});
export const useAnemometerAction = () => useContext(ContextAction);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case AnemometerAction.ADD:
      return action.payload;
    case AnemometerAction.REMOVE:
      return undefined;
    default:
      return state;
  }
};

export const AnemometerProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, undefined);

  return (
    // provide state and dispatch context separatly to prevent rerender from state change.
    // info : dispatch does not rerender if state change
    <ContextAction.Provider value={dispatch}>
      <ContextState.Provider value={state}>{children}</ContextState.Provider>
    </ContextAction.Provider>
  );
};
