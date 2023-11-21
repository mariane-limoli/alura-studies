import Botao from "../Botao";
import { Relogio } from "./Relogio";

import '../Cronometro/style.scss';

export function Cronometro() {
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