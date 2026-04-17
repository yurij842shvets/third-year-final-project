import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../components/Main/MainPage";
import StatisticsPage from "../components/Statistics/StatisticsPage";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/main" element={<MainPage />} />
            <Route path="/statistics" element={<StatisticsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
