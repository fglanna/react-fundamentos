import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center font-black text-cyan-300 px-5 gap-2.5 h-16 bg-purple-700">
        <span><IconBrandReact size={65} stroke={1.2} color="cyan" /></span>
        <span className="text-2xl">React</span>
    </Link>
    )
}
