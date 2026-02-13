import Boton_eliminar from "./boton_eliminar"
import SelectProductos from "./select_productos"

export default function producto(){
    return(
        <div>
            <div>
            <SelectProductos></SelectProductos>
            <div>
                <label htmlFor="cantidad"></label>        
                <input name="cantidad" type="number" placeholder="0"></input>
            </div>

            <div>
                <p>precio</p>
                <span>10000</span>
            </div>
            </div>
            <Boton_eliminar icono={"eliminar"}></Boton_eliminar>
        </div>
    )
}