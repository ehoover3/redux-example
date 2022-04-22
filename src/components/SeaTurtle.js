import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, subtract } from "../store/animalStore";

export default function SeaTurtle() {
  // STORE
  const count = useSelector((state) => state.counter.value); // get initial value from store
  const dispatch = useDispatch(); // send info (a.k.a. "state") to the store

  return (
    <div style={{ backgroundColor: "lightgreen" }}>
      {/* THE NUMBER */}
      <h2>Sea Turtles</h2>
      <div>This is a dispatch example</div>

      {/* BUTTONS */}
      <button onClick={() => dispatch(add())}>Add</button>
      <button onClick={() => dispatch(subtract())}>Subtract</button>
    </div>
  );
}
