import React from 'react'
import logo from "../logo-gamehub.png";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
   
      <div className="navbar bg-background text-text flex gap-10">
  <div className="navbar-start flex flex-col">
  <Link to={"/"}>
  <img className='w-12' src={logo} alt="logo" /> 
  </Link> 
   <Link to={"/"}>
   <a className="text-secondary text-2xl">GameHub</a>
   </Link> 
  </div>
  <div className="navbar-center">
  <Link to={"/community"}>
    <a className="btn btn-ghost text-xl">Community</a>
  </Link>
  </div>
  <div className="navbar-end">
  <Link to={"/register"}>
    <a className="btn bg-primary text-text border-none text-lg">Login</a>
  </Link>
  </div>
</div>
   
  )
}

export default Navbar