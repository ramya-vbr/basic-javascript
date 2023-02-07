import React from "react";

function JsNumberMethod() {
  let number = 5521;
  let x = 9.21;

  return (
    <div>
      <h2>toString() Method</h2>
      <p>The toString() method returns a number as a string.</p>
      <p>{number.toString()}</p>
      <p>
        toExponential() returns a string, with a number rounded and written
        using exponential notation.
      </p>
      <p>{x.toExponential()}</p>
      <p>{x.toExponential(2)}</p>
      <p>{x.toExponential(4)}</p>
      <p>{x.toExponential(6)}</p>
      <h3>
        The parameter is optional. If you don't specify it, JavaScript will not
        round the number.
      </h3>
      <h2>toFixed() Method</h2>
      <p>
        toFixed() returns a string, with the number written with a specified
        number of decimals:
      </p>
      <p>{x.toFixed()}</p>
      <h2>toPrecision() Method</h2>
      <p>
        toPrecision() returns a string, with a number written with a specified
        length:
      </p>
      <p>{x.toPrecision()}</p>
      <h2>valueOf() Method</h2>
      <p>The valueOf() method returns a number as a number:</p>
      <p>{x.valueOf()}</p>
      <h2>Converting Variables to Numbers</h2>
      <p>the number() method</p>
      <p>
        {Number(true)} {Number(false)}
      </p>
      <p>If the number cannot be converted, NaN (Not a Number) is returned.</p>
      <p>Number() can also convert a date to a number.</p>
      <p>{Number(new Date("2023-02-05"))}</p>
      <h2>parseInt()</h2>
      <p>
        The global JavaScript function parseInt() converts strings to numbers:
      </p>
      <p>The parseFloat() method converts strings to numbers:</p>
      <h2>Number object Method</h2>
      <p>The Number.isInteger() Method :</p>
      <p>
        {Number.isSafeInteger(10)}
        {Number.isInteger(10.5)}
      </p>
      <p>
        The Number methods Number.parseInt() and Number.parseFloat() are the
        same as the Global methods parseInt() and parseFloat().
      </p>
    </div>
  );
}
export default JsNumberMethod;
