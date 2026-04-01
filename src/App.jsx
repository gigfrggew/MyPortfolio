import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import HandGestureProject from './pages/HandGestureProject';
import CarRental from './pages/CarRental';

function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Projects />
        <Education />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/hand-gesture-recognition" element={<HandGestureProject />} />
        <Route path="/projects/car-rental" element={<CarRental />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
