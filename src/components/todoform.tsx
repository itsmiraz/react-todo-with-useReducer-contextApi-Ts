import { FormEvent, useContext, useState } from "react";
import {
  TTodo,
  TTodoContextProvider,
  TodoContextProvider,
} from "../context/TodoContext";
import { TypeConstants } from "../constants";

const TodoForm = () => {
  const { state, dispatch } = useContext(
    TodoContextProvider
  ) as TTodoContextProvider;
  console.log(state);
  const [Title, setTitle] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!Title) {
      return;
    }
    const newTodo: TTodo = {
      id: Math.random(),
      title: Title,
      isCompleted: false,
    };
    dispatch({ type: TypeConstants.ADD_TODO, payload: newTodo });
    setTitle("");
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="w-full flex gap-x-4 space-y-1 text-gray-100"
      >
        <label htmlFor="Search" className="hidden">
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            value={Title}
            name="Search"
            onChange={e => setTitle(e.target.value)}
            placeholder="Search..."
            className="w-32 p-4 text-sm rounded-md sm:w-auto focus:outline-none  text-gray-800  focus:border-violet-400"
          />
        </div>
        <button
          type="submit"
          className="px-8 py-2 w-32 font-semibold rounded bg-gray-100 text-gray-800"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
