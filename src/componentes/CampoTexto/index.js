import './CampoTexto.css'

const CampoTexto = ({obrigatorio, label, placeholder, valor, aoAlterado}) => {

    
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholder}/>
        </div>
        
    )
}

export default CampoTexto