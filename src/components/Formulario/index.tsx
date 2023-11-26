import React from "react";
import { v4 as uuidv4 } from "uuid";

import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";

import './style.scss';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}>{
    state = {
        tarefa: '',
        tempo: '00:00'
    }

    adicionarTarefa(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        this.props.setTarefas(tarefasAntigas => [
            ...tarefasAntigas, 
            {
                ...this.state ,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }]);
        console.log(this.state);
        this.setState({
            tarefa: '',
            tempo: '00:00'
        });
    }


    
    render(){
        return(
            <form className="novaTarefa" onSubmit={this.adicionarTarefa.bind(this)}>
                <div className="inputContainer">
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input 
                        type="text"
                        name='tarefa'
                        id='tarefa'
                        value={this.state.tarefa}
                        onChange={e=>this.setState({...this.state, tarefa: e.target.value})}
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
                        value={this.state.tempo}
                        onChange={e=>this.setState({...this.state, tempo: e.target.value})}
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
}

export default Formulario;