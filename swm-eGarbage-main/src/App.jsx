import { Route, Routes, useNavigate } from "react-router-dom";
import { Register, Layout, Home, About, Login } from "./components";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { auth } from "./components/firebase";

import "./App.css";

export default function App() {
  const navigate = useNavigate();

  const fetchData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user === null) {
        navigate("/login");
      }
      if (user.email && user.email.length > 0) {
        navigate("/");
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
