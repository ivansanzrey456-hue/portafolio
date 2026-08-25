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

import "./styles/global.css"; // Revisa que esta ruta coincida con la ubicación real de tu global.css
import { useEffect } from 'react';
import React from 'react';

function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Si el elemento entra al área visible, le agregamos la clase "visible"
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1, // Se activa al mostrar el 10% del elemento
      rootMargin: "0px 0px -50px 0px" // Margen de activación para asegurar disparador en scroll
    });

    // Pequeño timeout para dar tiempo a React de renderizar todos los elementos en el DOM
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

export default App;