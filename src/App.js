import React from 'react';
import './Css/App.css';
import Hero from './Components/Hero.js';
import Member from './Components/Member.js';
import Mem from './Components/Team.js';
import AboutUs from './Components/AboutUS.js';
import Footer from './Components/Footer.js';
import PastEvents from './Components/PastEvents.js';
import Contact from './Components/contact.js';
import Events from './Components/Events.js';
import Video from './Components/Video.js';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage.js';

function App() {
  return (
   <div>
    
    <Routes>
    
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/team' element={<Mem/>}></Route>
    </Routes>
    {/* <Member/> */}
   
   </div>
  );
}

export default App;
