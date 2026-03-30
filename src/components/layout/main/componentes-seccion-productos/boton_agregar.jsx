import "./Boton_Agregar.css";


export default function Boton_Agregar({ onClick }) {
  return (
    /* Reutilizamos la misma clase para que herede todo el diseño */
    <button className="btn_registrar" onClick={onClick}>
      + Agregar
    </button>
  );
}