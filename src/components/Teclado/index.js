import React, { useState } from "react";
import Botao from "../Botao";
import styles from "./teclado.module.css";
import som from "../Botao/click.ogg";

function Teclado(){
    
    function tocarSom(){
        const audio = new Audio(som);
        audio.play()
    }

    function preencherNumeros(){
        let teclasNumero = [];
        for (let i = 1; i <= 9; i++){
            teclasNumero[i] = <Botao key={i} event={(e)=>{
                tocarSom();
                setValor(valor + e.target.innerText);
            }} valor = {i} />;
        }
        return teclasNumero
    }

    const campoValor = document.querySelector("#valor");
    const [valor, setValor] = useState("");
       
    return(
        <section className = {styles.tecladoContainer}>
            {preencherNumeros()}
            <Botao event={() => {
                tocarSom();
                setValor(valor.substring(0, valor.length - 1));            
            }} valor = "&#129040;" />
            <Botao event={(e) => {
                tocarSom();
                if (valor > 0){
                    setValor(valor + e.target.innerText);
                }
            }} valor = {0} />
            <Botao event={tocarSom} valor = "Limpar" />
            <Botao event={tocarSom} valor = "Sacar" />
            <Botao event={tocarSom} valor = "Depositar" />
            <Botao event={tocarSom} valor = "Transferir" />
            {valor && (<div className = {styles.invisivel}>{campoValor.value = valor}</div>)}
        </section>
    )
}

export default Teclado;