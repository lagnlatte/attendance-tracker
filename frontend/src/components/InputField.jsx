import "../styles/InputField.css"

function InputField({ label, type="text", placeholder }) {
    return (
        <>
            <label className="grey-text">{label}</label>
            <div>
                <input type={type} placeholder={placeholder}></input>
            </div>
        </>
    )
}

export default InputField