import React, { useEffect, useState } from 'react'
import NavLogged from '../layout/NavLogged'
import Footer from '../layout/Footer'
import Backendless from 'backendless'


function Profile({tutorials}) {
  const [currentUser, setcurrentUser] = useState()

  useEffect(() => {
      Backendless.UserService.getCurrentUser()
      .then(currentUser => {
        // console.log(currentUser);
        setcurrentUser(currentUser)
        var onwerid 
        var whereClause = `ownerId = ` +  currentUser.objectId ;
        console.log(whereClause);
        var queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause( "ownerId = '17C07E08-1F31-AA19-FF3E-C48E1FCC7500'");
        // Backendless.Data.of("tutorials").find({ownerId: currentUser.objectId})
        
        Backendless.Data.of( "tutorials" ).find( {ownerId: currentUser.objectId} )
         .then( (res)=>{
        console.log(res);
         })
         .catch( (err)=> console.log(err.code));
           
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    // console.log(currentUser.objectId);
//     var whereClause = `ownerId = ${currentUser.objectId }`;
// var queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause( whereClause );

// Backendless.Data.of( "tutorials" ).find( queryBuilder )
//  .then( (res)=>{
// console.log(res);
//  })
//  .catch( (err)=> console.log(err.code));
//     Backendless.Data.of( "tutorials" ).findById( currentUser && currentUser.objectId == tutorials.find(i => i.ownerId))
//  .then( res => {
//     console.log(res);
//   })
//  .catch(err => {
//   console.log(err);
//   });
  }, [])



  return (
    <div>
      <NavLogged currentUser={currentUser} setcurrentUser={setcurrentUser} />
      
     <main className='h-screen bg-background text-text'>{currentUser &&
      <div className='flex flex-col items-center gap-1'>
      <img className='w-56 rounded-full border border-secondary' src={currentUser.profileImg} alt="profile image" />
      <h1 className='text-4xl nick'>{currentUser.nickname}</h1>
      </div>}
      
      </main>
      
      <Footer />
      </div>
  )
}

export default Profile