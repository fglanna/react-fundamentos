import { useState } from "react";
import Botoes from "./Botoes";

export default function Valor() {
  const [nome, setNome] = useState("Teste");

  function alterar(nome: string) {
    setNome(nome);
  }
  return (  // Botoes alterarNome={setNome} Chamando direto "setNome" também funciona
    <div className="flex flex-col gap-5 px-2">
      <span className="text-8xl font-black">{nome}</span>
      <Botoes alterarNome={alterar} />  
    </div>
  );
}
