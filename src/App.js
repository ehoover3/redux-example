import NavBar from "./components/NavBar";
import SeaTurtle from "./components/SeaTurtle";
import Panda from "./components/Panda";
import Kangaroo from "./components/Kangaroo";
import LandTurtle from "./components/LandTurtle";
import "./App.css";

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "rgb(217,217,218)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <NavBar />
      <SeaTurtle />
      <LandTurtle />
      <Kangaroo />
      <Panda />
    </div>
  );
}
