// import som from "../Botao/click.ogg";
import styles from "./botao.module.css"

function Botao({event, valor}){
    return(
        <>
            <button onClick={event} className={styles.botao}>
                {valor}
            </button>
        </>
    )
}

export default Botao;