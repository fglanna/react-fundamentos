import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function PaginaCampoTexto() {
    const [valor, setValor] = useState('')

    return (
        <Pagina titulo="Campo de Texto" subtitulo="Capítulo Estado">
            <input type="text" placeholder="Digite aqui"
            className="campo"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            />
        </Pagina>
    )
}