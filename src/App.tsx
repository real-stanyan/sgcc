import Home from "../pages/Home";
import Team from "../pages/Team";
import Biwulianbing from "../pages/Biwulianbing";
import Group from "../pages/Group";
import News from "../pages/News";
import KuaiXunOne from "../components/KuaiXun/One";
import KuaiXunTwo from "../components/KuaiXun/Two";
import YaoWenOne from "../components/YaoWen/One";
import YaoWenTwo from "../components/YaoWen/Two";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biwulianbing" element={<Biwulianbing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/group" element={<Group />} />
        <Route path="/news" element={<News />}>
          {/* kuaixun */}
          <Route path="kuaixun1" element={<KuaiXunOne />} />
          <Route path="kuaixun2" element={<KuaiXunTwo />} />
          {/* yaowen */}
          <Route path="yaowen1" element={<YaoWenOne />} />
          <Route path="yaowen2" element={<YaoWenTwo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
