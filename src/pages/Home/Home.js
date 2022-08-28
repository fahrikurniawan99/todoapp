import Navbar from "../../components/Navbar/Navbar";
import InputTodo from "../../components/InputTodo/InputTodo";
import TodoList from "../../components/TodoList/TodoList";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

function Home() {
  const [activity, setActiviy] = useState("");
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");
  const [edit, setEdit] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const idGenerator = () => {
    return Date.now();
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    // jika user memasukan string kosong
    if (!activity) {
      return setMessage("*Not Todo Empty");
    }

    // jika edit.id ada maka lakukan
    if (edit.id) {
      // membuat todo baru sesuai value yang kita masukan
      const updateTodo = {
        ...edit,
        activity: activity,
        done: false,
      };
      // cari index
      const findIndex = todos.findIndex((todo) => {
        return todo.id == edit.id;
      });

      //clone todos
      const cloneTodos = [...todos];
      cloneTodos[findIndex] = updateTodo;
      // set todos dengan clone todos
      setTodos(cloneTodos);
      return handlerCancel();
    }
    setMessage("");
    setTodos([
      ...todos,
      {
        id: idGenerator(),
        activity,
        done: false,
      },
    ]);
    setActiviy("");
  };

  // delete handler
  const handlerDelete = (todoId) => {
    // filter todo
    const filterTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(filterTodos);
    setMessage("");
    setIsOpen(true);
    if (edit.id) {
      handlerCancel();
    }
  };

  // handler edit
  const handlerEdit = (todo) => {
    setActiviy(todo.activity);
    setEdit(todo);
    setMessage("");
  };

  // handler cancel
  const handlerCancel = () => {
    setActiviy("");
    setEdit({});
  };

  //handler Done
  const handlerDone = (todo) => {
    const updateTodo = {
      ...todo,
      done: todo.done ? false : true,
    };
    const findIndex = todos.findIndex((currentTodo) => {
      return currentTodo.id == todo.id;
    });
    const cloneTodos = [...todos];
    cloneTodos[findIndex] = updateTodo;
    setTodos(cloneTodos);
  };

  const handlerClearTodo = () => {
    setTodos([]);
    handlerCancel();
  };

  return (
    <>
      <div className="container mx-auto p-1 mb-8">
        <Navbar onClick={handlerClearTodo} />
        <div className="mt-20">
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
            onChangeChecklist={handlerDone}
            isOpen={isOpen}
          />
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        as={Fragment}
      >
        <Dialog
          as="div"
          className="fixed indent-0 flex items-center justify-center"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <div className="bg-white p-8 rounded z-50 shadow-xl mx-3 fixed top-1/3 right-7">
            <Dialog.Panel>
              <Dialog.Title className="font-bold">
                Successfully Deleted
              </Dialog.Title>
              <Dialog.Description className="text-gray-500">
                You have successfully deleted todo
              </Dialog.Description>
              <button
                onClick={() => setIsOpen(false)}
                className="py-2 px-3 bg-indigo-200 outline-none rounded text-indigo-500 mt-3"
              >
                Close
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
      <div className="bg-red-200 rounded px-1 cursor-pointer absolute bottom-10 right-0">
        <h1 className="text-red-500 text-sm" onClick={() => handlerClearTodo()}>
          Clear Todo
        </h1>
      </div>
    </>
  );
}

export default Home;
