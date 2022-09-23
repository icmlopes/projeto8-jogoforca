import palavras from "./palavras"




function Alfabeto(props) {

    return (
        <li className="letra">{props.index}</li>
    )

}



export default function App() {



    const listaAlfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    return (
        <div>
            <div>
                <div className="centro">
                    <div>
                        <img src="./assets/forca0.png" />
                    </div>
                    <div>
                        <button>Sortear Palavra</button>
                        <div className="traco">a</div>
                    </div>
                </div>
                <ul className="baralho">
                    {listaAlfabeto.map((letra) => <Alfabeto index={letra} />)}
                </ul>

                <div className="final">
                    <p>Já sei a palavra!</p>
                    <input type="text" placeholder="" />
                    <button> Chutar </button>
                </div>
            </div>
        </div>
    )
}
