import React from 'react'
import NavLogged from '../layout/NavLogged'
import Footer from '../layout/Footer'
import Backendless from 'backendless'


function CreatePost({currentUser, setcurrentUser,games}) {
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
        console.log( "new tutorial has been saved" + res);
      })
    .catch(err => {
        console.log( "an error has occurred " + err.message );
      });
  }


  return (
    <div className='h-screen'>
      <NavLogged currentUser={currentUser} setcurrentUser={setcurrentUser} />

      <main className='h-5/6 bg-background flex flex-col items-center'>

          <h1 className='text-text text-4xl'>Create New Post</h1>

          <form onSubmit={postTutorial}>
            <input type="text" placeholder='Title:' name="title" />
            <input type="url" name="imgURL" placeholder='Image URL' id="" />
            
            <p className='text-text'>Choose Game:</p>
           <select className='overflow-auto' name="gamenames" id="gamenames">
            <option value="" disabled>Games:</option>
            {games && games.map((i,j) =>  <option key={j} value={i.title}>{i.title}</option>)}
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