/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

function JsArrayMethod() {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const chocolate = ["eclairs", "caramel", "milkybar", "dairymilk", "kitkat"];
  chocolate.splice(2, 1, "galaxy", "ferror");
  let fruit = fruits.push("kiwi");
  let fru = fruits.unshift("Lemon");
  fruits[0] = "kiwi";
  const veg = ["carrot", "brinjal", "potato"];
  delete veg[0];
  // merging Array example:
  const myGirl = ["lilly", "eden", "pranavi"];
  const myBoy = ["rihaan", "john", "peter"];
  const arr3 = ["red", "blue", "green"];
  const myChildren = myGirl.concat(myBoy); // merging two array.
  const result = myGirl.concat(myBoy, arr3); // merging three array.
  const resultOne = myGirl.concat("sweety"); // merging array with values.
  const sliceArr = ["carpet", "curtain", "kettle", "dryer", "fridge"];
  const homeAppliance = sliceArr.slice(2);
  const homethings = sliceArr.slice(1, 3);
  return (
    <div>
      <h1>Converting Arrays to Strings</h1>
      <p>{fruits.toString()}</p>
      <p>{fruits.join("*")}</p>
      <p>{fruits.pop()}</p> // pop() method removes the last element from an
      array:
      <p>{fruit}</p>// The push() method adds a new element to an array (at the
      end): push() method returns the new array length:
      <h2>Shifting Elements</h2>
      <p>{fruits.shift()}</p> //shift() method removes the first array element
      <p>{fru}</p> // unshift() method returns the new array length:
      <h2>how to change the element of array</h2>
      <p>{fruits}</p> // Changing Elements: Array elements are accessed using
      their index number.
      <h2>JavaScript Array delete()</h2>
      <p>{veg}</p>
      <h2>Merging(concatenating) Array</h2>
      <p>merging two array: {myChildren}</p>
      <p>merging three array: {result}</p>
      <p>merging with value: {resultOne}</p>
      <h2>Splice and slice Array</h2>
      <h3>
        splice Array:splice() method can be used to add new items to an array:
      </h3>
      <p>{chocolate}</p>
      <p>
        chocolate.splice(2, 1, "galaxy", "ferror") :first parameter defines the
        position where the new element added, second parameter defines how many
        elements should be removed.
      </p>
      <h3>slice Array: </h3>
      <p>
        single arugument it gives the remaining array
        <p>
          for eg: const sliceArr = ["carpet", "curtain", "kettle", "dryer",
          "fridge"];{" "}
        </p>
        <p>const homeAppliance= sliceArr.slice(2);</p>
        <p>the first two elements is sliced</p>
        this array gives the result :{homeAppliance}
      </p>
      <h3>
        The method then selects elements from the start argument, and up to (but
        not including) the end argument.
      </h3>
      <p> const homethings = sliceArr.slice(1, 3);</p>
      <p>{homethings}</p>
      <h1>Note: all JavaScript objects have a toString() method</h1>
    </div>
  );
}
export default JsArrayMethod;
