import React, { useState } from "react";

function String() {
  const [replaceString, setReplaceString] = useState(
    "Please visit Microsoft and Microsoft!"
  );
  const [sample, setSample] = useState(
    "I love cats. Cats are very easy to love. Cats are very popular."
  );
  const [textChange, setTextChange] = useState("hello World!");
  const [trimText, setTrimText] = useState(
    " .....          hello  I'm  with space    .....  "
  );
  let text = "sjdhiwdhwlkdnlwkj";
  let x = "john";
  // this is string
  //   let y = new String("john");
  //  this is object
  // let x == y; x and y are equal.
  // let x === y; x and y are not equal.
  let fruits = "Apple, Banana, Kiwi";
  let part = fruits.slice(7, 12);
  let fruitPart = fruits.slice(7);
  let fruitvalue = fruits.slice(-10);
  let minusfruit = fruits.slice(-10, -3);
  let subfruit = fruits.substring(7, 13);
  let minifruit = fruits.substring(7);
  let negativefruitvalue = fruits.substr(-4);
  let word = "focus on  the work";
  let char = word.charAt(0);
  let charcode = word.charCodeAt(0);
  let string = "a,b,c,d,e,f";
  let stringText = "believe yourself";
  let myArr = string.split(",");
  let myArrText = stringText.split("");

  const handleString = () => {
    setReplaceString(replaceString.replace(/Microsoft/g, "W3Schools"));
  };

  const handleReplaceAll = () => {
    // setSample(sample.replaceAll("Cats", "Dogs"));
    setSample(sample.replaceAll("Cats", "Dogs"));
  };

  const handleUpperCase = () => {
    setTextChange(textChange.toUpperCase());
  };

  const handleTrim = () => {
    setTrimText(trimText.trim());
  };
  let result = "";
  for (let i = 0; i < myArrText.length; i++) {
    result += myArrText[i] + "\n";
  }

  return (
    <div>
      <h1>String Length</h1>
      <p>{text.length}</p>
      <h4>JavaScript String slice method</h4>
      <h5>
        slice extract the part of string and return new string. the end position
        not included
      </h5>
      <p>{part}</p>
      <h5>This slice method will give the rest of the string</h5>
      <p>{fruitPart}</p>
      <h5>This slice method counted from end of the string</h5>
      <p>{fruitvalue}</p>
      <h5>
        this method count from -1 from the end of string and also extract the
        part of string
      </h5>
      <p>{minusfruit}</p>
      <h4>JavaScript substring</h4>
      <p>
        second parameter specifies the length of the extracted part if you omit
        the second parameter will slice out the rest of the string.
      </p>
      <p>{subfruit}</p>
      <p>{minifruit}</p>
      <p>{negativefruitvalue}</p>
      <h4>Replace string</h4>
      <button onClick={handleString}>Try it</button>
      <p>{replaceString}</p>
      <h4>Replace All Method</h4>
      <button onClick={handleReplaceAll}>click me!</button>
      <p>{sample}</p>
      <h4>upperCase</h4>
      <button onClick={handleUpperCase}>try</button>
      <p>{textChange}</p>
      <h4>trim method</h4>
      <button onClick={handleTrim}>click</button>
      <p>{trimText}</p>
      <p>{trimText.length}</p>// see the count bcoz the length of string will be
      change.
      <h4>Extracting String Character</h4>
      <p>{char}</p>
      <p>{charcode}</p>
      <h4> converting string to Array</h4>
      <p>first you have split the string and convert into array</p>
      <p>{myArr}</p>
      <p>{myArr[0]}</p>
      <p>{myArrText}</p>
      <p>{result}</p>
    </div>
  );
}
export default String;
