import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add, subtract } from "../store/animalStore";

export default function LandTurtle() {
  // STORE
  const dispatch = useDispatch(); // send info (a.k.a. "state") to the store

  // USESTATE
  const [turtles, setTurtles] = useState(0);

  // HELPER FUNCTIONS
  const addTurtle = () => {
    setTurtles(turtles + 1);
    dispatch(add());
  };

  const subtractTurtle = () => {
    setTurtles(turtles - 1);
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
      <h2>Land Turtles ({turtles} land turtles)</h2>
      <div>This is a dispatch & useState example</div>
      {/* BUTTONS */}
      <button onClick={addTurtle}>Add</button>
      <button onClick={subtractTurtle}>Subtract</button>
    </div>
  );
}
