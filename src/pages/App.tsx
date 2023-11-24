import { useState } from 'react';

import { Cronometro } from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefa } from '../types/tarefa';

import "./App.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  return (
    <div className='AppStyle'>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
