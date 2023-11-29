import React from "react";

import './style.scss';

class Botao extends React.Component<{
    texto:string
    type?: 'button' | 'submit' | 'reset' | undefined
    onClick?: () => void
}> {
   render(){
    const {type = 'button', onClick} = this.props;
    return (
        <button 
            onClick={onClick} 
            type={type} 
            className="botao">
                {this.props.texto}
        </button>
    )
   }
}
export default Botao;