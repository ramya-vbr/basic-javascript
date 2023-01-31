import React, { useEffect, useState } from "react";

function Basic() {
  const [todayDate, setTodayDate] = useState(new Date());
  const current = Date().toLocaleString();
  const today = new Date();
  useEffect(() => {
    setInterval(() => setTodayDate(new Date()), 1000);
  }, []);
  // const handleClick = () => {
  //   setTodayDate(todayDate);
  // };
  return (
    <div>
      <h1>Basic Javascript Date and Time </h1>
      <p>{current}</p>
      <p>{today.getDate()}</p>
      <p>{today.getMonth()}</p>
      <p>{today.getFullYear()}</p>
      <p>
        {today.getHours()}:{today.getMinutes()}: {today.getSeconds()}
      </p>
      <h2>check live time:</h2>
      <p>
        {todayDate.toLocaleString("en-us", {
          hours: "numeric",
          minutes: "numeric",
          hour12: true,
        })}
      </p>
      {/* <p>{todayDate}</p> */}
      {/* <button onClick={() => handleClick}>click me !</button> */}
    </div>
  );
}
export default Basic;
