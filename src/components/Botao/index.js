import React from "react";
import som from "../Botao/click.ogg";
import styles from "./botao.module.css"

function tocaSom(){
    const audio = new Audio(som);
    audio.play()
}

function Botao({valor}){
    return(
        <>
            <button onClick={tocaSom} className={styles.botao}>
                {valor}
            </button>
        </>
    )
}

export default Botao;