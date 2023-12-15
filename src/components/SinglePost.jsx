import React, { useEffect, useState } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Backendless from 'backendless'
import { Link, useNavigate } from 'react-router-dom'


function SinglePost({selectedPost, currentUser}) {

    const [tutUser, settutUser] = useState()
    const [comments, setcomments] = useState()

    useEffect(() => {
        Backendless.Data.of( "Users" ).findById(selectedPost.ownerId)
 .then(res => {
 
    settutUser(res)
  })
 .catch( err => {
    alert("Something went wrong"+err.message);
  });
    }, [])




useEffect(() => {
    const postID = selectedPost.objectId
    const where = "postID = '" + postID + "'";
    var queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(where);
    queryBuilder.addRelated(['userid'])
    Backendless.Data.of("comments")
      .find(queryBuilder)
      .then((res) => {
        setcomments(res)
       
      })
      .catch((err) => {
       alert("Something went wrong" +err.message);
      });
  }, []);


  function leaveComment(e) {
    e.preventDefault()
    Backendless.Data.of("comments").save({content: e.target.comment.value}).then(res => {
        console.log(res);
        let parent = { objectId: res.objectId};

let childObject = { objectId: currentUser && currentUser.objectId  };

let children = [ childObject ];

Backendless.Data.of( "comments" ).addRelation( parent, "userid", children )
  .then(res => {
   
  })
  .catch( error => {
    alert( "Something went wrong"+error.message);
  });


  childObject = { objectId: selectedPost && selectedPost.objectId  };
  
 

  children = [ childObject ];

  Backendless.Data.of( "comments" ).addRelation( parent, "postID", children )
  .then(res => {
    
  })
  .catch( error => {
    alert( "Something went wrong" +error.message);
  });
    })

    

    .catch(err => console.log(err))

    e.target.comment.value = ""
  } 

  
  return (
    <div className='h-screen'>
        <Navbar currentUser={currentUser} />


        <main className='h-5/6 bg-background text-text overflow-auto singlepost_main_container'>
           
        {selectedPost && <div className='flex flex-col'>
            <p className='mx-3'>Author:</p>
           { tutUser && <div className='flex flex-col items-center justify-evenly'>
                <img className='w-24 rounded-full border-2 border-primary' src={tutUser.profileImg} alt="" />
                <p className='self-center text-2xl nick'>{ tutUser.nickname}</p>
            </div>}


            <div className='flex flex-col items-center px-3'>
            <h1 className='text-4xl shadow'>{selectedPost.title}</h1>
            <img className='w-32 rounded-md' src={selectedPost.picture} alt="" />
            <p >{selectedPost.content}</p>
            </div>

            </div>}


            <p className='text-xl text-center nick'>Comments:</p>
            { comments && <div className='flex flex-col container_of_comments '>{comments.map((i,j) => <div key={j} className='flex border m-1 px-2 rounded-lg gap-6 comments_container'>
               <div>
               <img className='w-20 rounded-full' src={i.userid.profileImg} alt="" />
               <p> {i.userid.nickname}</p>

               </div>
            
                <p className='text-center relative top-8'>{i.content}</p>
                </div>
                )}</div>}

      <div className="divider divider-primary mx-auto w-32"></div>
      <p className='text-lg text-center'>Leave a comment:</p>



            {currentUser && currentUser? <div className='flex leave_comment_container'>
                <div className='flex flex-col gap-1 items-center'>

                <img className='w-20 rounded-full' src={currentUser.profileImg} alt="user image" /> 
                <h1>{currentUser.nickname}</h1>
                </div>
                <form className='text-black flex flex-col items-center m-3 gap-2 form_container' onSubmit={leaveComment}>
                    <input className='text-black' placeholder='Comment:' type="text" name="comment" id="" />
                    <button type='submit' className='btn bg-primary border-none text-text text-lg'>Submit</button>
                </form>
                </div>
             : <div>
                <h3 className='text-lg'>To leave a comment, please log in or register</h3>
                <Link to={"/register"}><button className='btn'>Login</button></Link>
                </div>}

            

        </main>


        <Footer />
    </div>
  )
}

export default SinglePost