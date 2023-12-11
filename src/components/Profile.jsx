import React from 'react'
import NavLogged from '../layout/NavLogged'
import Footer from '../layout/Footer'

function Profile() {
  return (
    <div>
      <NavLogged />
      
     <main className='h-screen bg-background text-text'>Profile</main>
      
      <Footer />
      </div>
  )
}

export default Profile