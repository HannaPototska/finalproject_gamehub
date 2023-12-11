import React, { useEffect, useState } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Backendless from 'backendless'



function GamePosts({selectedGame, tutorials, settutorials}) {

    const [user, setuser] = useState()

    useEffect(() => {
        Backendless.Data.of( "Users" ).findById( "17C07E08-1F31-AA19-FF3E-C48E1FCC7500" )
    .then( res =>  {
        console.log(res)
        setuser(res)
     })
    .catch( err => {
        console.log(err);
     });
    },[])

  useEffect(() => {
    Backendless.Data.of( "tutorials" ).find()
 .then( res =>{
  settutorials(res)
  })
 .catch( err => {
  console.log(err);
  });
  }, [])


  return (
    <div>
        <Navbar />

        <main className='h-screen bg-background text-text text-center flex flex-col items-center gap-3'>
            {selectedGame && <div className='flex flex-col'>
                <h1 className='text-2xl'>{selectedGame.title}</h1>
                <img src={selectedGame.thumbnail} alt="" />
                <p>{selectedGame.short_description}</p>
                <div className='flex justify-center'>
                <div className="badge badge-primary">{selectedGame.genre}</div>
        <div className="badge badge-primary">{selectedGame.platform}</div>
                </div>
      
             </div>}

        <h3 className='text-2xl'>Tutorials</h3>
            {tutorials.length > 0 && tutorials.map((i,j) => <div key={j} className='post_container flex flex-col text-center p-3'>
               <div className='flex'>
              <div className='flex flex-col'>
              <img className='w-11 h-11 rounded-full' src={user.profileImg} alt="userimage" />
                <p className='text-center'>{user.nickname}</p>
              </div>
                <p className='text-xl justify-self-center text-center mx-auto'>{i.title}</p>
               </div>


                <p className='content m-3'>{i.content}</p>
           
                <button className='btn w-20 bg-accent text-[16px] text-text border-none cursor-pointer self-end'>View Tutorial</button>
            </div>
                )}
        </main>

        <Footer />
    </div>
  )
}

export default GamePosts