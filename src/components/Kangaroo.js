import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add, subtract } from "../store/animalStore";

export default function Kangaroos() {
  // STORE
  const dispatch = useDispatch(); // send info (a.k.a. "state") to the store

  // USESTATE
  const [kangaroos, setKangaroos] = useState(0);

  // HELPER FUNCTIONS
  const addKangaroo = () => {
    setKangaroos(kangaroos + 1);
    dispatch(add());
  };

  const subtractKangaroo = () => {
    setKangaroos(kangaroos - 1);
    dispatch(subtract());
  };

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
      <h2>Kangaroos ({kangaroos} kangaroos)</h2>
      <div>This is a dispatch & useState example (same code as land turtle)</div>

      {/* BUTTONS */}
      <button onClick={addKangaroo}>Add</button>
      <button onClick={subtractKangaroo}>Subtract</button>
    </div>
  );
}
