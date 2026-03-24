import "./Boton_eliminar.css";

export default function boton_eliminar({icono, onClick }){
    return(
        <button className="btn-eliminar-container" onClick={onClick} >
            {icono}
        </button>
    )
}