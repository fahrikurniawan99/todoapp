import Navbar from "../../components/Navbar/Navbar";
import InputTodo from "../../components/InputTodo/InputTodo";
import TodoList from "../../components/TodoList/TodoList";
import { useState } from "react";

function Home() {
  const [activity, setActiviy] = useState("");
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");

  const idGenerator = () => {
    return Date.now();
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    if (!activity) {
      return setMessage("*Not Todo Empty");
    }
    setMessage("");
    setTodos([
      ...todos,
      {
        id: idGenerator(),
        activity,
      },
    ]);
    setActiviy("");
  };
  const handlerDelete = (todoId) => {
    const filterTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(filterTodos);
  };

  return (
    <div className="container mx-auto p-1">
      <Navbar />
      <div className="mt-10">
        <InputTodo
          onSubmit={handlerSubmit}
          value={activity}
          onChange={(event) => setActiviy(event.target.value)}
          message={message}
        />
        <TodoList todos={todos} onClickDelete={handlerDelete} />
      </div>
    </div>
  );
}

export default Home;
