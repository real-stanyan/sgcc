import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
const PASSWORD = "123456";

export default function AuthRoute({ children }: { children: ReactNode }) {
  const ok = sessionStorage.getItem("auth_ok");
  return ok === PASSWORD ? children : <Navigate to="/auth" />;
}
