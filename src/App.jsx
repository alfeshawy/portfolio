import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import About from './components/About';
import Projects from './components/Projects';
import SystemArchitecture from './components/SystemArchitecture';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Terminal />
        <About />
        <Projects />
        <SystemArchitecture />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


export default App;
