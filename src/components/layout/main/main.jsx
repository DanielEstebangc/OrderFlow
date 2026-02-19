import { useState } from "react";
import Inputs from "./componentes-seccion cliente/input_info_cliente"
import Boton_Agregar from "./componentes-seccion-productos/boton_agregar"
import Producto from "./componentes-seccion-productos/producto"
import Total_pedido from "./componentes-seccion-productos/Total_pedido"
import Boton_cancelar from "./components/boton_cancelar"
import Boton_registrar from  "./components/boton_registrar"
import { enviarCliente } from "../../../services/cliente_services/clienteService";
import ProductoItem from "./componentes-seccion-productos/ProductoItem";

export default function Main(){

    const [cliente, setCliente] = useState({
        nombre: "",
        telefono: "",
        correo: ""
    });

    const handleChange = (e) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        });
    };

    const handleMostrarDatos = () => {
    console.log(cliente);
    };

    const [productoActual, setProductoActual] = useState({
        nombre: "",
        cantidad: "",
        precio: ""
    });

    const [productos, setProductos] = useState([]);

    const handleAgregarProducto = () => {
        console.log("Producto actual:", productoActual);
        if (!productoActual.nombre || !productoActual.cantidad) return;

        setProductos(prev => [
            ...prev,
            { id: Date.now(), ...productoActual }
        ]);

        // limpiar producto actual
        setProductoActual({
            nombre: "",
            cantidad: "",
            precio: ""
        });
    };

   const handleRegistrar = async () => {
        try {
            const respuesta = await enviarCliente(cliente);
            console.log("Respuesta del backend:", respuesta);
        } catch (error) {
            console.error("Error registrando cliente:", error);
        }
    };


    return(
        <main>
            <section>

                <div>
                    <span>icono</span>
                    <h2>Información del Cliente</h2> 
                </div>
                
                <div>
                 <Inputs
                    name="nombre"
                    label="Nombre completo"
                    placeholder="EJ. Daniel Galvis"
                    icon="user"
                    value={cliente.nombre}
                    onChange={handleChange}
                />

                <Inputs
                    name="telefono"
                    label="Teléfono"
                    placeholder="+57 300 123 4567"
                    icon="phone"
                    value={cliente.telefono}
                    onChange={handleChange}
                />

                <Inputs
                    name="correo"
                    label="Correo electrónico"
                    placeholder="daniel@email.com"
                    icon="mail"
                    value={cliente.correo}
                    onChange={handleChange}
                />
                </div>
            </section>

            <section>

                <div>
                    <span>icono</span>
                    <h2>Productos</h2> 
                    <Boton_Agregar onClick={handleAgregarProducto}></Boton_Agregar>
                </div>

                <div>
                    {/* FORMULARIO */}
                    <Producto
                        producto={productoActual}
                        setProducto={setProductoActual}
                    />

                    {/* PRODUCTOS AGREGADOS */}
                    {productos.map((p) => (
                        <ProductoItem
                            key={p.id}
                            producto={p}
                        />
                    ))}
                </div>

               <Total_pedido></Total_pedido>

            </section>

            <div>
                <Boton_cancelar></Boton_cancelar>
                <Boton_registrar onClick={() => {handleRegistrar();handleMostrarDatos();}} ></Boton_registrar>
                <button onClick={handleMostrarDatos}>MOSTRAR</button>
            </div>
        </main>
    )
}