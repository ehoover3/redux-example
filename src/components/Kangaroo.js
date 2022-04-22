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
    <div style={{ backgroundColor: "lightgreen" }}>
      {/* THE NUMBER */}
      <h2>Kangaroos ({kangaroos} kangaroos)</h2>
      <div>This is a dispatch & useState example (same code as land turtle)</div>

      {/* BUTTONS */}
      <button onClick={addKangaroo}>Add</button>
      <button onClick={subtractKangaroo}>Subtract</button>
    </div>
  );
}
