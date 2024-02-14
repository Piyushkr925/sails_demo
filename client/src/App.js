import React from 'react';
import Hero from './controller/Hero';
import Navbar from './controller/Navbar';
import Analytics from './controller/Analytics';
import NewsLetter from './controller/NewsLetter';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Analytics />
    <NewsLetter />
    </>
  );
}
 

export default App;
