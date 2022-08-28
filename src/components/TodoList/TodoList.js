import { Menu, Transition } from "@headlessui/react";

function TodoList(props) {
  return (
    <div className="mt-10">
      <div className="w-full space-y-5">
        {!props.todos.length ? (
          <h1 className="text-lg font-medium animate-pulse text-indigo-600 text-center">
            Not Todo ...
          </h1>
        ) : (
          props.todos.map((todo) => {
            return (
              <div
                className="bg-gray-100 w-full px-4 text-md py-3 flex justify-between items-center shadow-lg rounded-md"
                key={todo.id}
              >
                <div>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={todo.done}
                    onChange={() => props.onChangeChecklist(todo)}
                  />
                </div>
                <div>
                  <h1
                    className={`text-lg text-gray-800 ${
                      todo.done && "line-through"
                    }`}
                  >
                    {todo.activity}
                  </h1>
                </div>
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center outline-none">
                    <img src="dots.svg" alt="" srcset="" />
                  </Menu.Button>
                  <Transition
                    enter="transition-all duration-300"
                    enterFrom="opacity-0 scale-50"
                    enterTo="opacity-100 sclae-100"
                    leave="transition-all duration-300"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-50"
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
            );
          })
        )}
      </div>
    </div>
  );
}

export default TodoList;
