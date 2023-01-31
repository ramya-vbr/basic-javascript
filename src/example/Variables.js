import React from "react";

function Variables() {
  carName = "volvo";
  var carName = "bmw"; // You can use the variable before it is declared:

  carName = "Saab";
  //   let carName = "Volvo"; this will reference error: Cannot access 'carName' before initialization
  return (
    <div>
      <h1>Javascript Variables</h1>
      <h2>let hoisting</h2>
      <p>
        Variables defined with "var" are hoisted to the top and can be
        initialized at any time. Meaning: You can use the variable before it is
        declared:
      </p>
      <p>
        Variables defined with "let" are also hoisted to the top of the block,
        but not initialized. Meaning: Using a "let" variable before it is
        declared will result in a ReferenceError:
      </p>
    </div>
  );
}
export default Variables;
