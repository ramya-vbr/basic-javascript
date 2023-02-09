import React, { useState } from "react";

function JsArraySort() {
  const [alpha, setAlpha] = useState();
  const [numeric, setNumeric] = useState();
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let sorting = fruits.sort();
  const fruit = ["kiwi", "pears", "lychee"];
  let reversing = fruit.reverse();
  const points = [40, 100, 1, 5, 25, 10];
  const handleAlphabet = () => {
    setAlpha(points.sort());
  };
  const handleNumeric = () => {
    setNumeric(
      points.sort(function (a, b) {
        return a - b;
      })
    );
  };
  return (
    <div>
      <h1>Sorting and reversing array example :</h1>
      <p>sorting Result: {sorting}</p>
      <p>Reversing Result: {reversing}</p>
      <button onClick={handleAlphabet}>Sort Alphabetically</button>
      <p>{alpha}</p>
      <button onClick={handleNumeric}>Sort Numerically</button>
      <p>{numeric}</p>
    </div>
  );
}
export default JsArraySort;
