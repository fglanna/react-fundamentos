import {
  IconBraces,
  IconBrandJavascript,
  IconCode,
  IconFileCheck,
  IconFunction,
  IconH1,
  IconNumbers,
  IconPlusMinus,
  IconRosette,
  IconRosetteFilled,
  IconSitemap,
  IconForms,
  IconCalculator,
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div
      className={`
            flex flex-col justify-start
             w-72 
            text-3xl gap-2 p-2
        
        `}
    >
      <span className="text-sm text-zinc-400 pl-3 pt-4">Estado</span>
      <MenuItem
        icone={<IconRosette />}
        texto="Componente sem Estado"
        url="/estado/sem"
      />
      <MenuItem
        icone={<IconRosetteFilled />}
        texto="Componente Com Estado"
        url="/estado/com"
      />
      <MenuItem
        icone={<IconPlusMinus />}
        texto="Desafio: Incrementar/Decrementar"
        url="/estado/desafio"
      />
      <MenuItem
        icone={<IconNumbers />}
        texto="Contador"
        url="/estado/contador"
      />
      <MenuItem
        icone={<IconForms />}
        texto="Campo de Texto"
        url="/estado/campoTexto"
      />
      <MenuItem
        icone={<IconCalculator />}
        texto="Calculadora"
        url="/estado/calculadora"
      />

      <span className="text-sm text-zinc-400 pl-3 pt-4">Fundamentos</span>
      <MenuItem
        icone={<IconBraces />}
        texto="JSX com JS"
        url="/fundamentos/soma"
      />
      <MenuItem
        icone={<IconFunction />}
        texto="JSX: Chamando Funções"
        url="/fundamentos/funcoes"
      />
      <MenuItem
        icone={<IconFileCheck />}
        texto="Página #1"
        url="/fundamentos/pagina"
      />
      <MenuItem icone={<IconSitemap />} texto="Página #2" url="/pagina" />

      <span className="text-sm text-zinc-400 pl-3 pt-4">Componentes</span>
      <MenuItem
        icone={<IconCode />}
        texto="Componente Básico"
        url="/componente/basico"
      />
      <MenuItem
        icone={<IconH1 />}
        texto="Componente Título"
        url="/componente/titulo"
      />
      <MenuItem
        icone={<IconBrandJavascript />}
        texto="JS com JSX"
        url="/componente/trecho"
      />
    </div>
  );
}
