import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, subtract } from "../store/animalStore";

export default function SeaTurtle() {
  // STORE
  const count = useSelector((state) => state.counter.value); // get initial value from store
  const dispatch = useDispatch(); // send info (a.k.a. "state") to the store

  return (
    <div
      style={{
        backgroundColor: "rgb(248,205,35)",
        outline: "3px solid rgb(51,51,51)",
        padding: "5px",
        margin: "25px",
        width: "90vw",
      }}
    >
      {/* THE NUMBER */}
      <h2>Sea Turtles</h2>
      <div>This is a dispatch example</div>

      {/* BUTTONS */}
      <button onClick={() => dispatch(add())}>Add</button>
      <button onClick={() => dispatch(subtract())}>Subtract</button>
    </div>
  );
}
