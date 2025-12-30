import "../styles/Button.css"

function Button({ text, onClick, color = "#1D61E7" }) {
    return (
        <button onClick={onClick} style={{ backgroundColor: color}}>{text}</button>
    )
}

export default Button