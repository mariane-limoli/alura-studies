import { ITarefa } from '../../../types/tarefa';

import '../../Lista/style.scss';

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item (
    {
        tarefa,
         tempo, 
         selecionado, 
         completado, 
         id, 
         selecionaTarefa
        }:Props){
    console.log(tarefa, tempo, selecionado, completado, id);
    return (
        <li 
        className="item" 
        onClick={()=> selecionaTarefa(
        {
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    );
}