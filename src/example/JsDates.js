import React from "react";

function JsDates() {
  const d = new Date().toUTCString();
  const date = new Date("October 13, 2014 11:13:00").toLocaleString();
  const dd = new Date("2022-03-25").toISOString();
  const dates = new Date(2018, 15, 24, 10, 33, 30, 0).toLocaleString();
  return (
    <div>
      <h1>Javascript Date Object</h1>
      <p>{d}</p>
      <h3>new Date(date string) creates a date object from a date string:</h3>
      <p>{date}</p>
      <h3>Date only shows</h3>
      <p>{dd}</p>
      <h2>Important Note:JavaScript counts months from 0 to 11</h2>
      <p>
        Specifying a month higher than 11, will not result in an error but add
        the overflow to the next year:
      </p>
      <h5>for eg:const dates = new Date(2018, 15, 24, 10, 33, 30, 0);</h5>
      <p> the result :{dates}</p>
      <h2>Displaying dates</h2>
      <p>{d.toString()}</p>
    </div>
  );
}
export default JsDates;
