import Cabecalho from "@/components/Cabecalho";
import "../app/globals.css";
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape";

export default function Pagina() {
  return (
    <div
      className={`
        flex flex-col h-screen p-5 gap-5
        bg-black text-white
        `}
    >
      <Cabecalho
             titulo="Minha Página" 
             subtitulo="Estou na pasta pages"
        />
        <Conteudo />
        <Rodape />
    </div>
  );
}
