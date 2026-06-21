import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Blogs from './components/Blogs';
import Header from './components/Header';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="App">
      <Header onContactClick={() => setIsContactOpen(true)} />
      <About />
      <Blogs />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
