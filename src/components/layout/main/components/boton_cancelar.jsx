import "./boton_cancelar.css"; // Asegúrate de que termine en .css

export default function Boton_cancelar({ onClick }) {
  return (
    <button className="btn_cancelar" onClick={onClick}>
      Cancelar
    </button>
  );
}