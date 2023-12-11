import React, { useEffect, useState } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Backendless from 'backendless'



function GamePosts({selectedGame}) {
      const [tutorials, settutorials] = useState([])

     

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

        <main className='h-screen bg-background text-text text-center flex flex-col items-center'>
            {selectedGame && <div className='flex flex-col'>
                <h1 className='text-2xl'>{selectedGame.title}</h1>
                <img src={selectedGame.thumbnail} alt="" />
                <p>{selectedGame.short_description}</p>
                <div className='flex justify-center'>
                <div className="badge badge-primary">{selectedGame.genre}</div>
        <div className="badge badge-primary">{selectedGame.platform}</div>
                </div>
      
             </div>}

        <h3 className='text-2xl'>Posts</h3>
            {tutorials.length > 0 && tutorials.map(i => <div className='post_container flex flex-col text-center p-3'>
                <p className='text-xl'>{i.title}</p>
                <p className='content'>{i.content}</p>
            </div>
                )}
        </main>

        <Footer />
    </div>
  )
}

export default GamePosts