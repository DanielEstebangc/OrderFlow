import { useState } from "react";
import "./input_info_cliente.css";

export default function Inputs({placeholder, 
  label, 
  icon, 
  value, 
  onChange, 
  name,
  required,
  minLength,
  type = "text"}){

    const [error, setError] = useState("");
    const [touched, setTouched] = useState(false);

    const validate = (val) => {

    if (required && !val) {
      return "Este campo es obligatorio";
    }

    if (minLength && val.length < minLength) {
      return `Debe tener al menos ${minLength} caracteres`;
    }

    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) {
        return "Correo inválido";
      }
    }

    return "";
    };

    const handleChange = (e) => {
        const val = e.target.value;
        onChange(e); // mantiene comportamiento original
        if (touched) {
        setError(validate(val));
        }
    };

    const handleBlur = (e) => {
        setTouched(true);
            setError(validate(e.target.value));
    };



    return (
    <div className="input_contenedor_principal" style={{ marginBottom: "15px" }}>
      <div className="input_header">
        <span className="input_icon">{icon}</span>
        <label className="input_label" htmlFor={name}>{label}</label>
      </div>
      <input
        className={`input_field ${error ? "input_error" : ""}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{
          border: error ? "2px solid red" : "1px solid #ccc",
          padding: "8px",
          width: "100%"
        }}
      />
      {error && (
        <small className="error_text" style={{ color: "red" }}>
          {error}
        </small>
      )}
    </div>
  );
}