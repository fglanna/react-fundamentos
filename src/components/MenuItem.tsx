import { ReactNode } from "react";
import Link from "next/link";

interface MenuItemProps {
  texto: string;
  url: string;
  icone: ReactNode;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link
      href={props.url}
        className={`
            flex items-center gap-2 
            px-4 py-2 cursor-pointer hover:bg-zinc-800
            text-base w-full rounded-md
        `}
    >   
      <span>{props.icone}</span>
      <span>{props.texto}</span>
    </Link>
  );
}
