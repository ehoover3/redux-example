import NavBar from "./components/NavBar";
import SeaTurtle from "./components/SeaTurtle";
import Panda from "./components/Panda";
import Kangaroo from "./components/Kangaroo";
import LandTurtle from "./components/LandTurtle";
import "./App.css";

export default function App() {
  return (
    <div>
      <NavBar />
      <SeaTurtle />
      <LandTurtle />
      <Kangaroo />
      <Panda />
    </div>
  );
}
