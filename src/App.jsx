import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
          © 2025 Your Name - Narnaund, Haryana. Built with React + Bootstrap.
        </footer>
      </div>
    </Router>
  );
}

export default App;
