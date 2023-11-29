import { useEffect, useState } from "react";

import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import { Relogio } from "./Relogio";

import '../Cronometro/style.scss';

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
            <div className="relogioWrapper">
                <Relogio tempo ={tempo}/>
            </div>
            <Botao texto="Começar" />
        </div>
    )
}