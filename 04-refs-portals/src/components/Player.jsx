import { useState, useRef } from "react";

export default function Player() {
  const inputValue = useRef();

  const [name, setName] = useState()

  function handleClick() {
    setName(inputValue.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {name ? name : "unknown entity"}</h2>
      <p>
        <input ref={inputValue} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
