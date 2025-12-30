import "../styles/Button.css"

function Button({ text, onClick, color = "#1D61E7", showOnMobile }) {
    return (
        <button className={`btn ${showOnMobile ? "mobile-only" : ""}`} onClick={onClick} style={{ backgroundColor: color}}>{text}</button>
    )
}

export default Button