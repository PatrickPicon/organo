import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({mudarCor, nome, cor, colaboradores, aoDeletar, id}) => {
    return (
       (colaboradores.length > 0) && <section className='time' style={{backgroundColor: hexToRgba(cor, '0.6')}}>
            <input type='color' className='input-cor' value={cor} onChange={evento => mudarCor(evento.target.value, id)}/>
            <h3 style={{borderColor: cor}}>{nome}</h3>
            <div className='colaboradores'>
               {colaboradores.map( colaborador => {
                return <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={cor} aoDeletar={aoDeletar}/>
               } )} 
            </div>
        </section>
    )
}

export default Time