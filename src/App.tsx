import { useState } from "react";
import Home from "../pages/Home";
import Team from "../pages/Team";
import Biwulianbing from "../pages/Biwulianbing";
import Group from "../pages/Group";
import News from "../pages/News";
import KuaiXunOne from "../components/KuaiXun/One";
import KuaiXunTwo from "../components/KuaiXun/Two";
import YaoWenOne from "../components/YaoWen/One";
import YaoWenTwo from "../components/YaoWen/Two";
import PasswordPage from "../pages/PasswordPage";
import Yaowen from "../pages/Yaowen";
import Kuaixun from "../pages/Kuaixun";
import AuthRoute from "../components/common/AuthRoute";
import Dashboard from "../pages/Dashboard";

import { Routes, Route } from "react-router-dom";
import { Toaster } from "../src/components/ui/sonner";

// import SectionContext
import { SectionContext } from "./context/SectionContext";
import type { Section } from "./context/SectionContext";

import { BiwulianbingEditIDContext } from "./context/BiwulianbingEditIDContext";
import type { BiwulianbingEditID } from "./context/BiwulianbingEditIDContext";

import { RouxingtuanduiEditIDContext } from "./context/RouxingtuanduiEditIDContext";
import type { RouxingtuanduiEditID } from "./context/RouxingtuanduiEditIDContext";

function App() {
  const [section, setSection] = useState<Section>(null);
  const [biwulianbingEditID, setBiwulianbingEditID] =
    useState<BiwulianbingEditID>("");
  const [rouxingtuanduiEditID, setRouxingtuanduiEditID] =
    useState<RouxingtuanduiEditID>("");

  return (
    <SectionContext.Provider value={[section, setSection]}>
      <BiwulianbingEditIDContext.Provider
        value={[biwulianbingEditID, setBiwulianbingEditID]}
      >
        <RouxingtuanduiEditIDContext.Provider
          value={[rouxingtuanduiEditID, setRouxingtuanduiEditID]}
        >
          <Toaster />
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
            <Route path="/yaowen/:id" element={<Yaowen />} />
            <Route path="/kuaixun/:id" element={<Kuaixun />} />
            <Route path="/auth" element={<PasswordPage />} />
            <Route
              path="/dashboard"
              element={
                <AuthRoute>
                  <Dashboard />
                </AuthRoute>
              }
            />
          </Routes>
        </RouxingtuanduiEditIDContext.Provider>
      </BiwulianbingEditIDContext.Provider>
    </SectionContext.Provider>
  );
}

export default App;
