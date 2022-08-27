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
        <Input onChange={props.onChange} value={props.value}/>
        <div className="flex justify-center items-center mt-3">
          <Button type="submit">Add Todo</Button>
        </div>
      </form>
    </>
  );
}

export default InputTodo;
