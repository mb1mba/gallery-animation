export default function Header({setCurrentLayout, setPrevLayout, currentLayout })
{
  return(
    <header className="fixed top-0 w-full px-5 z-[100] ">
      <ul className="flex justify-around items-center gap-4">
        <li onClick={() => {
          setPrevLayout(currentLayout)
          setCurrentLayout(1)
        }}
        className={`cursor-pointer p-5 hover:text-gray-400 ${currentLayout === 1 && "italic"}`}
        >
          1
        </li>

        <li onClick={() => {
          setPrevLayout(currentLayout)
          setCurrentLayout(2)
        }}
        className={`cursor-pointer p-5 hover:text-gray-400 ${currentLayout === 2 && "italic"}`}
        >
          2
        </li>

        <li onClick={() => {
          setPrevLayout(currentLayout)
          setCurrentLayout(3)
        }}
        className={`cursor-pointer p-5 hover:text-gray-400 ${currentLayout === 3 && "italic"}`}
        >
          3
        </li>
      </ul>
    </header>
  )
}