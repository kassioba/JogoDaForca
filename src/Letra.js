export default function Letra({
  inicio,
  setInicio,
  disabled,
  setDisabled,
  sublinhado,
  setSublinhado,
  palavraArr,
  numeroImagem,
  setNumeroImagem,
  setClassePalavra,
  letras,
}) {
  console.log(palavraArr);

  return (
    <div className="letra">
      {letras.map((letra) => (
        <button
          key={letra}
          disabled={disabled.includes(letra)}
          className={inicio.includes(letra) ? "jogo-inicial" : "jogo-iniciado"}
          onClick={() => {
            setInicio([...inicio, letra]);
            setDisabled([...disabled, letra]);
            const salvarSublinhado = [...sublinhado];
            let a = numeroImagem;
            if (palavraArr.includes(letra)) {
              for (let i = 0; i < palavraArr.length; i++) {
                if (palavraArr[i] === letra) {
                  salvarSublinhado[i] = palavraArr[i];
                }
              }
              setSublinhado(salvarSublinhado);
            } else {
              a++;
            }

            console.log(salvarSublinhado.includes("_ "));
            if (salvarSublinhado.includes("_ ") === false) {
              setClassePalavra("palavra-ganhou");
              setInicio([...letras]);
              setDisabled([...letras]);
            } else if (a === 6) {
              setClassePalavra("palavra-perdeu");
              setSublinhado(palavraArr);
              setInicio([...letras]);
              setDisabled([...letras]);
            }
            setNumeroImagem(a);
          }}
        >
          {letra}
        </button>
      ))}
    </div>
  );
}
