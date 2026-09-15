import Button from "./Button";
import Card from "./Card";
import React from 'react';
import StrokeText from "./StrokeText";
import SplitFlapText from "./SplitFlapText";
import SpecularButton from "./SpecularButton";
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
                            fontSize={64} /* Deja un base fijo aquí */          /* Tamaño de fuente adecuado para títulos */
                            fontWeight={700}
                            letterSpacing={-1}
                            drawDuration={1.8}
                            fillDelay={0.3}
                            trigger="scroll"          /* Se anima al hacer scroll */
                        />
                        </div>
                    
                    <div className="animate-on-scroll stagger-2">
                        <SplitFlapText
                            words={[" Ingeniero en Informática"," Full Stack Developer",]}
                            flipDuration={0.12}
                            stagger={0.06}
                            cycleDelay={2400}
                            charset="alphanumeric"
                            flipsPerChar={8}
                            tileColor="#111827"
                            textColor="#f8fafc"
                            tileRadius={8}
                            gap={2}
                            className="split-flap-hero"
                            loop
                            padTo={0}
                            />
                    </div>

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
                        
<SpecularButton
  size="lg"
  radius={18}
  tint="#ffffff"
  tintOpacity={0}
  blur={0}
  textColor="#f5f5f5"
  lineColor="#ffffff"
  baseColor="#112eeb"
  intensity={1}
  shineSize={10}
  shineFade={40}
  thickness={1}
  speed={0.35}
  followMouse
  proximity={250}
  autoAnimate={false}
  onClick={() => {
    const section = document.querySelector("#projects");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
>
  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
    Ver proyectos <FaArrowRight />
  </span>
</SpecularButton>
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