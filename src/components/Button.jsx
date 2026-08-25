import "../styles/button.css";
import React from 'react';

function Button({
    children,
    href,
    variant = "primary",
    target,
    rel,
    icon // <-- Añadido aquí
}){

    return(
        <a
            href={href}
            className={`btn ${variant}`}
            target={target}
            rel={rel}
        >
            {children}
            {icon && <span className="btn-icon">{icon}</span>} {/* <-- Renderizado aquí */}
        </a>
    );
}

export default Button;