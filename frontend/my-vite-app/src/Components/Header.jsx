import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    alert("Logout Success");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary px-3">
      <Link className="navbar-brand text-white" to="/">
        CodeWithPriyanshu
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/add-blog">
              Add Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/add-category">
              Add Category
            </Link>
          </li>
        </ul>

        <div className="d-inline my-2 my-lg-0">
          {token ? (
            <>
              <span className="text-white mx-2">Welcome, {username}</span>
              <button onClick={handleLogout} className="btn btn-outline-light mx-2">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-outline-light mx-2">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-outline-light">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
