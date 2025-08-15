import Pagina from "@/components/Pagina";

export default function Page() {
  return (
    <Pagina titulo="Minha Aplicação" subtitulo="Melhor app da Web!">
      <ul className="list-disc pl-8">
        <li>Ana</li>
        <li>Gustavo</li>
        <li>Maria</li>
        <li>João</li>
      </ul>
    </Pagina>
  );
}
