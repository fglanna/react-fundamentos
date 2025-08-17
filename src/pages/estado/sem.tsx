import Pagina from "@/components/Pagina";

export default function PaginaComEstado() {
  let numero = 0;

    function incrementar() {
        numero += 1
        console.log(numero);
    }

  return (
    <Pagina titulo="Com Estado" subtitulo="Capítulo Estado">
      <div className="flex flex-col">
          <div>
              <span>Valor : </span>
              <span>{numero}</span>
          </div>
          <button onClick={incrementar} className="bg-blue-500 p-1.5 rounded-md hover:bg-blue-600 cursor-pointer">Incrementar</button>
      </div>
    </Pagina>
  );
}
