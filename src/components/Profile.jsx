import React, { useEffect, useState } from 'react'
import NavLogged from '../layout/NavLogged'
import Footer from '../layout/Footer'
import Backendless from 'backendless'
import { Link, useNavigate } from 'react-router-dom'


function Profile() {
  const [currentUser, setcurrentUser] = useState()
  const [userTut, setuserTut] = useState()
  const navigate = useNavigate()

  useEffect(() => {
      Backendless.UserService.getCurrentUser()
      .then(currentUser => {
        setcurrentUser(currentUser)
        var id = currentUser.objectId
        var where = "ownerId = '" + id + "'";
        var queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(where);
        
        
        Backendless.Data.of( "tutorials" ).find(queryBuilder )
         .then( (res)=>{
        setuserTut(res)
         })
         .catch( (err)=> console.log(err.code));
           
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  function logoutUser()
{
  Backendless.UserService.logout()
   .then( res => {console.log(res);
    navigate("/")
  } 
   )
   .catch( err => console.log(err) ) 
}




  return (
    <div>
      <NavLogged currentUser={currentUser} setcurrentUser={setcurrentUser} />
      
     <main className='h-screen bg-background text-text flex flex-col items-center gap-3 overflow-auto'>{currentUser &&
      <div className='flex flex-col items-center gap-1'>
      <img className='w-56 rounded-full border-2 border-secondary' src={currentUser.profileImg} alt="profile image" />
      <h1 className='text-4xl nick'>{currentUser.nickname}</h1>
      </div>}
      <div className="divider divider-primary self-center w-32"></div>


      <h2 className='text-4xl'>Your Posts:</h2>
      <Link to={"/createpost"}> <button className='btn border-none bg-accent text-text text-lg relative left-36'>New +</button> </Link>


      {userTut && userTut.map((i,j) => <div key={j} className=' w-96  border-2 rounded-lg border-primary p-3'>
        <div className='flex'>
        <img className='w-16 h-16 rounded-full object-cover' src={i.picture} alt="" />
        <h1>{i.title}</h1>
        </div>
        <p className='content'>{i.content}</p>
      </div>)}
      
      <button onClick={logoutUser} className='btn text-text text-lg bg-accent border-none'>Logout</button>
      </main>
      
      <Footer />
      </div>
  )
}

export default Profile