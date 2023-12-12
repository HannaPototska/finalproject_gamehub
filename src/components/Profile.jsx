import React, { useEffect, useState } from 'react'
import NavLogged from '../layout/NavLogged'
import Footer from '../layout/Footer'
import Backendless from 'backendless'


function Profile() {
  const [currentUser, setcurrentUser] = useState()

  useEffect(() => {
      Backendless.UserService.getCurrentUser()
      .then(currentUser => {
        console.log(currentUser);
        setcurrentUser(currentUser)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])



  return (
    <div>
      <NavLogged currentUser={currentUser} setcurrentUser={setcurrentUser} />
      
     <main className='h-screen bg-background text-text'>{currentUser &&
      <div className='flex flex-col items-center gap-1'>
      <img className='w-56 rounded-full border border-secondary' src={currentUser.profileImg} alt="profile image" />
      <h1 className='text-4xl nick'>{currentUser.nickname}</h1>
      </div>}
      
      </main>
      
      <Footer />
      </div>
  )
}

export default Profile