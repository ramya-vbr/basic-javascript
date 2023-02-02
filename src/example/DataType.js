import React from "react";

function DataType() {
    let color = "yellow"; String
    let x = 16 + "volvo"; => 16volvo
    let x = "volvo" + 16; => volvo16
    // when adding a number and string, javascript will treat the number as  a string.

    // Another example
    let Y = 16 + 4 + "volvo"; => 20volvo;
    let Y = "volvo" + 16 + 4; => volvo164;

    // javascript types
    let x; undefined;
    let x = 10; Number;
    let x = "ram"; String;
    const cars = ["Bmw", "Volvo", "Nissan"]; javascript  Array
    const person = { firstName: "ram", age: 21, lastName: "kumar" }; javascript Object

    // type of operator
    // it is used for find the type :
    let car; => this value return undefined.
     car = undefined; => value is undefined ,type is undefined.

    return <div>
        <h1>DataTypes</h1>
  </div>;
}
export default DataType;


