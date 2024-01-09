import { useContext } from "react";
import {
  TTodoContextProvider,
  TodoContextProvider,
} from "../context/TodoContext";
import { TypeConstants } from "../constants";

const TodoList = () => {
  const { state, dispatch } = useContext(
    TodoContextProvider
  ) as TTodoContextProvider;

  return (
    <div className="space-y-4 mb-4">
      {state.map(item => (
        <div
          className="flex items-center justify-between bg-white text-gray-600 px-4 py-2 rounded-lg "
          key={item.id}
        >
          <p>{item.title}</p>

          <button
            onClick={() =>
              dispatch({ type: TypeConstants.COMPLETE_TASK, payload: item.id })
            }
            className={`${
              item.isCompleted ? "bg-green-500" : "bg-gray-700"
            }  text-white px-4 py-2 rounded-lg`}
          >
            {item.isCompleted ? "Completed" : "Complete"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
