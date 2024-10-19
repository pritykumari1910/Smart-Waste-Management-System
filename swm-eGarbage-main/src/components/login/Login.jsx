import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("User Logged in successfully");
      navigate("/");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

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
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>{loading ? "Loading..." : "Sign in"}</button>
      </form>
      <div className="hyperlink">
        Don't have an Account- <Link to="/register">Register</Link>
      </div>
    </div>
  );
}
