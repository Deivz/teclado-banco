import React from "react";

class Formulario extends React.Component{
    render(){
        return(
            <form name="form" className="form" id="form">
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
        )
    }
}

export default Formulario;