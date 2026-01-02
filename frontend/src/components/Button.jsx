import "../styles/Button.css"

function Button({ text, onClick, color = "#1D61E7", textColor = "#FFFFFF", showOnMobile, className = "" }) {
    return (
        <button className={`btn ${showOnMobile ? "mobile-only" : ""} ${className}`} onClick={onClick} style={{ backgroundColor: color, color: textColor}}>{text}</button>
    )
}

export default Button