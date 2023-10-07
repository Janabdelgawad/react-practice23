import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [head, setHead] = useState("");

  function handleChange(event) {
    // console.log(event.target.value);
    setName(event.target.value);
  }
  function handleClick(event) {
    setHead(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {head}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
