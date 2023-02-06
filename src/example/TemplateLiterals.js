import React from "react";

function TemplateLiterals() {
  let firstName = "John";
  let lastName = "Doe";
  let text = `Welcome ${firstName} ${lastName}!`;
  let price = 10;
  let VAT = 0.25;
  let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
  // let tags = ["template literals", "javascript", "react"];
  //   let list = `<li>${tags}</li>`;

  return (
    <div>
      <h2>Template Literals</h2>
      <p>{text}</p>
      <p>{total}</p>
      {/* <p>{list}</p> */}
    </div>
  );
}
export default TemplateLiterals;
