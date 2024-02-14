import React from 'react';
import Hero from './controller/Hero';
import Navbar from './controller/Navbar';
import Analytics from './controller/Analytics';
import NewsLetter from './controller/NewsLetter';
import Cards from './controller/Cards';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Analytics />
    <NewsLetter />
    <Cards />
    </>
  );
}
 

export default App;
