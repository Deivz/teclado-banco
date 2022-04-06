import React from "react";
import Botao from "../Botao";
import styles from "./teclado.module.css";
import som from "../Botao/click.ogg";

function inserirValor(evento){
    console.log(evento.target.innerText);
}

function tocarSom(){
    const audio = new Audio(som);
    audio.play()
}

function preencherTeclado(){
    let teclasNumero = [];
    for (let i = 0; i <= 9; i++){
        teclasNumero[i] = <Botao event={(evento)=>{
            tocarSom();
            inserirValor(evento);
        }} valor = {i} />;
    }
    return teclasNumero
}

function Teclado(){

    return(
        <section className= {styles.tecladoContainer}>
            {preencherTeclado()}
            <Botao event={tocarSom} valor = "&#129040;" />
            <Botao event={tocarSom} valor = "Limpar" />
            <Botao event={tocarSom} valor = "Sacar" />
            <Botao event={tocarSom} valor = "Depositar" />
            <Botao event={tocarSom} valor = "Transferir" />
        </section>
    )
}

export default Teclado;