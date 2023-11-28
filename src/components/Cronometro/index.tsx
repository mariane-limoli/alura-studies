import Botao from "../Botao";
import { Relogio } from "./Relogio";
import { tempoParaSegundos } from "../../common/utils/time";

import '../Cronometro/style.scss';
import { ITarefa } from "../../types/tarefa";
import { useState } from "react";
interface Props {
    selecionado: ITarefa | undefined;
}
export function Cronometro({ selecionado }:Props) {
    const [tempo, setTempo] = useState<number>();
    if(selecionado?.tempo){
        setTempo(tempoParaSegundos(selecionado.tempo));
    }
    return (
        <div className="cronometro">
            <p className="titulo">Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className="relogioWrapper">
                <Relogio />
            </div>
            <Botao texto="Começar" />
        </div>
    )
}