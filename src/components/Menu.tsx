import { IconBraces, IconBrandJavascript, IconCode, IconFileCheck, IconFunction, IconH1, IconSitemap } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div className={`
            flex flex-col justify-start
             w-72 
            text-3xl gap-2 p-2
        
        `}        >
            
            <span className="text-sm text-zinc-400 pl-3 pt-4">Fundamentos</span>
                <MenuItem icone={<IconCode />} texto="Componete sem Estado" url="/" />


            <span className="text-sm text-zinc-400 pl-3 pt-4">Fundamentos</span>
                <MenuItem icone={<IconBraces />} texto="JSX com JS" url="/fundamentos/soma" />
                <MenuItem icone={<IconFunction />} texto="JSX: Chamando Funções" url="/fundamentos/funcoes" />
                <MenuItem icone={<IconFileCheck />} texto="Página #1" url="/fundamentos/pagina" />
                <MenuItem icone={<IconSitemap />} texto="Página #2" url="/pagina" />
            
            <span className="text-sm text-zinc-400 pl-3 pt-4">Componentes</span>
                <MenuItem icone={<IconCode />} texto="Componente Básico" url="/componente/basico" />
                <MenuItem icone={<IconH1 />} texto="Componente Título" url="/componente/titulo" />
                <MenuItem icone={<IconBrandJavascript />} texto="JS com JSX" url="/componente/trecho" />            
            
        </div>
    )
}