import {useState} from "react";
import React from "react";
import Formulario from "./components/Formulario";
import Campo from "./components/Campo"
import Teclado from "./components/Teclado";

function App() {

  const [valor, setValor] = useState("");

  return (
    <div className="App">
      <Formulario valor={valor}/>
      <Teclado valor={valor} setValor={setValor}/>
      
    </div>
  );
}

export default App;
