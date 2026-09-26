import React from 'react';
import Card from "./Card";
import "../styles/workflow.css";
import { FiActivity, FiCode, FiCpu, FiCheckCircle } from 'react-icons/fi';

const steps = [
    {
        number: "01",
        icon: <FiActivity size={24} />,
        title: "Analizar",
        description: "Comprender el problema, identificar necesidades y definir una solución adecuada."
    },
    {
        number: "02",
        icon: <FiCode size={24} />,
        title: "Desarrollar",
        description: "Construir aplicaciones y sistemas utilizando tecnologías adecuadas para cada proyecto."
    },
    {
        number: "03",
        icon: <FiCpu size={24} />,
        title: "Integrar",
        description: "Conectar APIs, bases de datos, servicios y hardware para crear soluciones completas."
    },
    {
        number: "04",
        icon: <FiCheckCircle size={24} />,
        title: "Resolver",
        description: "Convertir la solución desarrollada en una herramienta funcional, útil y orientada a resultados."
    }
];

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
                    {steps.map((step, index) => (
                        <div key={step.number} className={`animate-on-scroll stagger-${index + 1}`}>
                            <Card>
                                <span className="workflow-number">{step.number}</span>
                                <div className="workflow-icon">
                                    {step.icon}
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </Card>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Workflow;