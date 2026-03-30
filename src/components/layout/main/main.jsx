import { useState } from "react";
import Inputs from "./componentes-seccion cliente/input_info_cliente"
import Boton_Agregar from "./componentes-seccion-productos/boton_agregar"
import Producto from "./componentes-seccion-productos/producto"
import Total_pedido from "./componentes-seccion-productos/Total_pedido";
import Boton_cancelar from "./components/boton_cancelar"
import Boton_registrar from  "./components/boton_registrar"
import { enviarCliente } from "../../../services/cliente_services/clienteService";
import "./main.css";
import PersonIcon from '@mui/icons-material/PersonOutlined';
import MailIcon from '@mui/icons-material/MailOutlined';
import CallIcon from '@mui/icons-material/CallOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';





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

    const [productos, setProductos] = useState([]);

    const handleAgregarProducto = () => {
        setProductos(prev => [
            ...prev,
            {
            id: crypto.randomUUID(),
            nombre: "",
            cantidad: 0,
            precio: 0
            }
        ]);
        };

   const handleRegistrar = async () => {
    try {

        const pedidoCompleto = {
            cliente,
            productos
        };

        console.log("Enviando al backend:", pedidoCompleto);

        const respuesta = await enviarCliente(pedidoCompleto);

        console.log("Respuesta del backend:", respuesta);

    } catch (error) {
        console.error("Error registrando pedido:", error);
    }
};

    const handleCancelar = () => {
        setCliente({
            nombre: "",
            telefono: "",
            correo: ""
        });

        setProductos([]);
    };

    const handleEliminarProducto = (id) => {
    setProductos(prev => prev.filter(p => p.id !== id));
    };


    const handleActualizarProducto = (id, cambios) => {
    setProductos(prev =>
        prev.map(p =>
        p.id === id ? { ...p, ...cambios } : p
        )
    );
    };

   const total = productos.reduce((acc, producto) => {
        const cantidad = Number(producto.cantidad) || 0;
        const precio = Number(producto.precio) || 0;

        return acc + (cantidad * precio);
    }, 0);

    console.log("ESTADO PRODUCTOS:", JSON.stringify(productos, null, 2));

    


    console.log("RENDER MAIN", productos);
    return(
        <main className="main">
            <section>

                <div className="Contenedor_titulo">
                    <span><PersonIcon sx={{ fontSize: 50, color: '#2563eb' }}/></span>
                    <h2>Información del Cliente</h2> 
                </div>
                
                <div className="Contenedor_inputs">
                 <Inputs
                    name="nombre"
                    label="Nombre completo"
                    placeholder="EJ. Daniel Galvis"
                    value={cliente.nombre}
                    onChange={handleChange}
                />

                <Inputs
                    name="telefono"
                    label="Teléfono"
                    placeholder="+57 300 123 4567"
                    icon={<CallIcon sx={{ fontSize: 20, color: '#000000' }} />}
                    value={cliente.telefono}
                    onChange={handleChange}
                />

                <Inputs
                    name="correo"
                    label="Correo"
                    placeholder="Ingresa tu correo"
                    icon={<MailIcon sx={{ fontSize: 20, color: '#000000' }} />}
                    value={cliente.correo}
                    onChange={handleChange}
                    type="email"
                    required
                />
                </div>
            </section>

            <section>
                <div className="Contenedor_titulo_producto">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span>
                            <ShoppingCartIcon sx={{ fontSize: 50, color: '#2563eb' }} />
                        </span>
                        <h2>Productos</h2> 
                    </div>
                    <Boton_Agregar onClick={handleAgregarProducto}></Boton_Agregar>
                </div>

                <div>
                   {productos.map((p) => (
                    <Producto
                        key={p.id}
                        producto={p}
                        onChange={(cambios) => handleActualizarProducto(p.id, cambios)}
                        onEliminar={() => handleEliminarProducto(p.id)}
                    />
                ))}
                </div>

                <Total_pedido total={total} key={total} />            
            </section>

            <div className="contenedor_acciones_pedido">                
                <Boton_cancelar onClick={handleCancelar}/>
                <Boton_registrar onClick={() => {handleRegistrar();handleMostrarDatos();}} ></Boton_registrar>
                {/* <button onClick={handleMostrarDatos}>MOSTRAR</button> */}
            </div>
        </main>
    )
}