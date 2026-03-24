import Boton_eliminar from "./boton_eliminar";
import SelectProductos from "./select_productos";
import DeleteIcon from '@mui/icons-material/Delete';





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

  return(
    <div>
      <div>

        <SelectProductos 
          onSelect={handleSelectProducto}
          value={producto.nombre}
        />

        <div>
          <label htmlFor="cantidad">Cantidad</label>        
          <input
            name="cantidad"
            type="number"
            placeholder="0"
            value={producto.cantidad || 0}
            onChange={handleChange}
            min="0"
          />
        </div>

        <div> 
          <p>Precio</p>
          <span>{producto.precio || 0}</span>
        </div>

      </div>

      <Boton_eliminar icono= {<DeleteIcon sx={{ fontSize: 50, color: '#ff2222' }}/>} onClick={onEliminar} />

    </div>
  );
}