import { ReactNode } from "react";

interface ConteudoProps {
    children: ReactNode;
    }

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className={`
            flex text-white flex-col            
            items-start flex-1 p-4
            text-3xl 
            bg-zinc-900
            `}>
            {props.children}
        </div>
    )
}