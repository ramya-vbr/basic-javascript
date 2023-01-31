import React from "react";

function Jsconst() {
  const pi = 3.14;
  // pi = 3.14567; this will give an error
  // pi = 3.14 + 10; this line also give an error.
  // once define const value it cannot be reassigned.
  const cars = ["Saab", "Volvo", "BMW"];
  const car = { type: "Fiat", model: "500", color: "white" };

  return (
    <div>
      <h1>const cannot be reassigned</h1>
      <p>
        JavaScript const variables must be assigned a value when they are
        declared:
      </p>
      const x; x = 50; this is incorrect.
      <h5>const Array answer</h5>
      <p>{cars[1]}</p>
      <h5>const object answer</h5>
      <p>{car.type}</p>
      <p>{car.model}</p>
      <p>{car.color}</p>
    </div>
  );
}
export default Jsconst;
