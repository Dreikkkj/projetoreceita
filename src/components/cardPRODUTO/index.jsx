export default function CardProduto({ receita }) {
  if (!receita) return null;

  return (
    <article>
      <img src={receita.image} alt={receita.name} />
      <h3>{receita.name}</h3>
      <p>{receita.cuisine}</p>
      <p>Dificuldade: {receita.difficulty}</p>
      <p>Tempo: {receita.prepTimeMinutes + receita.cookTimeMinutes} min</p>
      <ul>
        {receita.ingredients?.slice(0, 3).map((item, index) => (
          <li key={`${receita.id}-${index}`}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
