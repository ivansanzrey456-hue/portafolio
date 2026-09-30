import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Workflow from "./components/Workflow";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Solutions from "./components/Solutions";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound"; // Importamos el 404

import "./styles/global.css";

// Componente que agrupa todas las secciones de tu Landing Page
function MainContent() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    const timer = setTimeout(() => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Workflow />
      <About />
      <Experience />
      <Projects />
      <Solutions />
      <Technologies />
      <Contact />
      <Footer />
    </>
  );
}

// Componente principal con las rutas
function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal '/' despliega todas las secciones */}
        <Route path="/" element={<MainContent />} />

        {/* Cualquier otra ruta no definida '*' carga la página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;