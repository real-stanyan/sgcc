import Home from "../pages/Home";
import Team from "../pages/Team";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />}></Route>
      </Routes>
    </>
  );
}

export default App;
