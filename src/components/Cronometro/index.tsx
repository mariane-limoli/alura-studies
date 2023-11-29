import Botao from "../Botao";
import { Relogio } from "./Relogio";
import { tempoParaSegundos } from "../../common/utils/time";

import '../Cronometro/style.scss';
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";
interface Props {
    selecionado: ITarefa | undefined;
}
export function Cronometro({ selecionado }:Props) {
    const [tempo, setTempo] = useState<number>();
    useEffect(() => {
        if (selecionado?.tempo) {
           setTempo(tempoParaSegundos(String(selecionado?.tempo)));  
        } 
    }, [selecionado])
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