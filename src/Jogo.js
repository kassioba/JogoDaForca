export default function Jogo({
  comecar,
  palavra,
  sublinhado,
  numeroImagem,
  classePalavra,
}) {
  return (
    <div className="jogo">
      <img src={`./assets/forca${numeroImagem}.png`} alt="" />
      <button onClick={comecar}>Escolher Palavra</button>
      <div className={classePalavra}>{sublinhado}</div>
    </div>
  );
}
