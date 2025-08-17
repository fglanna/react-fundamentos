import { useState } from "react";
import Pagina from "@/components/Pagina";


export default function PaginaComEstado() {
  const [numero, setNumero] = useState(0);
  
    function incrementar() {
        setNumero(numero + 1);
    }

    return (
      <Pagina titulo="Com Estado" subtitulo="Capítulo Estado">
        <div className="flex flex-col">
            <div>
                <span>Valor : </span>
                <span>{numero}</span>
            </div>
            <button onClick={incrementar} className="bg-emerald-500 p-1.5 rounded-md hover:bg-emerald-700 cursor-pointer">Incrementar</button>
        </div>
      </Pagina>
  );
}
