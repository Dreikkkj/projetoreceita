import "./produto.css";
export default function CardProduto({ receita }) {
  if (!receita) return null;

  return (
    <article className="card-produto">
      <img src={receita.image} alt={receita.name} />
      
     
      <div className="conteudo-card">
        <h3>{receita.name}</h3>
        <p>{receita.cuisine}</p>
        <p>Dificuldade: {receita.difficulty}</p>
        <p>Tempo: {receita.prepTimeMinutes + (receita.cookTimeMinutes || 0)} min</p>
        <ul>
          {receita.ingredients?.slice(0, 3).map((item, index) => (
            <li key={`${receita.id}-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}