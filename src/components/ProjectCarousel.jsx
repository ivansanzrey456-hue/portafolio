// src/components/ProjectCarousel.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Asegúrate de tener instalada esta librería: npm install react-icons
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
import '../styles/ProjectCarousel.css';

const ProjectCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Verificación de seguridad si no hay imágenes
  if (!images || images.length === 0) {
    return <div className="carousel-empty">No hay imágenes disponibles</div>;
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Variantes de animación para Framer Motion
  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="carousel-root">
      {/* El viewport que contiene la imagen y los botones sobrepuestos */}
      <div className="carousel-viewport">
        
        {/* Navegación por Gestos/Swipe (Opcional, pero recomendado) */}
        {images.length > 1 && (
          <>
            <button className="carousel-nav-btn prev" onClick={goToPrevious} aria-label="Anterior">
              <FiChevronLeft size={24} />
            </button>
            <button className="carousel-nav-btn next" onClick={goToNext} aria-label="Siguiente">
              <FiChevronRight size={24} />
            </button>
          </>
        )}

        {/* Imagen Animada */}
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentIndex} // Importante para re-animar al cambiar de índice
            src={images[currentIndex]}
            alt={`Captura del proyecto ${currentIndex + 1}`}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="carousel-image"
          />
        </AnimatePresence>
      </div>

      {/* Indicadores inferiores (Dots) - Solo si hay más de una imagen */}
      {images.length > 1 && (
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a la imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;