import '../Relogio/style.scss';

interface Props {
    tempo: number | undefined;
 }

export function Relogio({ tempo = 0 }: Props) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutosDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    const [segundosDezena, segundoUnidade] = String(segundos).padStart(2, '0');
    return (
        <>
            <span className='relogioNumero'>{minutosDezena}</span>
            <span className='relogioNumero'>{minutoUnidade}</span>
            <span className='relogioDivisao'>:</span>
            <span className='relogioNumero'>{segundosDezena}</span>
            <span className='relogioNumero'>{segundoUnidade}</span>
        </>
        
    )
}