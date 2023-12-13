import React, { useEffect, useState } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Backendless from 'backendless'


function SinglePost({selectedPost, currentUser}) {

    const [tutUser, settutUser] = useState()

    useEffect(() => {
        Backendless.Data.of( "Users" ).findById(selectedPost.ownerId)
 .then(res => {
    console.log(res);
    settutUser(res)
  })
 .catch( err => {
    console.log(err);
  });
    }, [])


  return (
    <div className='h-screen'>
        <Navbar currentUser={currentUser} />


        <main className='h-5/6 bg-background text-text overflow-auto'>
           
        {selectedPost && <div className='flex flex-col'>
            <p className='mx-3'>Author:</p>
           { tutUser && <div className='flex flex-col items-center justify-evenly'>
                <img className='w-24 rounded-full border-2 border-primary' src={tutUser.profileImg} alt="" />
                <p className='self-center text-2xl nick'>{ tutUser.nickname}</p>
            </div>}


            <div className='flex flex-col items-center px-3'>
            <h1 className='text-4xl shadow'>{selectedPost.title}</h1>
            <img className='w-32 rounded-md' src={selectedPost.picture} alt="" />
            <p >{selectedPost.content}</p>
            </div>

            </div>}
        </main>


        <Footer />
    </div>
  )
}

export default SinglePost