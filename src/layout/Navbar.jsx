import React from 'react'
import logo from "../logo-gamehub.png";
import { Link } from 'react-router-dom';



function Navbar({currentUser}) {




  return (
   
      <div className="navbar w-screen bg-background text-text flex gap-8 cont">
  <div className="navbar-start flex flex-col ">
    
  <div className='flex flex-col items-center'>
  <Link to={"/"}>
  <img className='w-12' src={logo} alt="logo" /> 
  </Link> 
   <Link to={"/"}>
   <p className="text-secondary text-2xl">GameHub</p>
   </Link> 
  </div>
  </div>
  <div className="navbar-center">
  <Link to={"/community"}>
    <p className="btn btn-ghost text-xl">Community</p>
  </Link>
  </div>
  <div className="navbar-end">
  <Link to={"/register"}>

    {currentUser? <div><img className='w-16 rounded-full' src={currentUser && currentUser.profileImg} alt="" /></div> :   <p className="btn bg-primary text-text border-none text-lg margin">Login</p>}
   
  </Link>
  </div>
  
</div>
   
  )
}

export default Navbar