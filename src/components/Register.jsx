import React, { useEffect, useState } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Backendless from 'backendless'
import { useNavigate } from 'react-router-dom'




function Register({currentUser}) {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [nickname, setnickname] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser && currentUser !== false ) {
      navigate("/profile")
    
    }
  }, [])

 

  function register (e) {
    e.preventDefault()
    const user = new Backendless.User();
    user.email = email
    user.password = password
    user.nickname = nickname


Backendless.UserService.register( user ).then( res => {
  navigate("/profile")

} ).catch(err => alert("Something went wrong"+err.message)
);


  }

  function login (e) {
    e.preventDefault()
    
    Backendless.UserService.login( email, password, true )
 .then( res => {
  navigate("/profile")
 } )
 .catch( err => alert(err)
 );

  }

  return (
    <div className='h-screen'>
      <Navbar />
      <div>
      <div className="flex flex-col bg-background w-full h-[768px] border-opacity-50">
        <div className="grid h-1/2 card bg-primary rounded-box place-items-center register_container">
          <form onSubmit={(e) =>{register(e)}} className='flex flex-col gap-6 form'>
            <input onChange={(e) => setnickname(e.target.value)} required placeholder='Your nickname' type="text" name="nickname" />
            <input onChange={(e) => setemail(e.target.value)} required placeholder='Your email' type="email" name="email" />
            <input onChange={(e) => setpassword(e.target.value)} required placeholder='Your password' type="password" name="password" />

            <button className='btn text-lg bg-secondary text-text border-none' type='submit'>Register</button>
          </form>
        </div>
        <div className="divider divider-primary text-text">OR</div>
        <div className="grid h-1/2 card bg-primary rounded-box place-items-center register_container">
        <form onSubmit={(e) =>{login(e)}} className='flex flex-col gap-6 form'>
            <input onChange={(e) => setemail(e.target.value)} required placeholder='Your email' type="email" name="email" />
            <input onChange={(e) => setpassword(e.target.value)} required placeholder='Your password' type="password" name="password" />

            <button className='btn text-lg bg-secondary text-text border-none' type='submit'>Login</button>
          </form>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register