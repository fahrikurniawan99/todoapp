import Navbar from "../../components/Navbar/Navbar";
import InputTodo from "../../components/InputTodo/InputTodo";
import TodoList from "../../components/TodoList/TodoList";
import { useState } from "react";

function Home() {
  const [activity, setActiviy] = useState("");
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");
  const [edit, setEdit] = useState({});

  const idGenerator = () => {
    return Date.now();
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    if (!activity) {
      return setMessage("*Not Todo Empty");
    }
    if (edit.id) {
      // membuat todo baru sesuai value yang kita masukan
      const updateTodo = {
        ...edit,
        activity: activity,
      };
      // cari index
      const findIndex = todos.findIndex((todo) => {
        return todo.id == edit.id;
      });

      //clone todos
      const cloneTodos = [...todos];
      cloneTodos[findIndex] = updateTodo;
      setTodos(cloneTodos);
      return handlerCancel();
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
    setMessage("");
    if (edit.id) {
      handlerCancel();
    }
  };

  const handlerEdit = (todo) => {
    setActiviy(todo.activity);
    setEdit(todo);
    setMessage("");
  };

  const handlerCancel = () => {
    setActiviy("");
    setEdit({});
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
          edit={edit}
          onClickCancel={handlerCancel}
        />
        <TodoList
          todos={todos}
          onClickDelete={handlerDelete}
          onClickEdit={handlerEdit}
        />
      </div>
    </div>
  );
}

export default Home;
