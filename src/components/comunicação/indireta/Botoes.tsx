interface BotoesProps {
    alterarNome(nome: string): void;    // pode ser assim ou código abaixo
    //alterarNome: () => void;
}


export default function Botoes(props: BotoesProps) {
    return (
        <div className="flex gap-5 justify-between px-2">
            <button onClick={() => props.alterarNome('Maria')} className="botao hover:bg-purple-300 cursor-pointer">Maria</button>
            <button onClick={() => props.alterarNome('João')} className="botao hover:bg-purple-300 cursor-pointer">João</button>
            <button onClick={() => props.alterarNome('Pedro')} className="botao hover:bg-purple-300 cursor-pointer">Pedro</button>
        </div>
    )
}