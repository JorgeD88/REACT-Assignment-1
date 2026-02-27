// Greeting.js
// Greeting.js
import React from "react";

function Greeting({ username }) {
  const today = new Date().toLocaleDateString();

  return (
    <div>
      <h1>Hello, {username}!</h1>
      <p style={{ color: "purple" }}>Today's date is: {today}</p>
    </div>
  );
}

export default Greeting;