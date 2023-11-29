import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";

import './style.scss';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Formulario( {setTarefas}:Props){
    const [tarefa, setTarefa] = useState<string>('');
    const [tempo, setTempo] = useState<string>('00:00');
    function adicionarTarefa(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setTarefas(tarefasAntigas => [
            ...tarefasAntigas, 
            {
                tarefa,
                tempo,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }]);
            setTarefa('');
            setTempo('00:00');
    }

    return(
        <form className="novaTarefa" onSubmit={adicionarTarefa}>
        <div className="inputContainer">
            <label htmlFor="tarefa">Adicione um novo estudo</label>
            <input 
                type="text"
                name='tarefa'
                id='tarefa'
                value={tarefa}
                onChange={ e => setTarefa(e.target.value) }
                placeholder="O que você quer estudar?" 
                required
            />
        </div>
        <div className="inputContainer">
            <label htmlFor="tempo">Tempo</label>
            <input 
                type="time"
                step='1'
                name='tempo'
                value={tempo}
                onChange={e=> setTempo(e.target.value)}
                id='tempo'
                min='00:00:00'
                max='01:30:00' 
                required
            />
        </div>
        <Botao 
            texto="Adicionar"
            type="submit"
        />
    </form>
    )

}

export default Formulario;