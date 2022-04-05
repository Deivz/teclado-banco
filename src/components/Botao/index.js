import React from "react";
import som from "../Botao/click.ogg";

function tocaSom(){
    const audio = new Audio(som);
    audio.play()
}

function Botao({valor}){
    return(
        <>
            <button onClick={tocaSom}>
                {valor}
            </button>
        </>
    )
}

export default Botao;