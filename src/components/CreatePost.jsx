import React from 'react'
import Footer from '../layout/Footer'
import Backendless from 'backendless'
import { useNavigate } from 'react-router-dom'
import Navbar from '../layout/Navbar'


function CreatePost({currentUser, setcurrentUser,games}) {

  const navigate = useNavigate()

  function postTutorial(e) {
    e.preventDefault()

    const tutorial = {
      title: e.target.title.value,
      content: e.target.content.value,
      game: e.target.gamenames.value,
      picture:e.target.imgURL.value
  }
  
  Backendless.Data.of( "tutorials" ).save( tutorial )
    .then( res => {
      navigate("/profile")
      })
    .catch(err => {
      alert("Something went wrong"+err.message)
      });
  }

 


  return (
    <div className='h-screen '>
      <Navbar currentUser={currentUser} setcurrentUser={setcurrentUser} />

      <main className='h-5/6 bg-background flex flex-col items-center'>

          <h1 className='text-text text-4xl m-3'>Create New Post</h1>

          <form className='flex flex-col items-center gap-6 createpost_form_container' onSubmit={postTutorial}>
            <input type="text" required placeholder='Title:' name="title" />
            <input type="url" required name="imgURL" placeholder='Image URL' id="" />
            
            <p className='text-text'>Choose Game:</p>
           <select className='overflow-auto h-12 ' name="gamenames" id="gamenames">
            <option value="" disabled>Games:</option>
            {games && games.map((i,j) =>  <option key={j} value={i.title}>{i.title}</option>)}
           </select>
            <textarea className='p-3' required name="content" placeholder='Text:' id="" cols="40" rows="10"></textarea>
           <button type='submit' className='btn border-none text-text bg-accent w-52 text-xl'>Post</button>
           
          </form>


      </main>

      <Footer />
      
    </div>
  )
}

export default CreatePost