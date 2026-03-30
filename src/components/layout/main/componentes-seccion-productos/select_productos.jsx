import "./Select_productos.css";


export default function SelectComidas({ onSelect }) {
  const comidas = [
    { id: 1, nombre: "Hamburguesa", precio: 10 },
    { id: 2, nombre: "Pizza", precio: 12 },
    { id: 3, nombre: "Perro caliente", precio: 8 },
    { id: 4, nombre: "Sushi", precio: 15 },
    { id: 5, nombre: "Tacos", precio: 9 },
    { id: 6, nombre: "Ensalada", precio: 7 }
  ];

   const handleChange = (e) => {
    const idSeleccionado = Number(e.target.value);

    const productoSeleccionado = comidas.find(
      (comida) => comida.id === idSeleccionado
    );

    if (productoSeleccionado) {
      onSelect({
        ...productoSeleccionado,
        precio: Number(productoSeleccionado.precio)
      });
    } 
  };

   return (
  <div className="producto_item_select"> {/* Clase para el contenedor en columna */}
    <label>Comida</label>
    <select 
      className="select-productos-input" // <--- Clase para el diseño redondeado
      defaultValue="" 
      onChange={handleChange}
    >
      <option value="" disabled>Selecciona una comida</option>
      {comidas.map((comida) => (
        <option key={comida.id} value={comida.id}>
          {comida.nombre}
        </option>
      ))}
    </select>
  </div>
);
}
