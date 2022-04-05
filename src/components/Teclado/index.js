import React from "react";
import Botao from "../Botao";

function Teclado(){
    let teclasNumero = [];
    for (let i = 0; i <= 9; i++){
        teclasNumero[i] = <Botao valor = {i} />;
    }
    return(
        <div>
            {teclasNumero}
            <Botao valor = "Limpar" />
            <Botao valor = "&#129040;" />
            <Botao valor = "Sacar" />
            <Botao valor = "Depositar" />
            <Botao valor = "Transferir" />
        </div>
    )
}

export default Teclado;