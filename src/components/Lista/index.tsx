import React from "react";

import Item from "./Item";

import './style.scss';

function Lista(){
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Java',
        tempo: '01:00:00'
    }, {
        tarefa: 'Python',
        tempo: '00:30:00'
    }
    ]
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