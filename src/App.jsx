import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Innovations from './components/Innovations';
import Visionaries from './components/Visionaries';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Innovations />
        <Visionaries />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;