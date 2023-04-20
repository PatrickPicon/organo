import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',
  },
  {
      id: uuidv4(),
      nome: 'Data Sciense',
      cor: '#A6D157',
  },
  {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69',
  },
  {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#D86EBF',
  },
  {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FEBA05',
  },
  {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
  }
]);

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCriado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador() {
    console.log('Deletando colaborador...')
  }

  function mudaCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorCriado(colaborador)} />
      
      {times.map(time => 
        <Time
          id={time.id}
          mudarCor={mudaCorDoTime}
          key={time.nome} 
          nome={time.nome} 
          cor={time.cor}  
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />
      )}
      
      <Rodape />
    </div>
    
  );
}

export default App;
