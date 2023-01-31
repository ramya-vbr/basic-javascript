import React, { useState } from "react";
import bulboff from "../Images/bulboff.gif";
import bulbon from "../Images/bulbon.gif";

function BasicExample() {
  const [bulbValue, setBulbValue] = useState();
  const [colorValue, setColorValue] = useState(false);
  const handleOn = () => {
    setBulbValue(true);
  };
  const handleOff = () => {
    setBulbValue(false);
  };
  const handleColor = () => {
    setColorValue(true);
  };
  return (
    <div>
      <h1>Bulb example from w3school</h1>
      <button onClick={handleOn}>Turn on the bulb</button>
      {bulbValue ? (
        <img src={bulbon} alt="bulbon" />
      ) : (
        <img src={bulboff} alt="bulboff" />
      )}
      <button onClick={handleOff}>Turn off the bulb</button>
      <h1>Text color change</h1>
      <h3 style={{ color: colorValue ? "red" : "" }}>hello world!</h3>
      <button onClick={handleColor}>I'm changing the color of text</button>
    </div>
  );
}
export default BasicExample;
