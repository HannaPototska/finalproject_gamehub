import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Community from './components/Community';
import Profile from './components/Profile';
import Register from './components/Register';
import GamePosts from './components/GamePosts';
import { useEffect, useState } from 'react';
import Backendless from 'backendless';
import axios from 'axios';
import SinglePost from './components/SinglePost';
import Fake from './components/Fake';




function App() {
  const [games, setgames] = useState([])
  const [tutorials, settutorials] = useState([])
  const [selectedGame, setselectedGame] = useState()
  const [currentUser, setcurrentUser] = useState()
  const [selectedPost, setselectedPost] = useState()
  

  useEffect(()=>{
    Backendless.UserService.getCurrentUser()
  .then(currentUser => {
    setcurrentUser(currentUser)
  })
  .catch(error => {
    alert("Something went wrong")
  })
  },[])


  useEffect(() => {
    axios("https://www.freetogame.com/api/games").then(res => 
    {
    setgames(i => res.data)
    })
  .catch(err => console.log(err))
  }, [])

  

  Backendless.serverURL = "https://eu-api.backendless.com"
  Backendless.initApp(process.env.REACT_APP_APP_ID, process.env.REACT_APP_API_KEY );


  return (
    <div className="App">
   

    <Routes>
      
      <Route path='/' element={<Home currentUser={currentUser} />} />
      <Route path='/community' element={<Community games={games} setselectedGame={setselectedGame} selectedGame={selectedGame} currentUser={currentUser} />} />
      <Route path='/register' element={<Register currentUser={currentUser} />} />
      <Route path='/profile' element={<Profile currentUser={currentUser} setcurrentUser={setcurrentUser} />} />
      <Route path='/createpost' element={<CreatePost currentUser={currentUser} setcurrentUser={setcurrentUser} games={games} />} />
      <Route path='/posts' element={<GamePosts currentUser={currentUser} tutorials={tutorials} settutorials={settutorials} selectedGame={selectedGame} setselectedPost={setselectedPost} />} />
      {/* <Route path='/posts/:title' element={<Fake />} /> */}
      <Route path='/singlepost' element={<SinglePost selectedPost={selectedPost} currentUser={currentUser}  />} />



    </Routes>
   
     
    </div>
  );
}

export default App;
