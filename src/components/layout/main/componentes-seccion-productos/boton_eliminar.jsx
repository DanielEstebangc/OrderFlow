export default function boton_eliminar({icono, onClick }){
    return(
        <button onClick={onClick} >{icono}</button>
    )
}