import Botao from "../Botao";
import { Relogio } from "./Relogio";
import { tempoParaSegundos } from "../../common/utils/date";

import '../Cronometro/style.scss';

export function Cronometro() {
    console.log(tempoParaSegundos("00:00:10"));
    return (
        <div className="cronometro">
            <p className="titulo">Escolha um card e inicie o cronômetro</p>
            <div className="relogioWrapper">
                <Relogio />
            </div>
            <Botao texto="Começar" />
        </div>
    )
}