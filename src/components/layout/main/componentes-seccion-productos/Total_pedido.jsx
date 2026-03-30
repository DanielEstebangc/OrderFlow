import "./Total_pedido.css";

export default function Total_pedido({ total }) {
  return (
    <div className="contenedor_total_final"> {/* Este lo empuja a la derecha */}
      <div className="tarjeta_total"> {/* El cuadro con fondo azul claro */}
        <p>Total del Pedido</p>
        <span className="monto_total">$ {total}</span>
      </div>
    </div>
  );
}