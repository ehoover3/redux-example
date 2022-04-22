import React from "react";
import { useSelector } from "react-redux";

export default function NavBar() {
  const count = useSelector((state) => state.counter.value); // get initial value from store

  const style = {
    outline: "3px solid rgb(51,51,51)",
    backgroundColor: "rgb(102,153,0)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "100vw",
  };

  return (
    <div>
      <h1 style={style}>Number of Zoo Animals: {count}</h1>
      <div></div>
    </div>
  );
}
