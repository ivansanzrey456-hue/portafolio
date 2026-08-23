import Button from "./Button";
import Card from "./Card";

import imgTemp from "../assets/images/imgTemp.png";
import { FaArrowRight } from "react-icons/fa";
import "../styles/hero.css";

function Hero() {
    return (
        <section className="hero" id="hero">
            
            <div className="hero-container">

                <div className="hero-content">

                    {/* Saludo y Badge de estado */}
                    <span className="hero-greeting animate-on-scroll stagger-1">
                        Hola, soy
                    </span>
                    
                    <h1 className="animate-on-scroll stagger-1">
                        Ivan Sanchez Reyes
                    </h1>
                    
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

                    {/* Botones */}
                    <div className="hero-buttons animate-on-scroll stagger-4">
                        <Button
                            href="#projects"
                            icon={<FaArrowRight />}
                        >
                            Ver proyectos
                        </Button>

                        <Button
                            href="/cv.pdf"
                            variant="secondary"
                        >
                            Descargar CV
                        </Button>
                    </div>
                    
                    {/* Tarjetas de Highlights */}
                    <div className="hero-highlights">
                        <div className="animate-on-scroll stagger-4">
                            <Card>
                                <h3>🏊</h3>
                                <h4>Sistema Web</h4>
                                <p>React • PHP • MySQL</p>
                            </Card>
                        </div>

                        <div className="animate-on-scroll stagger-5">
                            <Card>
                                <h3>🔑</h3>
                                <h4>API Biométrica</h4>
                                <p>C# • Flask • SQL</p>
                            </Card>
                        </div>

                        <div className="animate-on-scroll stagger-5">
                            <Card>
                                <h3>🏠</h3>
                                <h4>INNOVATECNM</h4>
                                <p>IoT • Automatización</p>
                            </Card>
                        </div>

                        <div className="animate-on-scroll stagger-6">
                            <Card>
                                <h3>🎬</h3>
                                <h4>Visual Player</h4>
                                <p>Python • PyQt6 • VLC</p>
                            </Card>
                        </div>
                    </div>        

                </div>

                {/* Columna de la Imagen con protección anti-descarga */}
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