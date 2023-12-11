import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Community from './components/Community';
import Profile from './components/Profile';
import Register from './components/Register';
import GamePosts from './components/GamePosts';
import { useState } from 'react';


function App() {
  const [games, setgames] = useState([])
  const [posts, setposts] = useState([])


  return (
    <div className="App">
   

    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/community' element={<Community games={games} setgames={setgames} setposts={setposts} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/createpost' element={<CreatePost />} />
      <Route path='/posts' element={<GamePosts posts={posts}/>} />


    </Routes>
   
     
    </div>
  );
}

export default App;
