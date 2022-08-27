import { Menu } from "@headlessui/react";

function TodoList(props) {
  return (
    <div className="mt-10">
      <div className="bg-indigo-400 w-full shadow-xl rounded-md px-3 pb-9 pt-5 relative space-y-5">
        <h1 className="absolute bg-indigo-400 -top-3 left-0 font-bold text-white px-4 py-1 rounded-lg">
          Todo List
        </h1>
        {!props.todos.length ? (
          <h1 className="text-lg font-medium animate-pulse text-indigo-600 text-center ">
            Not Todo ...
          </h1>
        ) : (
          props.todos.map((todo) => {
            return (
              <div
                className="bg-gray-50 w-full px-4 text-md py-3 flex justify-between items-center shadow-lg rounded-md"
                key={todo.id}
              >
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
                <div>
                  <h1 className="text-lg text-gray-800">{todo.activity}</h1>
                </div>
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center">
                    <img src="dots.svg" alt="" srcset="" />
                  </Menu.Button>
                  <Menu.Items className="focus:outline-none absolute top-full w-32 right-0 bg-white shadow-xl rounded origin-top-right">
                    <Menu.Item className="flex text-xs py-3 px-6 hover:bg-indigo-100">
                      <a>Edit</a>
                    </Menu.Item>
                    <Menu.Item className="flex py-3 text-xs px-6 hover:bg-indigo-100">
                      <a onClick={() => props.onClickDelete(todo.id)}>Hapus</a>
                    </Menu.Item>
                  </Menu.Items>
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
