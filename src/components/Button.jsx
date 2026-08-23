import "../styles/button.css";

function Button({
    children,
    href,
    variant = "primary",
    target,
    rel
}){

    return(

        <a
            href={href}
            className={`btn ${variant}`}
            target={target}
            rel={rel}
        >
            {children}
        </a>

    );

}

export default Button;