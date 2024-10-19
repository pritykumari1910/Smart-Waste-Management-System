import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

import "./header.css";

const Menu = () => {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await auth.signOut();
      alert("User logged out successfully");
      navigate("/login");
    } catch (error) {
      console.log("Error login out", error.message);
    }
  }
  return (
    <>
      <div className="nav-items">
        <Link to="/home">Home</Link>
        <a href="#about">About</a>
      </div>
      <div className="nav-sign">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header>
      <div className="logo">Smart Garbage System</div>
      <nav>
        <Menu />
        <div className="nav-menu">
          {toggleMenu ? (
            <AiOutlineClose onClick={() => setToggleMenu(!toggleMenu)} />
          ) : (
            <FaBars onClick={() => setToggleMenu(!toggleMenu)} />
          )}
          {toggleMenu && (
            <div className="nav-menu-items scale-up-center">
              <Menu />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
