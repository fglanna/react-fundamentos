import Pagina from "@/components/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function PaginaContador() {
  const [num, setNum] = useState(0);
  const [delta, setDelta] = useState(1);

  function incrementarDelta() {
    setDelta(delta + 1);
  }

  function decrementarDelta() {
    setDelta(delta - 1);
  }

  function incrementar() {
    setNum(num + delta);
  }

  function decrementar() {
    setNum(num - delta);
  }

  return (
    <Pagina titulo="Contador" subtitulo="Capítulo Estado">
      <div className="flex flex-col gap-5 justify-center items-center w-full h-full">
        <div className="text-7xl font-black">{num}</div>
        <div className="gap-5 flex justify-center items-center">
          <button
            onClick={incrementar}
            className="bg-blue-500 rounded-full p-4 hover:bg-blue-600 cursor-pointer" 
          >
            <IconPlus size={30} stroke={3} />
          </button>
          <button onClick={decrementar} className="bg-red-700 rounded-full p-4 hover:bg-red-800 cursor-pointer">
            <IconMinus size={30} stroke={3} />
          </button>
        </div>
        <div className="gap-6 flex justify-center items-center">
          <button
            onClick={incrementarDelta}
            className="bg-green-500 rounded-full p-3 hover:bg-green-600 cursor-pointer"
          >
            <IconPlus size={16} stroke={3} />
          </button>
          <span>{delta}</span>
          <button
            onClick={decrementarDelta}
            className="bg-purple-700 rounded-full p-3 hover:bg-purple-800 cursor-pointer"
          >
            <IconMinus size={16} stroke={3} />
          </button>
        </div>
      </div>
    </Pagina>
  );
}
