import {
    FaCode,
    FaPlug,
    FaMicrochip,
    FaDesktop
} from "react-icons/fa";

//importaciones de componenntes..
import "../styles/solutions.css";

function Solutions() {

    return (

        <section className="solutions" id="solutions">

            <div className="solutions-container">

                <div className="solutions-header">

                    <span className="section-label">
                        SOLUCIONES
                    </span>

                    <h2>
                        Tecnología aplicada a problemas reales
                    </h2>

                    <p>
                        Desarrollo e integración de soluciones que combinan
                        software, APIs, hardware y herramientas especializadas
                        para resolver necesidades concretas.
                    </p>

                </div>


                <div className="solutions-grid">


                    <article className="solution-card">

                        <div className="solution-icon">
                            <FaCode />
                        </div>

                        <span className="solution-number">
                            01
                        </span>

                        <h3>
                            Desarrollo de software
                        </h3>

                        <p>
                            Desarrollo de aplicaciones orientadas a resolver
                            procesos reales mediante interfaces funcionales,
                            lógica de negocio y herramientas adaptadas a cada
                            necesidad.
                        </p>

                        <div className="solution-tags">

                            <span>React</span>
                            <span>JavaScript</span>
                            <span>Python</span>
                            <span>PyQt6</span>

                        </div>

                    </article>


                    <article className="solution-card">

                        <div className="solution-icon">
                            <FaPlug />
                        </div>

                        <span className="solution-number">
                            02
                        </span>

                        <h3>
                            APIs e integración
                        </h3>

                        <p>
                            Conexión e interconexión de aplicaciones, 
                            bases de datos y dispositivos mediante APIs robustas 
                            capaces de articular las distintas capas del sistema.
                        </p>

                        <div className="solution-tags">

                            <span>C#</span>
                            <span>PHP</span>
                            <span>Flask</span>
                            <span>SQL</span>

                        </div>

                    </article>


                    <article className="solution-card">

                        <div className="solution-icon">
                            <FaMicrochip />
                        </div>

                        <span className="solution-number">
                            03
                        </span>

                        <h3>
                            IoT y automatización
                        </h3>

                        <p>
                            Integración entre software, electrónica y
                            dispositivos físicos para crear sistemas
                            automatizados capaces de interactuar con
                            el entorno.
                        </p>

                        <div className="solution-tags">

                            <span>Arduino</span>
                            <span>C/C++</span>
                            <span>Bluetooth</span>
                            <span>Sensores</span>

                        </div>

                    </article>


                    <article className="solution-card">

                        <div className="solution-icon">
                            <FaDesktop />
                        </div>

                        <span className="solution-number">
                            04
                        </span>

                        <h3>
                            Herramientas multimedia
                        </h3>

                        <p>
                            Implementación de aplicaciones de escritorio diseñadas 
                            para gestionar, previsualizar y operar contenido
                            multimedia en tiempo real.
                        </p>

                        <div className="solution-tags">

                            <span>Python</span>
                            <span>PyQt6</span>
                            <span>VLC</span>
                            <span>Desktop</span>

                        </div>

                    </article>


                </div>

            </div>

        </section>

    );

}

export default Solutions;