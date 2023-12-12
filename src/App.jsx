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




function App() {
  const [games, setgames] = useState([])
  const [tutorials, settutorials] = useState([])
  const [selectedGame, setselectedGame] = useState()
  const [currentUser, setcurrentUser] = useState()

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
      
      <Route path='/' element={<Home />} />
      <Route path='/community' element={<Community games={games} setgames={setgames} setselectedGame={setselectedGame} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile currentUser={currentUser} setcurrentUser={setcurrentUser} />} />
      <Route path='/createpost' element={<CreatePost currentUser={currentUser} setcurrentUser={setcurrentUser} games={games} />} />
      <Route path='/posts' element={<GamePosts tutorials={tutorials} settutorials={settutorials} selectedGame={selectedGame}/>} />


    </Routes>
   
     
    </div>
  );
}

export default App;
