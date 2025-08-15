interface RodapeProps {
  rightSide: string;
  leftSide: string;
}

export default function Rodape(props: RodapeProps) {
  return (
    <div
      className={`
      flex justify-between items-center    
      h-16 text-sm bg-zinc-900 text-zinc-500
      px-8 border-t border-zinc-800
      `}
    >
      <span className="font-light">{props.rightSide}</span>
      <span className="font-bold">{props.leftSide}</span>
    </div>
  );
}
