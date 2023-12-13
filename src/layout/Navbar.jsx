import React, { useEffect, useState } from 'react'
import logo from "../logo-gamehub.png";
import { Link, useNavigate } from 'react-router-dom';



function Navbar({currentUser}) {
const navigate = useNavigate()



  return (
   
      <div className="navbar bg-background text-text flex gap-10">
  <div className="navbar-start flex flex-col">
  <Link to={"/"}>
  <img className='w-12' src={logo} alt="logo" /> 
  </Link> 
   <Link to={"/"}>
   <p className="text-secondary text-2xl">GameHub</p>
   </Link> 
  </div>
  <div className="navbar-center">
  <Link to={"/community"}>
    <p className="btn btn-ghost text-xl">Community</p>
  </Link>
  </div>
  <div className="navbar-end">
  <Link to={"/register"}>

    {currentUser? <div><img className='rounded-full' src={currentUser && currentUser.profileImg} alt="" /></div> :   <p className="btn bg-primary text-text border-none text-lg">Login</p>}
   
  </Link>
  </div>
</div>
   
  )
}

export default Navbar