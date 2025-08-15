import "../app/globals.css";
import Pagina from "@/components/Pagina";

export default function TestePagina() {

  function executar() {
    console.log('O botão foi clicado!')
  }

  return (
    <Pagina titulo="Minha Página" subtitulo="Estou na pasta pages">
      <button onClick={executar} className="bg-blue-500 p-2 rounded-md hover:bg-blue-400 cursor-pointer">
        Teste
      </button>
    </Pagina>
  );
}
