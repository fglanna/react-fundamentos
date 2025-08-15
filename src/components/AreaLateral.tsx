import Logo from "./Logo";
import Menu from "./Menu";

export default function AreaLateral() {
  return (
    <div className="flex flex-col bg-black text-zinc-400 gap-5">
      <Logo />
      <Menu />
    </div>
  )
}
