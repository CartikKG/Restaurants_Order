import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/addorder">New Order</Link>
      <Link to="/allorder">All Order</Link>
    </div>
  )
}

export default Navbar
