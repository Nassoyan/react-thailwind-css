import "./App.css";
import Login from "./pages/auth/Login";
import Home from "./pages/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
