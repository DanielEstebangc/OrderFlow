export default function inputs({placeholder,label,icon,value, onChange, name}){
    return(
        <div>
            <span>{icon}</span>
            <label htmlFor="nombre">{label}</label>
            <input
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}