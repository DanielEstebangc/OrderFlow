import "./boton_registrar.css"

export default function Boton_registrar({ onClick }) {
    return (
        <button className="btn_registrar" onClick={onClick}>
            Registrar Pedido
        </button>
    );
}