import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Actions/actions";
import { AuthContext } from "../../Context/context";
import "./Navbar.css";
const Navbar = () => {
  const { isAuth ,setAuth} = useContext(AuthContext);
  const navigate=useNavigate();
  return (
    <div id="navbar">
      {isAuth ? (
        <button id="logout" onClick={async()=>{localStorage.clear();await setAuth(false);await navigate('/')}}>
          {" "}
          Logout
        </button>
      ) : (
        <>
          <Link to="/">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
      {isAuth && (
        <>
          {" "}
          <Link to="/addorder">New Order</Link>
          <Link to="/allorder">All Order</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
