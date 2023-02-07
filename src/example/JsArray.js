import React from "react";

function JsArray() {
  const cars = ["BMW", "MAZDA", "COROLLA"];
  cars[0] = "pathFinder";
  let length = cars.length;
  let lastArray = cars[cars.length - 1];
  const fruit = ["mango", "pappaya", "jackfruit", "pineapple", "cherry"];
  let text = "";
  for (let i = 0; i < fruit.length; i++) {
    text = <li>{fruit[i]}</li>;
    console.log(fruit[i]);
  }
  const veg = ["carrot", "radish", "potato", "brinjal"];
  let vegValue = veg.forEach((value) => <li>{value}</li>);

  const watchBrand = ["fossil", "apple", "fastrack", "titan"];
  watchBrand.push("annekelin"); // push() method
  watchBrand[watchBrand.length] = "tissot"; // length property
  return (
    <div>
      <h1>Array</h1>
      <p>{cars[0]}</p>
      <p>{cars[1]}</p>
      <p>{cars[2]}</p>
      <p>you can change Array element also for eg: cars[0] = "pathFinder"</p>
      <h2>The length Property</h2>
      <p>{length}</p>
      <p>Accessing the Last Array Element</p>
      <p>{lastArray}</p>
      <h2>Looping Array</h2>
      <p>{text}</p>
      <p>{vegValue}</p>
      <h2>Adding Array Elements</h2>
      <p>two methods to add array: push() method , length property</p>
      <h1>Difference Between Arrays and Objects</h1>
      <p>
        In JavaScript: arrays use numbered indexes. objects use named indexes.
      </p>
      <h2>Recognize an Array</h2>
      <p>
        const fruits = ["Banana", "Orange", "Apple"]; let type = typeof fruits;
        The typeof operator returns object because a JavaScript array is an
        object.
        <p>sol 1: Array.isArray(fruits);</p>
        <p>sol 2: fruits instanceof Array;</p>
      </p>
    </div>
  );
}
export default JsArray;
