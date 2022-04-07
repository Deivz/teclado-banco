import styles from "./botao.module.css"

function Botao({event, tecla}){
    return(
        <button className = {styles.botao} onClick={event}>{tecla}</button>
    )
}

export default Botao