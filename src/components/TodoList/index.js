import MenuAction from "./MenuAction";

function index(props) {
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
                  <MenuAction
                    onClickEdit={() => props.onClickEdit(todo)}
                    onClickDelete={() => props.onClickDelete(todo.id)}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default index;
