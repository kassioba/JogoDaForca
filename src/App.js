import "./style.css";
import Letra from "./Letra";
import Jogo from "./Jogo";
import { useState } from "react";
import palavras from "./palavras.js";

const letras = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function App() {
  const [letraStyle, setLetraStyle] = useState([...letras]);
  const [disabled, setDisabled] = useState([...letras]);
  const [palavra, setPalavra] = useState();
  const [sublinhado, setSublinhado] = useState([]);
  const [palavraArr, setPalavraArr] = useState([]);
  const [numeroImagem, setNumeroImagem] = useState(0);
  const [classePalavra, setClassePalavra] = useState("palavra");
  let salvarPalavra;
  const montarSublinhado = [];
  const montarPalavraArr = [];

  function escolherPalavra() {
    const indexPalavra = Math.round(Math.random() * (palavras.length - 1));
    salvarPalavra = palavras[indexPalavra];
    setPalavra(palavras[indexPalavra]);
  }

  function comecarJogo() {
    setLetraStyle([]);
    setDisabled([]);
    escolherPalavra();
    setNumeroImagem(0);
    setClassePalavra("palavra");
    console.log(salvarPalavra);

    if (salvarPalavra !== undefined) {
      for (let i = 0; i < salvarPalavra.length; i++) {
        montarSublinhado.push("_ ");
        montarPalavraArr.push(salvarPalavra[i]);
      }
    }
    setSublinhado(montarSublinhado);
    setPalavraArr(montarPalavraArr);
    console.log(montarSublinhado);
    console.log(montarPalavraArr);
  }

  return (
    <div className="container">
      <Jogo
        comecar={comecarJogo}
        palavra={palavra}
        sublinhado={sublinhado}
        palavraArr={palavraArr}
        numeroImagem={numeroImagem}
        classePalavra={classePalavra}
      />
      <Letra
        inicio={letraStyle}
        setInicio={setLetraStyle}
        disabled={disabled}
        setDisabled={setDisabled}
        sublinhado={sublinhado}
        setSublinhado={setSublinhado}
        palavraArr={palavraArr}
        numeroImagem={numeroImagem}
        setNumeroImagem={setNumeroImagem}
        setClassePalavra={setClassePalavra}
        letras={letras}
      />
    </div>
  );
}

export default App;
