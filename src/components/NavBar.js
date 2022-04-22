import React from "react";
import { useSelector } from "react-redux";

export default function NavBar() {
  const count = useSelector((state) => state.counter.value); // get initial value from store

  const style = {
    outline: "3px solid black",
    backgroundColor: "orange",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
  };

  return <h1 style={style}>Number of Zoo Animals: {count}</h1>;
}
