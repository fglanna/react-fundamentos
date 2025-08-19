import Pagina from "@/components/Pagina";
import { IconBrandReact } from "@tabler/icons-react";

export default function Home() {
  return (
    
    <Pagina titulo="Fundamentos React" subtitulo="Bem vindo ao mundo do React!">
      <div className={`
            flex flex-col
            justify-center items-center
            h-full w-full text-zinc-500 
        `}>
            <IconBrandReact size={210} stroke={1.2} color="cyan" />
            <span className="font-black ">Curso Fundamentos do React</span>
            <span className="text-sm ">Aqui você vai aprender os fundamentos sólidos da biblioteca React</span>

      </div>
    </Pagina>
  )
}