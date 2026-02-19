import Boton_eliminar from "./boton_eliminar";

export default function ProductoItem({ producto }) {

  return (
    <div>
      <div>

        <div>
          <strong>{producto.nombre}</strong>
        </div>

        <div>
          <input
            type="number"
            value={producto.cantidad}
            disabled
          />
        </div>

        <div>
          <p>precio</p>
          <span>{producto.precio}</span>
        </div>

      </div>

      <Boton_eliminar icono={"eliminar"} />
    </div>
  );
}
