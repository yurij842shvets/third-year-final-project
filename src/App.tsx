import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import MainPage from "./components/Main/MainPage";
import StatisticsPage from "./components/Statistics/StatisticsPage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
