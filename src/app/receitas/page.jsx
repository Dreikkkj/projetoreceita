"use client";
import { useEffect, useState } from "react";
import CardProduto from "@/components/cardPRODUTO";

export default function ReceitasPage() {
  const [listaReceitas, setListaReceitas] = useState([]);
  const [msgErro, setMsgErro] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setListaReceitas(data.recipes || []);
        setMsgErro("");
      })
      .catch((error) => setMsgErro(error.message));
  }, []);

  return (
    <main>
      <h1>Receitas</h1>

      {msgErro && <p>ERRO: {msgErro}</p>}

      {listaReceitas.length > 0 ? (
        <div>
          {listaReceitas.map((receita, index) => (
            <CardProduto key={receita.id || index} receita={receita} />
          ))}
        </div>
      ) : (
        <div>
          <p>Sem nenhuma receita por enquanto...</p>
        </div>
      )}
    </main>
  );
}