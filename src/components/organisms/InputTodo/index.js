import React from "react";
import { Input, Button } from "../../atoms";

function index() {
  return (
    <>
      <h1 className="text-gray-600 font-medium text-center mb-1">
        What you Todo ?
      </h1>
      <Input />
      <div className="flex justify-center items-center mt-3">
        <Button color="indigo-500" ring="indigo-300">Add Todo</Button>
      </div>
    </>
  );
}

export default index;
