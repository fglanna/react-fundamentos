import { useState } from "react";
import Valor from "./valor";

export default function Botoes() {
  const [nome, setNome] = useState("");
  return (
    <div className="flex flex-col justify-between items-center gap-5 bg-green-800 p-4 rounded-md m-2">
      <div className="flex gap-5">
        <button
          className="botao hover:bg-purple-300 cursor-pointer"
          onClick={() => setNome("Maria")}
        >
          Maria
        </button>
        <button
          className="botao hover:bg-purple-300 cursor-pointer"
          onClick={() => setNome("João")}
        >
          João
        </button>
        <button
          className="botao hover:bg-purple-300 cursor-pointer"
          onClick={() => setNome("Pedro")}
        >
          Pedro
        </button>
      </div>
      <Valor texto={nome} />
    </div>
  );
}
