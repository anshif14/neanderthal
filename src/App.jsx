import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// Import other components later
// import About from './components/About';
// import Services from './components/Services';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
import './App.css'; // Global styles

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        {/* Placeholder sections - we will build these next */}
        <section id="about" style={{ height: '100vh', background: '#f8f8f8' }}><h2>About Us</h2></section>
        <section id="services" style={{ height: '100vh', background: '#eee' }}><h2>Our Services</h2></section>
        <section id="portfolio" style={{ height: '100vh', background: '#f8f8f8' }}><h2>Portfolio</h2></section>
        <section id="contact" style={{ height: '100vh', background: '#eee' }}><h2>Contact Us</h2></section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
