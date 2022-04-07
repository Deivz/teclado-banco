import Botao from "../Botao"
import som from "../Botao/click.ogg";
import styles from "./teclado.module.css"

function Teclado({valor, setValor}){
    
    function tocarSom(){
        const audio = new Audio(som);
        audio.play()
    }

    function criarTeclasNumeros(){
        const teclasNumeros = []
        let resultado = "";
        for (let i = 1; i <= 9; i++){
            teclasNumeros.push(<Botao key={i} tecla={i} event={(e)=>{
                tocarSom();
                setValor(valor + e.target.innerHTML);
            }} />)
        }
        return teclasNumeros 
    }

    return(
        <div className={styles.tecladoContainer}>
            {criarTeclasNumeros()}
            <Botao tecla="&#129040;" event={(e)=>{
                if(valor > 0){
                    tocarSom();
                    setValor(valor.substring(0, valor.length - 1));
                }else{
                    setValor(valor = "")
                } 
            }} />
            <Botao tecla={0} event={(e)=>{
                if(valor > 0){
                    tocarSom();
                    setValor(valor + e.target.innerHTML);
                }else{
                    alert("Não pode haver 0 no início do valor")
                }   
            }} />
            <Botao tecla="Limpar" event={()=>{
                tocarSom();
                setValor(valor = "");
            }} />
            <Botao tecla="Sacar" event={tocarSom} />
            <Botao tecla="Dpositar" event={tocarSom} />
            <Botao tecla="Transferir" event={tocarSom} />
        </div>
    )
}

export default Teclado