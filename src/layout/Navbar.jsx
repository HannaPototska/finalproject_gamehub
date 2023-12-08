import React from 'react'
import logo from "../logo-gamehub.png";


function Navbar() {
  return (
   
      <div className="navbar bg-background text-text flex gap-10">
  <div className="navbar-start flex flex-col">
  <a> <img className='w-12' src={logo} alt="logo" /> </a>
    <a className="text-secondary text-2xl">GameHub</a>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">Community</a>
  </div>
  <div className="navbar-end">
    <a className="btn bg-primary text-text border-none">Login</a>
  </div>
</div>
   
  )
}

export default Navbar