"use client";
import { useEffect, useState } from "react";

export default function Receitas() {

  const [listaReceitas, setListaReceitas] = useState([]);
  const [msgErro, setMsgErro] = useState("");

  useEffect(() => {
  fetch("https://dummyjson.com/recipes/?results=10")
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setListaReceitas(data.recipes);
      setMsgErro("");
    })
    .catch(error => setMsgErro(error.message));
}, []);
}
