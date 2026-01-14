import "../styles/InputField.css";

function InputField({
  label,
  value,
  onChange,
  disabled = false,
  type = "text",
  placeholder,
  required = true,
}) {
  return (
    <>
      <label className="grey-text">
        {label}
        {required && <span className="required">*</span>}
      </label>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
        />
      </div>
    </>
  );
}

export default InputField;
