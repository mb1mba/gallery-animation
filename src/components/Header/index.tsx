export default function Header({setCurrentLayout })
{
  return(
    <header className="fixed top-0 w-full px-5 z-[100] ">
      <ul className="flex justify-around items-center gap-4">
        <li onClick={() => setCurrentLayout(1)} className="cursor-pointer p-5">1</li>
        <li onClick={() => setCurrentLayout(2)} className="cursor-pointer p-5">2</li>
        <li onClick={() => setCurrentLayout(3)} className="cursor-pointer p-5">3</li>
      </ul>
    </header>
  )
}