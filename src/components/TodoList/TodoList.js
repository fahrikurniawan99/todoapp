import Dots from "../../assets/images/svg/Dots";

function TodoList(props) {
  const todos = props.todos;
  return (
    <div className="mt-10">
      <div className="bg-indigo-400 w-full shadow-xl rounded-md px-3 pb-9 pt-5 relative space-y-5">
        <h1 className="absolute bg-indigo-400 -top-3 left-0 font-bold text-white px-4 py-1 rounded-lg">
          Todo List
        </h1>
        {!todos.length ? (
          <h1 className="text-lg font-medium animate-pulse text-indigo-600 text-center ">
            Not Todo ...
          </h1>
        ) : (
          todos.map((todo) => {
            return (
              <div
              className="bg-gray-100 w-full px-4 text-md py-3 flex justify-between items-center shadow-lg rounded-md"
              key={todo.id}
              >
                <input type="checkbox" name="" id="" />
                <h1 className="font-bold text-gray-600">
                  {todo.activity.toUpperCase()}
                </h1>
                <div className="cursor-pointer">
                  <Dots />
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
