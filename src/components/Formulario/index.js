import Campo from "../Campo"
import styles from "./formulario.module.css"

function Formulario({valor}){
    return(
        <form name="form" className={styles.form} id="form">
            <fieldset className={styles.fs}>
                <legend>Informações bancárias</legend>
                <div className={styles.separador}>
                    <label htmlFor="conta_origem" className="form__itens">Conta origem</label>
                    <input type="text" name="cliente" id="conta_origem" className="form__itens" required placeholder="Conta origem" maxLength="10"></input>
                </div>
                <div className={styles.separador}>
                    <label htmlFor="conta_destino" className="form__itens">Conta destino</label>
                    <input type="text" name="cliente" id="conta_destino" className="form__itens" required placeholder="Conta destino" maxLength="10"></input>
                </div>
                <div className={styles.separador}>
                    <label htmlFor="valor" className="form__itens valor">Valor</label>
                    <Campo quantia={valor}/>
                </div>   
            </fieldset>	
        </form>
    )
}

export default Formulario


            
