export default function Jogo({
  comecar,
  palavra,
  sublinhado,
  numeroImagem,
  classePalavra,
}) {
  return (
    <div className="jogo">
      <img
        src={`./assets/forca${numeroImagem}.png`}
        alt=""
        data-test="game-image"
      />
      <button onClick={comecar} data-test="choose-word">
        Escolher Palavra
      </button>
      <div className={classePalavra} data-test="word">
        {sublinhado}
      </div>
    </div>
  );
}
