import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { TypeConstants } from "../constants";

export type TTodoContextProvider = {
  state: TTodo[];
  dispatch: Dispatch<TAction>;
};

export const TodoContextProvider = createContext<
  TTodoContextProvider | undefined
>(undefined);

export type TTodo = {
  id: number;
  title: string;
  isCompleted: boolean;
};

type TAction = {
  type: string;
  payload: TTodo | number;
};

const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case TypeConstants.ADD_TODO:
      return [...currentState, action.payload as TTodo];
    case TypeConstants.COMPLETE_TASK:
      return currentState.map(item =>
        item.id === (action.payload as number)
          ? {
              ...item,
              isCompleted: !item.isCompleted,
            }
          : item
      );
    default:
      return currentState;
  }
};

type ContextType = {
  children: ReactNode;
};
const TodoContext = ({ children }: ContextType) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = {
    state,
    dispatch,
  };

  return (
    <TodoContextProvider.Provider value={values}>
      {children}
    </TodoContextProvider.Provider>
  );
};

export default TodoContext;
