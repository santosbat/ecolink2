import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Home from "./pages/Home/Index";

function App() {

  return (
    <BrowserRouter>
          <Routes>
              <Route path="/Cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
