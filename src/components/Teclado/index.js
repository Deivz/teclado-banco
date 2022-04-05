import React from "react";
import Botao from "../Botao";

function Teclado(){
    let teclasNumero = [];
    for (let i = 0; i <= 9; i++){
        teclasNumero[i] = <Botao valor = {i} />;
    }
    return(
        <section>
            {teclasNumero}
            <Botao valor = "Limpar" />
            <Botao valor = "&#129040;" />
            <Botao valor = "Sacar" />
            <Botao valor = "Depositar" />
            <Botao valor = "Transferir" />
        </section>
    )
}

export default Teclado;