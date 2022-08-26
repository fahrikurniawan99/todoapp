import React from "react";

function index(props) {
  return (
    <input
      type="text"
      className="px-4 py-2 text-lg font-medium text-gray-500 rounded-full outline-none border-2 w-full focus:border-indigo-400 transition-all duration-300"
      {...props}
    />
  );
}

export default index;
