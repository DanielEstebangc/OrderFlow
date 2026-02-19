import Boton_eliminar from "./boton_eliminar"
import SelectProductos from "./select_productos"



export default function Producto({ producto, setProducto }) {

  const handleSelectProducto = (productoSeleccionado) => {
    setProducto((prev) => ({
      ...prev,
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProducto((prev) => ({
      ...prev,
      [name]: value
    }));
  };


    
    return(
        <div>
            <div>
            <SelectProductos onSelect={handleSelectProducto}></SelectProductos>
            <div>
                <label htmlFor="cantidad"></label>        
                <input name="cantidad" type="number" placeholder="0" value={producto.cantidad} onChange={handleChange}></input>
            </div>

            <div> 
                <p>precio</p>
                <span>{producto.precio}</span>
            </div>
            </div>
            <Boton_eliminar icono={"eliminar"}></Boton_eliminar>
        </div>
    )
}