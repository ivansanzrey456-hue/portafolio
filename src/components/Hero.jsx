import Button from "./Button";
import Card from "./Card";
import React from 'react';
import StrokeText from "./StrokeText";
import { FaGlobe, FaFingerprint, FaMicrochip, FaPlayCircle, FaArrowRight } from "react-icons/fa";

import imgTemp from "../assets/images/imgTemp.png";
import "../styles/hero.css";

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-container">
                <div className="hero-content">

                    <span className="hero-greeting animate-on-scroll stagger-1">
                        Hola, soy
                    </span>
                    
                    <div className="animate-on-scroll stagger-1">
                        <StrokeText
                            text="Ivan Sanchez Reyes"
                            strokeColor="#60a5fa"     /* Color del borde que dibuja */
                            fillColor="#ffffff"       /* Color del relleno del texto */
                            strokeWidth={2}           /* Grosor del trazo */
                            fontSize={64}             /* Tamaño de fuente adecuado para títulos */
                            fontWeight={700}
                            letterSpacing={-1}
                            drawDuration={1.8}
                            fillDelay={0.3}
                            trigger="scroll"          /* Se anima al hacer scroll */
                        />
                        </div>
                    
                    <h2 className="animate-on-scroll stagger-2">
                        Ingeniero en Informática | Full Stack Developer
                    </h2>

                    <div className="status-badge animate-on-scroll stagger-2">
                        <span className="status-dot"></span>
                        Disponible para nuevos proyectos
                    </div>

                    <p className="animate-on-scroll stagger-3">
                        Ingeniero en Informática con experiencia en el desarrollo de aplicaciones web, 
                        integración de APIs y soluciones que conectan software y hardware. 
                        Me apasiona transformar problemas reales en herramientas funcionales, 
                        escalables y fáciles de utilizar.
                    </p>

                    <div className="hero-buttons animate-on-scroll stagger-4">
                        <Button
                            href="#projects"
                            icon={<FaArrowRight />}
                        >
                            Ver proyectos
                        </Button>
                    </div>
                    
                    <div className="hero-highlights">
                        <div className="animate-on-scroll stagger-4">
                            <Card>
                                <FaGlobe className="card-icon" />
                                <h4>Sistema Web</h4>
                                <p>React • PHP • MySQL</p>
                            </Card>
                        </div>

                        <div className="animate-on-scroll stagger-5">
                            <Card>
                                <FaFingerprint className="card-icon" />
                                <h4>API Biométrica</h4>
                                <p>C# • Flask • SQL</p>
                            </Card>
                        </div>

                        <div className="animate-on-scroll stagger-5">
                            <Card>
                                <FaMicrochip className="card-icon" />
                                <h4>INNOVATECNM</h4>
                                <p>IoT • Automatización</p>
                            </Card>
                        </div>

                        <div className="animate-on-scroll stagger-6">
                            <Card>
                                <FaPlayCircle className="card-icon" />
                                <h4>Visual Player</h4>
                                <p>Python • PyQt6 • VLC</p>
                            </Card>
                        </div>
                    </div>        

                </div>

                <div className="hero-image animate-on-scroll stagger-3">
                    <img
                        src={imgTemp}
                        alt="Ivan Sanchez Reyes"
                        className="floating-hero-img"
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;