import React, { useEffect, useState } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Backendless from 'backendless'



function GamePosts({posts}) {
    //   const [tutorials, settutorials] = useState([])

    //  ! backend problem here

//   useEffect(() => {
//     Backendless.Data.of( "tutorials" ).find()
//  .then( res =>{
//   console.log(res);
//   settutorials(res)
//   })
//  .catch( err => {
//   console.log(err);
//   });
//   }, [])


  return (
    <div>
        <Navbar />

        <main className='h-screen bg-background'>
            {posts && posts.map((i,j) => <div key={j}>
                <h1>{i.title}</h1>
                <img src={i.thumbnail} alt="game picture" />
            </div>)}


            {/* {tutorials && tutorials.map(i => <p>{i.title}</p>)} */}
        </main>

        <Footer />
    </div>
  )
}

export default GamePosts