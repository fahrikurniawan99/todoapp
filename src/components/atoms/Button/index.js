const indigo = (props) => {
  return (
    <button {...props} className="bg-indigo-400 text-xs focus:ring-2 ring-indigo-200 font-bold px-3 rounded py-2 text-gray-50">
      {props.children}
    </button>
  );
};

export {indigo}
