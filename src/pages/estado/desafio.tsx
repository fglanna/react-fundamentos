import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function DesafioIncreDecremento() {
  const [numero, setNumero] = useState(0);

  function incrementar() {
    setNumero(numero + 1);
  }

  function decrementar() {
    setNumero(numero - 1);
  }

  return (
    <Pagina titulo="Desafio" subtitulo="Incrementar/Decrementar">
      <div className="flex flex-col justify-center items-center w-full h-full gap-8">
      <button onClick={incrementar} className="bg-blue-500 p-1.5 rounded-md hover:bg-blue-600 cursor-pointer">Incrementar</button>
          
            <div className="gap-10 flex justify-center items-center">
                <span>Valor + : </span>
                <span>{numero}</span>
            </div>
          
          
      <button onClick={decrementar} className="bg-green-500 p-1.5 rounded-md hover:bg-green-600 cursor-pointer">Decrementar</button>
            
            <div className="gap-10 flex justify-center items-center">
                <span>Valor - : </span>
                <span>{numero}</span>
            </div>
          
      </div>
          
    </Pagina>
  );
}
