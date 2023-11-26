import { ITarefa } from '../../../types/tarefa';

import '../../Lista/style.scss';

export default function Item ({tarefa, tempo, selecionado, completado, id}:ITarefa){
    console.log(tarefa, tempo, selecionado, completado, id);
    return (
        <li className="item" >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    );
}