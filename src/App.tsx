import TodoForm from "./components/todoform";
import TodoList from "./components/todolist";
import TodoContext from "./context/TodoContext";

function App() {
  return (
    <div className="p-10  bg-gray-800 min-h-screen">
      <div className="max-w-[500px] mx-auto">
        <TodoContext>
          <TodoList />
          <TodoForm />
        </TodoContext>
      </div>
    </div>
  );
}

export default App;
