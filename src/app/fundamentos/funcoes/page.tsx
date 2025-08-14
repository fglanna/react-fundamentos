export default function Page() {
  function renderizarTitulo() {
    return (
      <div>
        <h1>Título</h1>
        <h2>Subtítulo</h2>
      </div>
    );
  }

  function renderizarConteudo() {
    return (
      <ul>
        <li>Ana</li>
        <li>Carlos</li>
        <li>Maria</li>
      </ul>
    );
  }

  return (
    <div>
      {renderizarTitulo()}
      <hr />
      {renderizarConteudo()}
    </div>
  );
}
