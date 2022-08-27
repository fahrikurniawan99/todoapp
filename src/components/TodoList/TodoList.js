import Dots from "../../assets/images/svg/Dots";

function TodoList(props) {
  const todos = props.todos;
  return (
    <div className="mt-10">
      <div className="bg-gray-100 w-full shadow-lg rounded-sm px-3 pb-9 pt-5 relative space-y-5">
        <h1 className="absolute bg-gray-100 -top-3 left-0 font-bold text-gray-600 px-4 py-1 rounded-lg">
          Todo List
        </h1>
        {!todos.length ? (
          <h1 className="text-base font-semi-bol text-gray-600 text-center ">
            Not Todo <span className="animate-pulse font-bold">...</span>
          </h1>
        ) : (
          todos.map((todo) => {
            return (
              <div
              className="bg-white w-full px-4 text-md py-3 flex justify-between items-center shadow-md rounded-md"
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
