import React, { useEffect, useState } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import { useNavigate } from 'react-router-dom'



function Community({setselectedGame, games, selectedGame}) {
  
  const navigate = useNavigate()

function clickHandler(i) {
  setselectedGame(i)
  navigate("/posts")

}


  return (
    <div className='h-screen '>
      <Navbar />

      <main className='h-fit bg-background main_cont'>
      
      {games && games.map((i,j) => <div key={j} className='text-text flex flex-col items-center text-center gap-1'> 
        <div className='flex flex-col'>
        <h3 className='text-xl'>

        {i.title}
        </h3>

          <img onClick={() => clickHandler(i)} className='h-36 w-26 cursor-pointer self-center' src={i.thumbnail} alt="" />

        </div>

          <div className='flex'>

        <div className="badge badge-primary">{i.genre}</div>
        <div className="badge badge-primary">{i.platform}</div>
          </div>

      <div className="divider divider-secondary self-center w-32"></div>



      </div>)} 
      </main>

      <Footer />
    </div>
  )
}

export default Community