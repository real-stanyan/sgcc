import Home from "../pages/Home";
import Team from "../pages/Team";
import Biwulianbing from "../pages/Biwulianbing";
import Group from "../pages/Group";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biwulianbing" element={<Biwulianbing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/group" element={<Group />} />
      </Routes>
    </>
  );
}

export default App;
