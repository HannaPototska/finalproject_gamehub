import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Community from './components/Community';
import Profile from './components/Profile';
import Register from './components/Register';


function App() {
  return (
    <div className="App bg-background w-screen h-screen">
   

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/community' element={<Community />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/createpost' element={<CreatePost />} />

    </Routes>
   
     
    </div>
  );
}

export default App;
