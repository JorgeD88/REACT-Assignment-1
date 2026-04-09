// Greeting.js
// Greeting.js
import React, { useState } from "react";

function Greeting({ username }) {
  const [greeting, setGreeting] = useState(`Hello, ${username}!`);
  const today = new Date().toLocaleDateString();

  function changeGreeting() {
    setGreeting(`Nice to see you, ${username}!`);
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <p>Today's date: {today}</p>
      <button onClick={changeGreeting}>Change Greeting</button>
    </div>
  );
}

export default Greeting;
