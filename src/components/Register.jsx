import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

function Register() {
  return (
    <div className='h-screen'>
      <Navbar />
      <div>
      <div className="flex flex-col bg-background w-full h-[571px] border-opacity-50">
        <div className="grid h-1/2 card bg-primary rounded-box place-items-center">
          <form className='flex flex-col gap-6 form'>
            <input required placeholder='Your nickname' type="text" name="nickname" />
            <input required placeholder='Your email' type="email" name="email" />
            <input required placeholder='Your password' type="password" name="password" />

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