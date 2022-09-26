import palavras from "./palavras"
import React, { useState } from "react"
import imagem0 from "./img/forca0.png"



function Alfabeto(props) {
    return (
        <li className="letra">{props.index}</li>
    )
}
        
function Selecionar(props) {
    return (
        console.log(props.index)
    )
}

function Sortear() {

}


export default function App() {

    const listaAlfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  
    return (
        <>  
            <div>
                <div className="centro"> 
                    <div>
                        <img src="imagem0" />
                    </div>
                    <div>
                        <button>Sortear Palavra</button>
                        <div className="traco">a</div>
                    </div>
                </div>
                <div className="baralho" >
                    <button onClick={Selecionar}>
                        {listaAlfabeto.map((letra, index) => <Alfabeto index={letra} key={index} />)}
                    </button>
                </div>
                <div className="final">
                    <p>Já sei a palavra!</p>
                    <input type="text" placeholder="" />
                    <button> Chutar </button>
                </div>
            </div>
        </>
    )
}
