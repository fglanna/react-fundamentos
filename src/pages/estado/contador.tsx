import Pagina from "@/components/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import "../../app/globals.css";

export default function PaginaContador() {
    const [num, setNum] = useState(0);

    function incrementar() {
        setNum(num + 1);
    }

    function decrementar() {
        setNum(num - 1);
    }

    return (
        <Pagina titulo="Contador" subtitulo="Capítulo Estado">
            <div className="flex flex-col gap-5 justify-center items-center w-full h-full">
                <div className="text-7xl font-black">{num}</div>
                <div className="gap-5 flex justify-center items-center">
                    <button onClick={incrementar} className="bg-blue-500 rounded-full p-4">
                        <IconPlus size={30} stroke={3}/>
                    </button>
                    <button onClick={decrementar} className="bg-red-500 rounded-full p-4">
                        <IconMinus size={30} stroke={3} />
                    </button>
                </div>
                
            </div>
        </Pagina>


                
    )

}