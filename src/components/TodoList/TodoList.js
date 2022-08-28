import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

function TodoList(props) {
  return (
    <div className="mt-10">
      <div className="w-full space-y-5">
        {!props.todos.length ? (
          <h1 className="text-lg font-medium text-gray-300 text-center">
            Not Todo ...
          </h1>
        ) : (
          props.todos.map((todo) => {
            return (
              <div
                className="bg-gray-100 w-full px-4 text-md py-3 flex justify-between items-start shadow-lg rounded-md"
                key={todo.id}
              >
                <div className="space-y-3">
                  <h1 className="text-xl font-medium text-gray-700">
                    {todo.activity}
                  </h1>
                  {todo.done ? (
                    <h1 className="text-green-500 text-xs bg-green-200 w-16 rounded text-center font-medium ">
                      finish
                    </h1>
                  ) : (
                    <h1 className="text-red-400 text-xs bg-red-200 w-16 rounded text-center font-medium ">
                      not finish
                    </h1>
                  )}
                </div>
                <div className="flex space-x-2 pt-1">
                  <div>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={todo.done}
                      onChange={() => props.onChangeChecklist(todo)}
                    />
                  </div>
                  <Menu as="div" className="relative">
                    <Menu.Button className="flex items-center outline-none -z-10">
                      <img src="dots.svg" alt="" srcset="" />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-300"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-200"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="focus:outline-none absolute top-full w-32 right-0 bg-white shadow-xl rounded origin-top-right">
                        <Menu.Item className="flex text-xs py-3 px-6 hover:bg-indigo-100">
                          <h1 onClick={() => props.onClickEdit(todo)}>Edit</h1>
                        </Menu.Item>
                        <hr />
                        <Menu.Item className="flex py-3 text-xs px-6 hover:bg-indigo-100">
                          <h1 onClick={() => props.onClickDelete(todo.id)}>
                            Hapus
                          </h1>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default TodoList;
