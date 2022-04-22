import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, subtract, addByAmount } from "../store/animalStore";

export default function Snakes() {
  // STORE
  const count = useSelector((state) => state.counter.value); // get initial value from store
  const dispatch = useDispatch(); // send info (a.k.a. "state") to the store

  // USESTATE
  const [input, setInput] = useState(0);

  // UPDATE STORE FUNCTION
  const byAmount = (e) => {
    e.preventDefault();
    dispatch(addByAmount(Number(input)));
  };

  return (
    <div style={{ backgroundColor: "lightblue" }}>
      {/* THE NUMBER */}
      <h2>Pandas</h2>
      <div>This is a dispatch with a payload example</div>

      <div style={{ display: "flex" }}>
        {/* BUTTONS */}
        <button onClick={() => dispatch(add())}>Add</button>
        <button onClick={() => dispatch(subtract())}>Subtract</button>

        {/* FORM */}
        <form onSubmit={(e) => byAmount(e)} style={{ marginLeft: "50px" }}>
          <input type='number' onChange={(e) => setInput(e.target.value)} />
          <button type='submit'>Add This Number</button>
        </form>
      </div>
    </div>
  );
}
