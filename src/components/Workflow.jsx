import Card from "./Card";
import "../styles/workflow.css";

function Workflow() {
    return (
        <section className="workflow" id="workflow">
            <div className="workflow-container">

                {/* Encabezado animado */}
                <div className="workflow-header animate-on-scroll">
                    <span className="section-label">
                        ARQUITECTURA DIGITAL
                    </span>

                    <h2>
                        De una idea a una solución funcional
                    </h2>

                    <p>
                        Combino análisis, desarrollo e integración tecnológica
                        para convertir necesidades reales en soluciones digitales.
                    </p>
                </div>

                {/* Grid con animación en cascada secuencial */}
                <div className="workflow-grid">

                    <div className="animate-on-scroll stagger-1">
                        <Card>
                            <span className="workflow-number">01</span>
                            <div className="workflow-icon">🧠</div>
                            <h3>Analizar</h3>
                            <p>
                                Comprender el problema, identificar necesidades
                                y definir una solución adecuada.
                            </p>
                        </Card>
                    </div>

                    <div className="animate-on-scroll stagger-2">
                        <Card>
                            <span className="workflow-number">02</span>
                            <div className="workflow-icon">⚙️</div>
                            <h3>Desarrollar</h3>
                            <p>
                                Construir aplicaciones y sistemas utilizando
                                tecnologías adecuadas para cada proyecto.
                            </p>
                        </Card>
                    </div>

                    <div className="animate-on-scroll stagger-3">
                        <Card>
                            <span className="workflow-number">03</span>
                            <div className="workflow-icon">🔗</div>
                            <h3>Integrar</h3>
                            <p>
                                Conectar APIs, bases de datos, servicios y hardware
                                para crear soluciones completas.
                            </p>
                        </Card>
                    </div>

                    <div className="animate-on-scroll stagger-4">
                        <Card>
                            <span className="workflow-number">04</span>
                            <div className="workflow-icon">🚀</div>
                            <h3>Resolver</h3>
                            <p>
                                Convertir la solución desarrollada en una herramienta
                                funcional, útil y orientada a resultados.
                            </p>
                        </Card>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Workflow;