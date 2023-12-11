import Backendless from 'backendless'
import React, { useEffect, useState } from 'react'
import logo from "../logo-gamehub.png";
import { Link } from 'react-router-dom'



function NavLogged() {
    const [currentUser, setcurrentUser] = useState()
    useEffect(() => {
        Backendless.UserService.getCurrentUser()
        .then(currentUser => {
          console.log(currentUser)
          setcurrentUser(currentUser)
        })
        .catch(error => {
          console.error(error)
        })
    }, [])
    
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
    <Link to={"/profile"}>
      <div><img className='rounded-full' src={currentUser && currentUser.profileImg} alt="" /></div>
    </Link>
    </div>
  </div>
  )
}

export default NavLogged