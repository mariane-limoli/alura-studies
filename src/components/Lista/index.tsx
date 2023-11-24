import { ITarefa } from "../../types/tarefa";
import Item from "./Item";

import './style.scss';

function Lista({ tarefas }:{ tarefas:ITarefa[] }){
   
    return (
        <aside className="listaTarefas">
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                   <Item 
                   key={index}
                    {...item}
                   /> 
                ))}
            </ul>
        </aside>
    );
}

export default Lista;