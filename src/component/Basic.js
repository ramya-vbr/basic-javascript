import React from "react";

function basic() {
  const current = Date().toLocaleString();
  const today = new Date();
  return (
    <div>
      <h1>Basic Javascript Date and Time </h1>
      <p>{current}</p>
      <p>{today.getDate()}</p>
      <p>{today.getMonth()}</p>
      <p>{today.getFullYear()}</p>
    </div>
  );
}
export default basic;
