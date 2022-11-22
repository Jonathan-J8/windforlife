import { useContext, createContext, useReducer, PropsWithChildren, Dispatch } from 'react';

const initialState = {
  show: false,
  anemometer: {
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
  },
};

type State = { show: boolean; anemometer: AnemometerDetail };
type Action = { type: string; payload?: State };

const ContextState = createContext<State>({ ...initialState });
const ContextAction = createContext<Dispatch<Action>>(() => {});

export const useAnemometerState = () => useContext(ContextState);
export const useAnemometerAction = () => useContext(ContextAction);

export enum AnemometerAction {
  ADD = 'add',
  REMOVE = 'remove',
  SHOW = 'show',
  HIDE = 'hide',
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case AnemometerAction.SHOW:
      return {
        ...state,
        show: true,
      };
    case AnemometerAction.HIDE:
      return {
        ...state,
        show: false,
      };
    case AnemometerAction.ADD:
      return {
        ...state,
        ...action.payload,
      };
    case AnemometerAction.REMOVE:
      return {
        ...state,
        anemometer: { ...initialState.anemometer },
      };
    default:
      return state;
  }
};

export const AnemometerProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  return (
    // provide state and dispatch separatly to prevent rerender from state change.
    // info : dispatch does not rerender if state change
    <ContextAction.Provider value={dispatch}>
      <ContextState.Provider value={state}>{children}</ContextState.Provider>
    </ContextAction.Provider>
  );
};
