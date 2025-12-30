import "../styles/InputField.css"

function InputField({ label, value, disabled = false, type="text", placeholder }) {
    return (
        <>
            <label className="grey-text">{label}</label>
            <div>
                <input type={type} placeholder={placeholder} value={value} disabled={disabled}></input>
            </div>
        </>
    )
}

export default InputField