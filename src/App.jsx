import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Community from './components/Community';
import Profile from './components/Profile';
import Register from './components/Register';
import GamePosts from './components/GamePosts';
import { useState } from 'react';
import Backendless from 'backendless';




function App() {
  const [games, setgames] = useState([])
  const [tutorials, settutorials] = useState([])
  const [selectedGame, setselectedGame] = useState()
  

  Backendless.serverURL = "https://eu-api.backendless.com"
  Backendless.initApp(process.env.REACT_APP_APP_ID, process.env.REACT_APP_API_KEY );


  return (
    <div className="App">
   

    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/community' element={<Community games={games} setgames={setgames} setselectedGame={setselectedGame} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile tutorials={tutorials} />} />
      <Route path='/createpost' element={<CreatePost />} />
      <Route path='/posts' element={<GamePosts tutorials={tutorials} settutorials={settutorials} selectedGame={selectedGame}/>} />


    </Routes>
   
     
    </div>
  );
}

export default App;
