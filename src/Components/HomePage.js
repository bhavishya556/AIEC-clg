import React from 'react';
import '../Css/App.css';
import Hero from './Hero.js';
import Member from './Member.js';
import Mem from './Team.js';
import AboutUs from './AboutUS.js';
import Footer from './Footer.js';
import PastEvents from './PastEvents.js';
import Contact from './contact.js';
import Events from './Events.js';
import Video from './Video.js';
import { Route, Routes } from 'react-router-dom';

function HomePage() {
  return (
   <div>
    <Hero/>
    <AboutUs/>
    <Video/>
    <PastEvents/>
    <Events/>
    <Contact/>
    <Footer/>
   </div>
  );
}

export default HomePage;
