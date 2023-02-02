import React, { useState } from "react";

function Functioneg() {
  const [msg, setMsg] = useState();
  const [number, setNumber] = useState();
  const handleCelsius = (e) => {
    console.log("checck", e.target.value);
    setNumber(e.target.value);
    setMsg((5 / 9) * (number - 32));
  };
  return (
    <div>
      <h5>fahrenheit to celsius</h5>
      <input type="number" onChange={handleCelsius} />
      <p>{msg}</p>
    </div>
  );
}
export default Functioneg;
