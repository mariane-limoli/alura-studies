import { ITarefa } from '../../../types/tarefa';

import '../../Lista/Item/item.scss';

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
            className={`${'item'} ${selecionado ? "itemSelecionado" : ""} ${completado ? "itemCompletado": ""} `}
            onClick={()=> !completado && selecionaTarefa(
            {
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            
            })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className='concluido'aria-label='tarefa-completado' ></span>}
        </li>
    );
}