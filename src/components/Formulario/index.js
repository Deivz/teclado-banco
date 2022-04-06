import React from "react";
import Teclado from "../Teclado";
import styles from "./formulario.module.css"

function Formulario(){
    return(
        <div>
            <form name="form" className={styles.form} id="form">
                <fieldset className="primeira-fieldset">
                    <legend>Informações bancárias</legend>
                        <label forHtml="conta_origem" className="form__itens">Conta origem</label>
                        <input type="text" name="cliente" id="conta_origem" className="form__itens" required placeholder="Conta origem" maxlength="10"></input>
                        <label forHtml="conta_destino" className="form__itens">Conta destino</label>
                        <input type="text" name="cliente" id="conta_destino" className="form__itens" required placeholder="Conta destino" maxlength="10"></input>
                        <label forHtml="valor" className="form__itens valor">Valor</label>
                        <input type="text" name="cliente" id="valor" className="form__itens" required placeholder="Valor em R$" maxlength="10" readonly></input>
                </fieldset>	
            </form>
            <section>
                <Teclado />
            </section>
        </div>
    )
}

export default Formulario;