import React from "react";

function StringSearch() {
  let string = "save the tree and save the world";
  let result = string.indexOf("tree");
  let resultWithPara = string.indexOf("tree", 10);
  let lastResult = string.lastIndexOf("save");
  let text = string.lastIndexOf("john");
  let searchString = string.search("the");
  let egtext = "The rain in SPAIN stays mainly in the plain";
  let matchtext = egtext.match("ain");
  let globalMatch = egtext.match(/ain/g); // global search
  let global = egtext.match(/ain/gi); // global search without case sensitive
  //   let checkIncludes = egtext.includes("stays");
  //   let check = egtext.includes("stays", 5);
  return (
    <div>
      <h5>String indexOf()</h5>
      <p>{result}</p>
      <h5>
        second parameter as starting position of search for both index of and
        lastindexOf
      </h5>
      <p>{resultWithPara}</p>
      <h5>String lastIndexOf() </h5>
      <p>{lastResult}</p>
      <p>
        Both indexOf(), and lastIndexOf() return -1 if the text is not found:
      </p>
      <p>{text}</p>
      <h5>String search()</h5>
      <p>
        The search() method searches a string for a string (or a regular
        expression) and returns the position of the match:
      </p>
      <p>{searchString}</p>
      <h4>
        Note:The two methods are NOT equal. These are the differences: The
        search() method cannot take a second start position argument. The
        indexOf() method cannot take powerful search values (regular
        expressions).
      </h4>
      <h5>String match()</h5>
      <p>{matchtext}</p>
      <p>{global}</p>
      <p>{globalMatch}</p>
      <h5>String matchAll()</h5>
      <h5> String includes()</h5>
      <p>
        The includes() method returns true if a string contains a specified
        value. Otherwise it returns false.
      </p>
      {/* <p>{string.includes("stays")}</p> */}
      {/* <p>{egtext.includes("stays", 5)}</p> */}
      <h5>String startsWith()</h5>
      <h5> String endsWith()</h5>
    </div>
  );
}
export default StringSearch;
