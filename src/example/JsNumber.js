import React from "react";

function JsNumber() {
  let x = 10;
  let y = 20;
  let z = x + y;
  let str1 = "10";
  let str2 = "20";
  let str = str1 + str2;
  let num = 10;
  let string = "20";
  let res = num + string;
  let x1 = 10;
  let x2 = 20;
  let x3 = "the result is" + x1 + x2;
  let a = 10;
  let b = 20;
  let c = "30";
  let result = a + b + c;
  let st1 = "100";
  let st2 = "10";
  let divide = st1 / st2;
  let multiply = st1 * st2;
  let sub = st1 - st2;
  let add = st1 + st2;
  let value = 100 / "Apple";
  let val = 100 / "10";
  let nanValue = isNaN(value);
  let n1 = NaN;
  let n2 = 5;
  let n3 = "5";
  let n = n1 + n2;
  let nanWithString = n1 + n3;
  let test = typeof NaN;
  let test1 = typeof Infinity;
  let myNumber = 2;
  let res1 = "";
  while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    res1 = res1 + myNumber;
  }

  return (
    <div>
      <h3>Adding Numbers and Strings</h3>
      <p>{z}</p>
      <h4>
        If you add two strings, the result will be a string concatenation:
      </h4>
      <p>{str}</p>
      <h4>
        If you add a number and a string, the result will be a string
        concatenation:
      </h4>
      <p>{res}</p>
      <h4>
        first string will appear after the number are also consider as a string
      </h4>
      <p>{x3}</p>
      <p>example of number and string</p>
      <p>{result}</p>
      <h4>Numeric String</h4>
      <h5>Result of numeric string</h5>
      <p>{divide}</p>
      <p>{multiply}</p>
      <p>{sub}</p>
      <p>{add} this is concate the string</p>
      <h3>NAN</h3>
      <p>{value}(number divided by string (100/"Apple")is equal to NAN)</p>
      <p>{val}(number divided by string is (100/"10") is equal to 10)</p>
      <p>{nanValue}</p>
      <p>{n}</p>
      <p>{nanWithString}</p>
      <h4>NaN is a number: typeof NaN returns number:</h4>
      <p>{test}</p>
      <p>Infinity</p>
      <p>{res1}</p>
      <p>Infinity is a number: typeof Infinity returns number.</p>
      <p>{test1}</p>
      <h4>Comparing two JavaScript objects always returns false.</h4>
      <h3>New Number Methods</h3>
      <p>
        ES6 also added 2 new methods to the Number object: Number.isInteger()
        Number.isSafeInteger()
      </p>
    </div>
  );
}
export default JsNumber;
