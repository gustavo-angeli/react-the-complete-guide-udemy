export default function Button({children, onClick}) {
  return <button className="p-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500" onClick={onClick}>{children}</button>
}