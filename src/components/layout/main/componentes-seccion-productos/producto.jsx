import Boton_eliminar from "./boton_eliminar";
import SelectProductos from "./select_productos";
import DeleteIcon from '@mui/icons-material/Delete';
import "./Producto.css";






export default function Producto({ producto, onEliminar, onChange }) {

  const handleSelectProducto = (productoSeleccionado) => {
    onChange({
      ...producto,
      nombre: productoSeleccionado.nombre,
      precio: Number(productoSeleccionado.precio)
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    onChange({
      ...producto,
      [name]: Number(value)
    });
  };

  return (
    <div className="producto_fila"> {/* Contenedor principal de la tarjeta */}
      
      <div className="producto_controles"> {/* Agrupa Select, Cantidad y Precio */}
        
        <div className="producto_item_select">
          <SelectProductos 
            onSelect={handleSelectProducto}
            value={producto.nombre}
          />
        </div>

        <div className="producto_item_cantidad">
          <label htmlFor="cantidad">Cantidad</label>        
          <input
            name="cantidad"
            className="input_cantidad"
            type="number"
            value={producto.cantidad || 0}
            onChange={handleChange}
            min="0"
          />
        </div>

        <div className="producto_item_precio"> 
          <p>Precio</p>
          <span className="precio_texto">${producto.precio || 0}</span>
        </div>

      </div>

      <div className="producto_accion_eliminar">
        <Boton_eliminar 
          icono={<DeleteIcon sx={{ fontSize: 30, color: '#ff2222' }} />} 
          onClick={onEliminar} 
        />
      </div>

    </div>
  );
}