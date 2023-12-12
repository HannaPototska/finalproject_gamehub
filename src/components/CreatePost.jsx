import React from 'react'
import NavLogged from '../layout/NavLogged'
import Footer from '../layout/Footer'

function CreatePost({currentUser, setcurrentUser,games}) {
  return (
    <div className='h-screen'>
      <NavLogged currentUser={currentUser} setcurrentUser={setcurrentUser} />

      <main className='h-5/6 bg-background flex flex-col items-center'>

          <h1 className='text-text text-4xl'>Create New Post</h1>

          <form>
            <input type="text" placeholder='Title:' name="title" />
           <select name="game-names" id="game-names">
            <option value="" disabled>Choose games</option>
            {games && games.map(i =>  <option value={i.title}>{i.title}</option>)}
           </select>
            <textarea name="content" placeholder='Text:' id="" cols="30" rows="10"></textarea>
          <button type='submit' className='btn border-none text-text bg-accent'>Post</button>
           
          </form>


      </main>

      <Footer />
    </div>
  )
}

export default CreatePost