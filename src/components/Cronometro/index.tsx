import { useEffect, useState } from "react";

import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import { Relogio } from "./Relogio";

import '../Cronometro/style.scss';

interface Props {
    selecionado: ITarefa | undefined;
    finalizaTarefa: () => void;
}
export function Cronometro({ selecionado, finalizaTarefa }:Props) {
    const [tempo, setTempo] = useState<number>();
    useEffect(() => {
        if (selecionado?.tempo) {
           setTempo(tempoParaSegundos(String(selecionado?.tempo)));  
        } 
    }, [selecionado])

    function regressiva(contador:number =0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizaTarefa();
        }, 1000);
    }

    return (
        <div className="cronometro">
            <p className="titulo">Escolha um card e inicie o cronômetro</p>
            <div className="relogioWrapper">
                <Relogio tempo ={tempo}/>
            </div>
            <Botao 
                onClick={() => {regressiva(tempo)}}
                texto="Começar" />
        </div>
    )
}