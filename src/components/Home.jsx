import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import { Link } from 'react-router-dom'
function Home({currentUser}) {
  return (
    <div className='main'>
      <div className='nav'>

      <Navbar currentUser={currentUser} />
      </div>
      <div className='w-screen h-screen bg-background text-text pt-24 text-center home_container main flex flex-col justify-around gap-12 items-center'>
        <h2 className='font-bold text-xl motto'>Bring your gaming to the <span className='text-accent'>next</span> level</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi nulla et omnis voluptatibus eos vel, numquam libero iusto facere voluptate recusandae? Dolorem, maxime. Facere accusamus autem odit cum accusantium.</p>
        <Link to={"/community"}>
        <button className='btn w-80 h-16 text-text text-xl bg-secondary border-none'>LEVEL UP NOW</button>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum fugiat distinctio. Libero, similique corrupti! Suscipit asperiores praesentium veniam nulla possimus ratione, nesciunt omnis iure beatae officia in porro maiores?</p>
      </div>
      
      <Footer />
      </div>
  )
}

export default Home