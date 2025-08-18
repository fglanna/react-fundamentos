import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function PaginaCalculadora() {
    const [num1, setNum1] = useState(0)
    const [num2, setValor] = useState(0)

    return (
        <Pagina titulo="Calculadora" subtitulo="Capítulo Estado">
            <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                    <input type="number"
                    value={num1}
                    className="campo"
                    onChange={(e) => setNum1(Number(e.target.value))}
                
                    />
                    <input type="number"
                    value={num2}
                    className="campo"
                    onChange={(e) => setValor(+e.target.value)}
                
                    />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                
                    <span>{num1} + {num2} = {num1 + num2}</span>
                    <span>{num1} - {num2} = {num1 - num2}</span>
                    <span>{num1} * {num2} = {num1 * num2}</span>
                    <span>{num1} / {num2} = {num1 / num2}</span>                

            </div>        
            
            
    </Pagina>
    )
}