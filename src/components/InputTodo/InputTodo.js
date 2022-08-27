import React from "react";
import Button from "../atoms/Button/Button";
import Input from "../atoms/Input/Input";

function InputTodo(props) {
  return (
    <>
      <h1 className="text-gray-600 font-medium text-center mb-1">
        What you Todo ?
      </h1>
      <form onSubmit={props.onSubmit}>
        <Input onChange={props.onChange} value={props.value} />
        <div className="ml-4">
          {props.message && (
            <h1 className="text-red-500 text-xs">{props.message}</h1>
          )}
        </div>
        <div
          className={`${
            !props.message ? "mt-4" : "mt-0"
          } flex justify-center items-center`}
        >
          <Button type="submit">Add Todo</Button>
        </div>
      </form>
    </>
  );
}

export default InputTodo;
