import Home from "../pages/Home";
import Team from "../pages/Team";
import Biwulianbing from "../pages/Biwulianbing";
import Group from "../pages/Group";
import News from "../pages/News";
import AddNewYaowen from "../pages/AddNewYaowen";
import AddNewKuaiXun from "../pages/AddNewKuaiXun";
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

function App() {
  return (
    <>
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
        <Route
          path="/addnewyaowen"
          element={
            <AuthRoute>
              <AddNewYaowen />
            </AuthRoute>
          }
        />
        <Route
          path="/addnewkuaixun"
          element={
            <AuthRoute>
              <AddNewKuaiXun />
            </AuthRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
