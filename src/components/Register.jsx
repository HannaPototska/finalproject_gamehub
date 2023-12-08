import React, { useState } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Backendless from 'backendless'



function Register() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [nickname, setnickname] = useState("")

  Backendless.serverURL = "https://eu-api.backendless.com"
  Backendless.initApp(process.env.REACT_APP_APP_ID, process.env.REACT_APP_API_KEY );

  function register (e) {
    e.preventDefault()
    const user = new Backendless.User();
    user.email = email
    user.password = password
    user.nickname = nickname


Backendless.UserService.register( user ).then( res => {
  console.log("user registered");
} ).catch(err => console.log(err) );


  }

  return (
    <div className='h-screen'>
      <Navbar />
      <div>
      <div className="flex flex-col bg-background w-full h-[571px] border-opacity-50">
        <div className="grid h-1/2 card bg-primary rounded-box place-items-center">
          <form onSubmit={(e) =>{register(e)}} className='flex flex-col gap-6 form'>
            <input onChange={(e) => setnickname(e.target.value)} required placeholder='Your nickname' type="text" name="nickname" />
            <input onChange={(e) => setemail(e.target.value)} required placeholder='Your email' type="email" name="email" />
            <input onChange={(e) => setpassword(e.target.value)} required placeholder='Your password' type="password" name="password" />

            <button className='btn text-lg bg-secondary text-text border-none' type='submit'>Register</button>
          </form>
        </div>
        <div className="divider divider-primary text-text">OR</div>
        <div className="grid h-1/2 card bg-primary rounded-box place-items-center">
        <form className='flex flex-col gap-6 form'>
            <input required placeholder='Your email' type="email" name="email" />
            <input required placeholder='Your password' type="password" name="password" />

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