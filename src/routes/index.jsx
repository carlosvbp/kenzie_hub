import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ErrorPage } from "../pages/ErrorPage";
import { DashboardPage } from "../pages/DashboardPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { TechProvider } from "../providers/TechContext";


export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<TechProvider><DashboardPage/></TechProvider>} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};