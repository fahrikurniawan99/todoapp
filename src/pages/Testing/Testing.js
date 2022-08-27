import React, { useState } from "react";

function Testing() {
  const [ activity, setActivity ] = useState("");
  const [ todos, setTodos] = useState([]);
  const handlerSave = (event) => {
    event.preventDefault()
    setTodos(activity)
    console.log(todos);
  };
  return (
    <div>
      <h1>todo</h1>
      <form onSubmit={(event => handlerSave(event))}>
        <input
          type="text"
          onChange={(event) => setActivity(event.target.value)}
        />
        <button type="submit">hehehe</button>
      </form>
    </div>
  );
}

export default Testing;
