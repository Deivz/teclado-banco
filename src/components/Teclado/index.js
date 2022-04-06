import React from "react";
import Botao from "../Botao";
import styles from "./teclado.module.css";

function preencherTeclado(){
    let teclasNumero = [];
    for (let i = 0; i <= 9; i++){
        teclasNumero[i] = <Botao className="botao" valor = {i} />;
    }
    return teclasNumero
}

function Teclado(){

    return(
        <section className= {styles.tecladoContainer}>
            {preencherTeclado()}
            <Botao valor = "&#129040;" />
            <Botao valor = "Limpar" />
            <Botao valor = "Sacar" />
            <Botao valor = "Depositar" />
            <Botao valor = "Transferir" />
        </section>
    )
}

export default Teclado;