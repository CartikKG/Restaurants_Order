import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../Actions/actions";
import "./Navbar.css";
const Navbar = () => {
  const [flag, setflag] = React.useState(false);
  useEffect(() => {
    console.log("object");
    if (localStorage.getItem("token")) {
      setflag(true);
    } else {
      setflag(false);
    }
  }, [localStorage.getItem("token")]);

  return (
    <div id="navbar">
      {flag ? (
        <button id="logout" onClick={logout}>
          {" "}
          Logout
        </button>
      ) : (
        <>
          <Link to="/">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
      <Link to="/addorder">New Order</Link>
      <Link to="/allorder">All Order</Link>
    </div>
  );
};

export default Navbar;
