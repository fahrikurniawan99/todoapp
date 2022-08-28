import React from "react";

function ButtonIndigo(props) {
  return (
    <button
      {...props}
      className={`bg-indigo-500 outline-none text-xs focus:ring-2 ring-indigo-300 font-bold px-5 rounded py-2 text-gray-50`}
    >
      {props.children}
    </button>
  );
}

function ButtonDanger(props) {
  return (
    <button
      {...props}
      className={`bg-red-500 outline-none text-xs focus:ring-2 ring-red-300 font-bold px-5 rounded py-2 text-gray-50`}
    >
      {props.children}
    </button>
  );
}

export { ButtonIndigo, ButtonDanger };
