import { ReactNode } from "react";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";
import AreaLateral from "./AreaLateral";

interface PaginaProps {
    children: ReactNode;
    titulo: string;
    subtitulo: string;
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className={`flex h-screen`}>
            <AreaLateral />
            <div className="flex flex-col flex-1">
                <Cabecalho
                
                    titulo={props.titulo}
                    subtitulo={props.subtitulo}
                    className="h-16 bg-zinc-800"
                />
                <Conteudo>
                    {props.children}
                </Conteudo>
                <Rodape 
                    rightSide="Minha primeira página feita com ❤️ usando react"
                    leftSide={`Copyright © ${new Date().getFullYear()} - Todos os direitos reservados`}
                />
            </div>
        </div>
    )
}
