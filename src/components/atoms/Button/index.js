import React from "react";

function index(props) {
  return (
    <button
      {...props}
      className={`bg-${props.color} text-xs focus:ring-2 ring-${props.ring} font-bold px-3 rounded py-2 text-gray-50`}
    >
      {props.children}
    </button>
  );
}

export default index;
